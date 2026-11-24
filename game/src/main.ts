// Neon Harbor — a 3D open-world crime game for make.fun's "Make GTA 6"
// bounty. One Game class wires every subsystem together. Fixed 60 Hz
// timestep, NaN guards, per-subsystem try/catch, and `window.__game`
// test hooks for the screenshot harness.
//
// CORE ENGINE (Builder 1): this file boots the renderer with a flat ground
// plane + sky and a minimal stub player, so the loop runs standalone.
// Builders 2-4 replace and extend it in place with their own tool calls:
//   Builder 2 — src/city.ts, src/entities.ts, src/traffic.ts: the seeded
//     city, the player + 7 vehicle types, carjack, traffic AI, peds.
//     Wire in: build the city in the constructor (after the ground plane),
//     register its colliders in `this.grid`, replace the StubPlayer and
//     the stub traffic/peds with the real classes.
//   Builder 3 — src/missions.ts, src/hud.ts, src/police.ts, src/combat.ts,
//     src/audio.ts, src/economy.ts: missions, HUD + minimap + big map,
//     wanted/police/heli, combat, WebAudio, save/load, WASTED/BUSTED,
//     day/night + rain. Wire in: call their update() inside update()
//     (own try/catch each), feed state() from their systems, replace the
//     debug overlay with the real HUD.
//   Builder 4 — integration: screenshots, determinism, kit check, commit.
//
// Every STUB below is marked with a `// STUB (Builder N)` comment. A stub
// is a no-op stand-in with the same interface the real module will have,
// so tsc passes and the game runs before Builders 2-3 land.
//
// Interfaces this file owns:
//   Game.state / window.__game.state()  the snapshot the harness reads
//   window.__game.step(n)   advance the fixed-timestep sim n steps, sync
//   window.__game.shot(name) apply a screenshot preset (chase/street/
//                           mission/map/night/title)
//   window.__game.teleport(x, z)  move the player (and their car, if any)
//   window.__game.vehicles()      list of vehicles {kind,x,z,heading}
//   window.__game.hurt(n)   damage the player, returns current hp
//   window.__game.setTimeOfDay(h) / .start() / .respawn() / .errors()
// NOTE: window.__shotReady does NOT exist (that was a round-4 bug) — the
// harness waits on window.__game instead. Do not reintroduce it.
import * as THREE from 'three';
import { RNG, SpatialGrid, clamp, clean } from './random';
import {
  DAY, PHYSICS, SEED_DEFAULT, SHOT_TIME, WEAPONS, WEAPON_ORDER,
  type WeaponKind,
} from './config';
import { FX, Sky, createRenderer } from './render';
import { CameraRig } from './camera';
import { Input } from './input';
import { FixedLoop } from './loop';
import { City } from './city';
import { Vehicle, exitCarSpot, nearestEnterable, spawnParkedCars } from './vehicles';
import { Traffic } from './traffic';
import { Peds } from './peds';
import { AudioSys } from './audio';
import { Combat } from './combat';
import { Police } from './police';
import { Missions } from './missions';
import { Economy } from './economy';
import { HUD } from './hud';

export type GameState = 'title' | 'playing' | 'paused' | 'map' | 'dead' | 'busted';

const HOSPITAL = { x: 0, z: 80 };
const SPAWN = { x: 0, z: 40 };

// ---------------------------------------------------------------------------
// STUBS — Builders 2-3 replace each of these with the real module.
// ---------------------------------------------------------------------------

/** STUB (Builder 2): minimal on-foot player. The real Player (entities.ts)
 *  adds vehicles, weapons, carjack and collision; the shape
 *  (pos/heading/hp/money/wanted/inCar/speed) is the contract state() and
 *  the hooks already speak. */
class StubPlayer {
  pos = new THREE.Vector3(SPAWN.x, 0, SPAWN.z);
  heading = Math.PI;
  hp = 100;
  armor = 0;
  money = 0;
  wanted = 0;
  speed = 0;
  dead = false;
  inCar: Vehicle | null = null;
  currentWeapon: WeaponKind = 'fist';
  private owned = new Map<WeaponKind, { ammo: number; reserve: number }>();
  readonly mesh = new THREE.Group();

  constructor() {
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 1.1, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x2a4a8a, roughness: 0.8 }),
    );
    body.position.y = 0.95;
    body.castShadow = true;
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 12, 10),
      new THREE.MeshStandardMaterial({ color: 0xd8a077, roughness: 0.7 }),
    );
    head.position.y = 1.75;
    head.castShadow = true;
    this.mesh.add(body, head);
    this.mesh.position.copy(this.pos);
    this.giveWeapon('fist', -1, 0);
  }

  hasWeapon(kind: WeaponKind): boolean {
    return this.owned.has(kind);
  }

  giveWeapon(kind: WeaponKind, ammo: number, reserve: number): void {
    this.owned.set(kind, { ammo, reserve });
  }

  ammo(): { ammo: number; reserve: number } {
    return this.owned.get(this.currentWeapon) ?? { ammo: 0, reserve: 0 };
  }

  /** Camera-relative on-foot movement. Builder 2 replaces this with the
   *  real controller (collision, jumping, driving). */
  update(dt: number, fwd: number, strafe: number, sprint: boolean, yaw: number): void {
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    const rx = Math.cos(yaw);
    const rz = -Math.sin(yaw);
    let dx = fx * fwd + rx * strafe;
    let dz = fz * fwd + rz * strafe;
    const len = Math.hypot(dx, dz);
    if (len > 0.01) {
      dx /= len;
      dz /= len;
      const sp = sprint ? PHYSICS.sprintSpeed : PHYSICS.walkSpeed;
      this.pos.x += dx * sp * dt;
      this.pos.z += dz * sp * dt;
      this.pos.x = clamp(this.pos.x, -480, 480);
      this.pos.z = clamp(this.pos.z, -480, 480);
      this.heading = Math.atan2(dx, dz);
      this.speed = sp;
    } else {
      this.speed = 0;
    }
    this.mesh.position.copy(this.pos);
    this.mesh.rotation.y = this.heading;
  }
}

// (Builder 2: the real City lives in src/city.ts — see the Game fields.)
// (Builder 3: Police / Combat / Missions / AudioSys / Economy / HUD are
//  the real modules now — see the Game fields below.)

// ---------------------------------------------------------------------------
// Game
// ---------------------------------------------------------------------------

export class Game {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private sky: Sky;
  private fx: FX;
  private rig: CameraRig;
  private input: Input;
  private loop: FixedLoop;
  private city: City; // Builder 2: real city (src/city.ts)
  private traffic: Traffic; // Builder 2: real traffic (src/traffic.ts)
  private peds: Peds; // Builder 2: real peds (src/peds.ts)
  private parked: Vehicle[] = []; // Builder 2: parked cars (src/vehicles.ts)
  private audio!: AudioSys; // Builder 3: real audio (src/audio.ts)
  private combat!: Combat; // Builder 3: real combat (src/combat.ts)
  private police!: Police; // Builder 3: real police (src/police.ts)
  private missions!: Missions; // Builder 3: real missions (src/missions.ts)
  private economy!: Economy; // Builder 3: real economy (src/economy.ts)
  private hud!: HUD; // Builder 3: real HUD (src/hud.ts)
  /** Spatial grid for collision / neighbour queries. Builders 2-3 register
   *  buildings, vehicles, peds and police here; main.ts only owns the grid. */
  readonly grid = new SpatialGrid<unknown>(16);
  player: StubPlayer; // STUB (Builder 2) -> Player
  state: GameState = 'title';
  private seed = SEED_DEFAULT;
  private timeOfDay: number = DAY.defaultStart;
  private fps = 60;
  private debug = false;
  private debugEl: HTMLDivElement | null = null;
  private time = 0;
  private errorLog: string[] = [];
  private deadT = 0;
  private bustedT = 0;
  private message: string | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = createRenderer(canvas);
    this.camera = new THREE.PerspectiveCamera(
      70, window.innerWidth / window.innerHeight, 0.1, 900,
    );
    this.sky = new Sky(this.scene, new RNG(SEED_DEFAULT + 1));
    this.fx = new FX(this.scene, new RNG(SEED_DEFAULT + 2));
    this.rig = new CameraRig(this.camera);
    this.sky.setTimeOfDay(this.timeOfDay);

    // Seeded world: ?seed= reseeds the city/traffic/peds (Builder 2 reads
    // it); the default seed is 1337.
    const seedParams = new URLSearchParams(window.location.search);
    const seedRaw = seedParams.get('seed');
    const seedNum = seedRaw === null ? NaN : Number(seedRaw);
    this.seed = Number.isFinite(seedNum) ? seedNum | 0 : SEED_DEFAULT;

    // Builder 2: seeded city, traffic, peds and parked cars. The city
    // owns the ground now (no flat stub plane — it would z-fight).
    this.city = new City(this.scene, this.seed);
    for (const b of this.city.colliders) {
      this.grid.add(b, (b.minX + b.maxX) / 2, (b.minZ + b.maxZ) / 2);
    }
    this.rig.setObstacles(this.city.colliders);
    this.traffic = new Traffic(this.scene, this.city, new RNG(this.seed + 11));
    this.peds = new Peds(this.scene, this.city, new RNG(this.seed + 23));
    this.parked = spawnParkedCars(this.scene, this.city, new RNG(this.seed + 37), 18);
    this.player = new StubPlayer();
    this.scene.add(this.player.mesh);

    // Builder 3: real subsystems (constructed here — they need the scene).
    this.audio = new AudioSys();
    this.combat = new Combat(this.scene, this.seed);
    this.police = new Police(this.seed);
    this.missions = new Missions(this.scene, this.seed);
    this.economy = new Economy(this.scene, this.seed);
    this.hud = new HUD();

    this.input = new Input(canvas, {
      onUnlockAudio: () => this.audio.unlock(),
      onDebugToggle: () => this.toggleDebug(),
      onEnterTitle: () => { if (this.state === 'title') this.start(); },
      onPauseToggle: () => {
        if (this.state === 'map') this.state = 'playing';
        else if (this.state === 'playing') this.state = 'paused';
        else if (this.state === 'paused') this.state = 'playing';
      },
      onMapToggle: () => {
        if (this.state === 'playing') this.state = 'map';
        else if (this.state === 'map') this.state = 'playing';
      },
      onAction: (code) => this.onActionKey(code),
    });
    this.input.attach();

    window.addEventListener('resize', () => this.onResize());

    this.rig.snap(this.player.pos);
    this.installHooks();
    this.loop = new FixedLoop({
      update: (dt) => this.update(dt),
      render: () => {
        try {
          this.renderer.render(this.scene, this.camera);
        } catch (err) {
          this.logError('render', err);
        }
      },
    });
    this.loop.start();
  }

  /** Shared context handed to the Builder 3 subsystems each frame. One
   *  object satisfies every subsystem's ctx interface (structural typing);
   *  callbacks route subsystem events back through the Game (WASTED /
   *  BUSTED / banner / toast). */
  private ctx(): {
    scene: THREE.Scene; city: City; fx: FX; peds: Peds; traffic: Traffic;
    parked: Vehicle[]; audio: AudioSys; police: Police; missions: Missions;
    combat: Combat; economy: Economy; player: StubPlayer; time: number;
    timeOfDay: number; yaw: number;
    damagePlayer: (n: number) => number;
    onBusted: () => void;
    setBanner: (text: string | null) => void;
    setMessage: (text: string) => void;
  } {
    return {
      scene: this.scene,
      city: this.city,
      fx: this.fx,
      peds: this.peds,
      traffic: this.traffic,
      parked: this.parked,
      audio: this.audio,
      police: this.police,
      missions: this.missions,
      combat: this.combat,
      economy: this.economy,
      player: this.player,
      time: this.time,
      timeOfDay: this.timeOfDay,
      yaw: this.rig.yaw,
      damagePlayer: (n: number) => this.hurt(n),
      onBusted: () => {
        if (this.state !== 'playing') return;
        this.state = 'busted';
        this.bustedT = 0;
        this.hud.setBanner('BUSTED');
        this.setStatus('BUSTED');
      },
      setBanner: (text: string | null) => this.hud.setBanner(text),
      setMessage: (text: string) => { this.message = text; },
    };
  }

  // ---------- input actions ----------

  private onActionKey(code: string): void {
    if (this.state !== 'playing') return;
    const ctx = this.ctx();
    if (code === 'KeyN') this.missions.startNext(ctx);
    else if (code === 'KeyT') this.missions.startTaxi(ctx);
    else if (code === 'KeyC') this.missions.startRace(ctx);
    else if (code === 'KeyE') this.enterCar(); // Builder 2: enter/exit car
    else if (code === 'KeyR') this.combat.reload(this.player);
    else if (code === 'KeyQ') this.message = `Radio: ${this.audio.cycleStation()}`;
    else if (code === 'KeyG') this.combat.throwGrenade(this.player, ctx);
    else if (code === 'KeyB') this.message = this.economy.buyAtShop(this.player, ctx);
    else if (code.startsWith('Digit')) {
      const idx = Number(code.slice(5)) - 1;
      const kind = WEAPON_ORDER[idx];
      if (kind && this.player.hasWeapon(kind)) {
        this.player.currentWeapon = kind;
        this.audio.uiClick();
      }
    }
  }

  private onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  // ---------- debug overlay (F3) ----------

  private toggleDebug(): void {
    this.debug = !this.debug;
    if (this.debug && !this.debugEl) {
      const el = document.createElement('div');
      el.id = 'debug-overlay';
      el.style.cssText = 'position:fixed;top:8px;left:8px;z-index:10;background:rgba(0,0,0,0.6);color:#0f0;font:12px monospace;padding:8px;white-space:pre;pointer-events:none;';
      document.body.appendChild(el);
      this.debugEl = el;
    }
    if (this.debugEl) this.debugEl.style.display = this.debug ? 'block' : 'none';
  }

  private refreshDebug(): void {
    if (!this.debug || !this.debugEl) return;
    const p = this.player.pos;
    this.debugEl.textContent =
      `fps ${this.fps.toFixed(1)} steps ${this.loop.totalSteps}\n` +
      `pos ${p.x.toFixed(1)}, ${p.z.toFixed(1)} hp ${Math.floor(this.player.hp)}\n` +
      `time ${this.timeOfDay.toFixed(2)} wanted ${this.player.wanted} state ${this.state}\n` +
      `errors ${this.errorLog.length ? this.errorLog[this.errorLog.length - 1] : 'none'}`;
  }

  private logError(where: string, err: unknown): void {
    const msg = `${where}: ${err instanceof Error ? err.message : String(err)}`;
    this.errorLog.push(msg);
    if (this.errorLog.length > 20) this.errorLog.shift();
  }

  // ---------- public control (hooks + builders) ----------

  start(): void {
    if (this.state === 'title' || this.state === 'dead' || this.state === 'busted') {
      this.audio.unlock();
      this.state = 'playing';
      this.hud.setBanner(null);
      // Rook starts armed: a pistol keeps the first shoot test honest.
      if (!this.player.hasWeapon('pistol')) {
        this.player.giveWeapon('pistol', 12, 48);
      }
      this.setStatus('Playing — Neon Harbor');
    }
  }

  setTimeOfDay(h: number): void {
    this.timeOfDay = ((h % 24) + 24) % 24;
    this.sky.setTimeOfDay(this.timeOfDay);
  }

  respawn(): void {
    // Builder 2: respawning on foot — step out of any car first.
    if (this.player.inCar) {
      this.player.inCar = null;
      this.player.mesh.visible = true;
    }
    this.player.dead = false;
    this.player.hp = 100;
    this.player.pos.set(HOSPITAL.x, 0, HOSPITAL.z);
    this.player.heading = Math.PI;
    this.police.setWanted(0);
    this.state = 'playing';
    this.hud.setBanner(null);
    this.rig.distance = 9;
    this.rig.snap(this.player.pos);
  }

  /** Vehicles in the world: parked cars + ambient traffic (Builder 2). */
  vehicles(): { kind: string; x: number; z: number; heading: number }[] {
    return [...this.parked, ...this.traffic.vehicles()].map((v) => ({
      kind: v.def.kind, x: v.pos.x, z: v.pos.z, heading: v.heading,
    }));
  }

  /** Enter the nearest car (carjack: a driven car loses its driver) or
   *  step out of the current one. Bound to KeyE and window.__game.enterCar. */
  enterCar(): void {
    if (this.state !== 'playing') return;
    if (this.player.inCar) {
      const v = this.player.inCar;
      const spot = exitCarSpot(v);
      this.player.inCar = null;
      this.player.pos.set(spot.x, 0, spot.z);
      this.player.heading = spot.heading;
      this.player.speed = 0;
      this.player.mesh.visible = true;
      this.player.mesh.position.copy(this.player.pos);
      this.player.mesh.rotation.y = this.player.heading;
      this.message = 'Exited vehicle';
      return;
    }
    const all = [...this.parked, ...this.traffic.vehicles()];
    const v = nearestEnterable(all, this.player.pos.x, this.player.pos.z, 4.5);
    if (!v) {
      this.message = 'No vehicle nearby';
      return;
    }
    this.traffic.detachCar(v); // a carjacked traffic car leaves AI control
    v.hasDriver = false;
    this.player.inCar = v;
    this.player.pos.copy(v.pos);
    this.player.heading = v.heading;
    this.player.speed = v.speed;
    this.player.mesh.visible = false;
    this.message = `Entered ${v.def.label}`;
  }

  hurt(n: number): number {
    // Armor absorbs damage first, then health.
    let remaining = n;
    if (this.player.armor > 0) {
      const absorbed = Math.min(this.player.armor, remaining);
      this.player.armor -= absorbed;
      remaining -= absorbed;
    }
    this.player.hp = clamp(this.player.hp - remaining, 0, 100);
    if (this.player.hp <= 0 && this.state === 'playing') {
      this.state = 'dead';
      this.player.dead = true;
      this.deadT = 0;
      this.hud.setBanner('WASTED');
      this.audio.wasted();
      this.setStatus('WASTED');
    }
    return this.player.hp;
  }

  /** Save the game now (pause menu / hook). Builder 3: real save. */
  saveGame(): boolean {
    const ok = this.economy.save({
      player: this.player,
      timeOfDay: this.timeOfDay,
      missionsDone: this.missions.missionDone,
      missionsCompleted: this.missions.completed,
      collectibles: this.missions.coinsCollected,
      elapsed: this.time,
    });
    this.message = ok ? 'Game saved' : 'Save failed';
    return ok;
  }

  /** Load the saved game (pause menu / hook). Builder 3: real load. */
  loadGame(): boolean {
    const data = this.economy.load();
    if (!data) {
      this.message = 'No save found';
      return false;
    }
    this.player.money = data.cash;
    this.player.hp = 100;
    this.player.armor = 0;
    this.missions.completed = [...data.missionsCompleted];
    this.missions.missionDone = data.missionsDone;
    this.missions.coinsCollected = data.collectibles;
    this.economy.collectiblesFound = data.collectibles;
    this.economy.stats.missionsDone = data.stats.missionsDone;
    this.economy.stats.carsStolen = data.stats.carsStolen;
    this.economy.stats.fares = data.stats.fares;
    this.economy.stats.distance = data.stats.distance;
    this.economy.stats.wantedMax = data.stats.wantedMax;
    this.setTimeOfDay(data.clockMin / 60);
    this.police.clearWanted();
    this.state = 'playing';
    this.message = 'Game loaded';
    return true;
  }

  teleport(x: number, z: number): void {
    this.player.pos.set(clean(x), 0, clean(z));
    // Builder 2: a teleported driver takes their car with them.
    if (this.player.inCar) {
      this.player.inCar.pos.set(clean(x), 0, clean(z));
      this.player.inCar.group.position.copy(this.player.inCar.pos);
    }
    this.rig.snap(this.player.pos);
  }

  /** Screenshot presets (?shot=chase|street|mission|map|night|title).
   *  Wanted stars are pinned per shot by the real Police (Builder 3);
   *  the stub pins nothing. */
  applyShot(name: string): void {
    const spots: Record<string, { x: number; z: number; time: number }> = {
      chase: { x: 0, z: 120, time: SHOT_TIME.chase },
      street: { x: 0, z: 40, time: SHOT_TIME.street },
      mission: { x: -40, z: 0, time: SHOT_TIME.mission },
      map: { x: 0, z: 0, time: SHOT_TIME.map },
      night: { x: 0, z: 40, time: SHOT_TIME.night },
      title: { x: 0, z: 40, time: SHOT_TIME.default },
    };
    const s = spots[name] ?? spots.street;
    this.setTimeOfDay(s.time);
    this.teleport(s.x, s.z);
    const isShot = name === 'chase' || name === 'street' || name === 'mission' || name === 'night';
    this.missions.shotMode = isShot;
    this.traffic.shotMode = name === 'chase' || name === 'street' || name === 'mission';
    if (name === 'chase') this.police.pinStars(3);
    else if (name === 'mission') this.police.pinStars(5);
    else this.police.pinStars(null);
    if (name === 'map') {
      this.state = 'map';
    } else if (name === 'title') {
      this.state = 'title';
    } else {
      this.state = 'playing';
    }
  }

  private setStatus(text: string): void {
    const el = document.getElementById('status');
    if (el) el.textContent = text;
  }

  // ---------- simulation ----------

  /** One fixed step. Each subsystem runs inside its own try/catch so a
   *  failure in one never takes the whole frame (or the whole game) down. */
  private update(dt: number): void {
    this.time += dt;
    this.fps = this.loop.fps;
    try {
      // Camera drag orbits the rig; the player only moves while playing.
      const drag = this.input.consumeDrag();
      if (drag.dx !== 0 || drag.dy !== 0) {
        this.rig.yaw -= drag.dx * 0.004;
        this.rig.pitch += drag.dy * 0.003;
        this.rig.clampPitch();
      }
      if (this.state === 'playing') {
        // Builder 2: driving — the car takes the input, the player rides
        // along (pos/heading/speed sync to the vehicle every step).
        if (this.player.inCar) {
          const v = this.player.inCar;
          v.update(dt, {
            throttle: this.input.fwd,
            steer: this.input.strafe,
            handbrake: this.input.handbrake,
          }, this.city, this.time);
          this.player.pos.copy(v.pos);
          this.player.heading = v.heading;
          this.player.speed = Math.abs(v.speed);
        } else {
          this.player.update(dt, this.input.fwd, this.input.strafe, this.input.sprint, this.rig.yaw);
          // Builder 2: on-foot building/water collision (circle push-out).
          this.city.collideCircle(this.player.pos, 0.6);
        }
      } else {
        this.player.speed = 0;
      }
    } catch (err) { this.logError('player', err); }
    try {
      this.city.update(dt, this.player.pos.x, this.player.pos.z, this.time);
      this.city.setNight(this.sky.lampLevel);
    } catch (err) { this.logError('city', err); }
    try {
      this.traffic.update(dt, this.player.pos.x, this.player.pos.z, this.time, this.player.inCar);
    } catch (err) { this.logError('traffic', err); }
    try {
      this.peds.update(dt, this.player.pos.x, this.player.pos.z);
    } catch (err) { this.logError('peds', err); }
    // WASTED / BUSTED timers: a beat on the banner, then the penalty +
    // respawn (hospital -$200 / precinct fine — real Economy, Builder 3).
    if (this.state === 'dead') {
      this.deadT += dt;
      if (this.deadT > 2.5) {
        const fee = this.economy.applyWasted(this.player);
        this.message = `WASTED — hospital bill -$${fee}`;
        this.respawn();
      }
    } else if (this.state === 'busted') {
      this.bustedT += dt;
      if (this.bustedT > 2.5) {
        const fee = this.economy.applyBusted(this.player);
        this.message = `BUSTED — fine -$${fee}`;
        this.hud.setBanner(null);
        this.player.pos.set(SPAWN.x, 0, SPAWN.z);
        this.player.heading = Math.PI;
        this.state = 'playing';
        this.rig.snap(this.player.pos);
      }
    }
    if (this.state === 'playing') {
      const ctx = this.ctx();
      try {
        this.combat.update(dt, ctx);
      } catch (err) { this.logError('combat', err); }
      try {
        this.police.update(dt, ctx);
        this.player.wanted = this.police.wanted;
      } catch (err) { this.logError('police', err); }
      try {
        this.missions.update(dt, ctx);
      } catch (err) { this.logError('missions', err); }
      try {
        this.economy.update(dt, ctx);
      } catch (err) { this.logError('economy', err); }
      try {
        if (this.input.firing) {
          this.combat.firePlayerShot(this.player, ctx);
        }
        // Engine hum follows the driven car's speed ratio.
        const car = this.player.inCar;
        this.audio.engine(car ? Math.abs(car.speed) / car.def.topSpeed : 0, car !== null);
      } catch (err) { this.logError('shoot', err); }
    }
    try {
      // Game clock: 1 real second = 1 game minute, so dusk visibly moves.
      this.setTimeOfDay(this.timeOfDay + dt / 60);
    } catch (err) { this.logError('clock', err); }
    try {
      this.fx.update(dt, this.player.pos.x, this.player.pos.z);
    } catch (err) { this.logError('fx', err); }
    try {
      const shake = this.fx.shakeOffset(dt);
      this.rig.update(dt, this.player.pos, shake.x, shake.y);
    } catch (err) { this.logError('camera', err); }
    try {
      this.sky.updateSunFollow(this.player.pos.x, this.player.pos.z);
    } catch (err) { this.logError('sky', err); }
    try {
      this.audio.setRadioOn(this.state === 'playing' || this.state === 'title');
      this.audio.update(dt);
    } catch (err) { this.logError('audio', err); }
    try {
      // Builder 3: the real HUD refreshes in every state — this is what
      // keeps the big map live while paused/open. The toast message is
      // consumed here (the HUD holds it for 3 s on its own timer).
      this.hud.update(dt, {
        player: this.player,
        police: this.police,
        missions: this.missions,
        combat: this.combat,
        economy: this.economy,
        audio: this.audio,
        city: this.city,
        state: this.state,
        timeOfDay: this.timeOfDay,
        message: this.message,
        fps: this.fps,
      });
      this.message = null;
    } catch (err) { this.logError('hud', err); }
    this.refreshDebug();
  }

  // ---------- test hooks ----------

  private installHooks(): void {
    const hooks = {
      state: () => ({
        state: this.state,
        money: Math.floor(this.player.money),
        hp: Math.floor(this.player.hp),
        wanted: this.police.wanted,
        mission: this.missions.activeId || null,
        missionActive: this.missions.active,
        objective: this.missions.objectiveText,
        pos: [Number(this.player.pos.x.toFixed(1)), Number(this.player.pos.z.toFixed(1))],
        speed: Number(this.player.speed.toFixed(1)),
        inCar: this.player.inCar !== null,
        weapon: this.player.currentWeapon,
        weaponLabel: WEAPONS[this.player.currentWeapon].label,
        ammo: this.player.ammo().ammo,
        timeOfDay: Number(this.timeOfDay.toFixed(2)),
        traffic: this.traffic ? this.traffic.count : 0,
        peds: this.peds ? this.peds.count : 0,
        vehicles: this.vehicles().length,
        fps: Number(this.fps.toFixed(1)),
        steps: this.loop.totalSteps,
        errors: this.errorLog.slice(-5),
        heli: this.police.heliActive,
        gang: this.combat.aliveGang().length,
        coins: this.missions.coinsCollected,
        station: this.audio.stationName,
        muted: this.audio.muted,
        marker: this.missions.marker,
        message: this.message,
      }),
      teleport: (x: number, z: number) => this.teleport(x, z),
      setTimeOfDay: (h: number) => this.setTimeOfDay(h),
      shot: (name: string) => this.applyShot(name),
      start: () => this.start(),
      respawn: () => this.respawn(),
      vehicles: () => this.vehicles(),
      hurt: (n: number) => this.hurt(n),
      shoot: () => this.combat.firePlayerShot(this.player, this.ctx()),
      missionStart: (id: number) => this.missions.start(id, this.ctx()),
      missionNext: () => this.missions.startNext(this.ctx()),
      enterCar: () => this.enterCar(),
      giveWeapon: (kind: WeaponKind, ammo: number, reserve: number) => this.player.giveWeapon(kind, ammo, reserve),
      setWanted: (n: number) => this.police.setWanted(n),
      save: () => this.saveGame(),
      load: () => this.loadGame(),
      startTaxi: () => this.missions.startTaxi(this.ctx()),
      startRace: () => this.missions.startRace(this.ctx()),
      throwGrenade: () => this.combat.throwGrenade(this.player, this.ctx()),
      // advance the fixed-timestep sim N steps synchronously (tests)
      step: (n: number) => { this.loop.step(n); },
      errors: () => this.errorLog.slice(),
    };
    (window as unknown as { __game: unknown }).__game = hooks;
  }

  dispose(): void {
    this.loop.stop();
  }
}

// boot
const canvas = document.getElementById('game') as HTMLCanvasElement | null;
if (canvas) {
  const game = new Game(canvas);
  (window as unknown as { __gameInstance: Game }).__gameInstance = game;
  // shot mode from the URL (?shot=chase|street|mission|map|night|title)
  const params = new URLSearchParams(window.location.search);
  // ?seed= is accepted and read by the Game constructor: the city builder
  // (Builder 2) uses it to reseed the world; the default seed is 1337.
  const timeParam = params.get('time');
  if (timeParam) game.setTimeOfDay(Number(timeParam));
  const shot = params.get('shot');
  if (shot) game.applyShot(shot);
}
