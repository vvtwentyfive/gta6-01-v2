// Neon Harbor — wanted level + police (Builder 3).
//
// Wanted 0–5 stars driven by a heat meter: crimes add heat, heat decays
// when the player stays clean and out of sight, and each whole star of
// heat raises the wanted level. Cruisers spawn on nearby roads and chase
// / ram the player; at 3+ stars a helicopter circles overhead with a
// searchlight. Standing still next to a cruiser on foot gets you BUSTED;
// the bust itself is reported to main.ts through ctx.onBusted().
import * as THREE from 'three';
import { clamp, RNG } from './random';
import type { PlayerLike } from './context';
import type { City } from './city';
import type { FX } from './render';
import type { AudioSys } from './audio';
import { spawnVehicle, type Vehicle } from './vehicles';

export interface PoliceCar {
  v: Vehicle;
  state: 'chase' | 'ram' | 'search';
  stuckT: number;
  ramT: number;
}

export interface PoliceCtx {
  scene: THREE.Scene;
  city: City;
  fx: FX;
  audio: AudioSys;
  player: PlayerLike;
  time: number;
  /** main.ts hook: run the BUSTED flow (banner, fine, respawn). */
  onBusted: () => void;
  /** main.ts hook: damage the player (WASTED flow). */
  damagePlayer: (n: number) => void;
}

const MAX_WANTED = 5;
/** Heat per whole star. */
const HEAT_PER_STAR = 1;

export class Police {
  wanted = 0;
  policeCars: PoliceCar[] = [];
  heliActive = false;
  private rng: RNG;
  private heat = 0;
  private pinned: number | null = null;
  private spawnT = 0;
  private bustT = 0;
  private heli: THREE.Group | null = null;
  private heliLight: THREE.SpotLight | null = null;
  private heliAngle = 0;
  private sirenOn = false;

  constructor(seed = 1337) {
    this.rng = new RNG(seed + 91);
  }

  // ---------- wanted level ----------

  addWanted(n: number): void {
    if (this.pinned !== null) return;
    this.heat = clamp(this.heat + n * HEAT_PER_STAR, 0, MAX_WANTED * HEAT_PER_STAR);
    this.syncWanted();
  }

  /** Fractional heat (gunfire, explosions, knocking peds down). */
  addHeat(x: number): void {
    if (this.pinned !== null) return;
    this.heat = clamp(this.heat + x, 0, MAX_WANTED * HEAT_PER_STAR);
    this.syncWanted();
  }

  setWanted(n: number): void {
    this.pinned = null;
    this.heat = clamp(n, 0, MAX_WANTED) * HEAT_PER_STAR;
    this.syncWanted();
  }

  clearWanted(): void {
    this.pinned = null;
    this.heat = 0;
    this.syncWanted();
  }

  /** Screenshot presets pin the stars (chase = 3, mission = 5). */
  pinStars(n: number | null): void {
    this.pinned = n === null ? null : clamp(n, 0, MAX_WANTED);
    if (this.pinned !== null) {
      this.wanted = this.pinned;
      this.heat = this.pinned * HEAT_PER_STAR;
    } else {
      this.syncWanted();
    }
  }

  private syncWanted(): void {
    const w = Math.floor(this.heat + 0.0001);
    if (w !== this.wanted) this.wanted = clamp(w, 0, MAX_WANTED);
  }

  // ---------- cruisers ----------

  private spawnCruiser(ctx: PoliceCtx): void {
    const p = ctx.player.pos;
    // Spawn on a road 60–110 units away, never on top of the player.
    let x = p.x;
    let z = p.z;
    for (let tries = 0; tries < 8; tries++) {
      const pt = ctx.city.randomRoadPoint(this.rng);
      const d = Math.hypot(pt.x - p.x, pt.z - p.z);
      if (d > 55 && d < 130) {
        x = pt.x;
        z = pt.z;
        break;
      }
    }
    const v = spawnVehicle(ctx.scene, 'police', x, z, this.rng.next() * Math.PI * 2, { police: true, driver: true });
    v.hp = 120;
    this.policeCars.push({ v, state: 'chase', stuckT: 0, ramT: 0 });
  }

  private removeCruiser(i: number, ctx: PoliceCtx): void {
    const c = this.policeCars[i];
    ctx.scene.remove(c.v.group);
    this.policeCars.splice(i, 1);
  }

  // ---------- helicopter ----------

  private ensureHeli(ctx: PoliceCtx): void {
    if (this.heli) return;
    const g = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1a2436, roughness: 0.4, metalness: 0.6 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.6, 2.2), bodyMat);
    g.add(body);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.5, 0.5), bodyMat);
    tail.position.set(3.6, 0.2, 0);
    g.add(tail);
    const rotor = new THREE.Mesh(
      new THREE.BoxGeometry(9, 0.08, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.6 }),
    );
    rotor.position.y = 1.1;
    rotor.name = 'rotor';
    g.add(rotor);
    const lamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xfff2c8, emissive: 0xffe9a0, emissiveIntensity: 2 }),
    );
    lamp.position.set(0, -0.9, 0);
    g.add(lamp);
    this.heliLight = new THREE.SpotLight(0xfff2c8, 900, 120, 0.32, 0.45, 1.4);
    this.heliLight.position.set(0, -0.9, 0);
    g.add(this.heliLight);
    this.heliLight.target.position.set(0, -40, 0);
    g.add(this.heliLight.target);
    g.position.set(ctx.player.pos.x, 42, ctx.player.pos.z);
    ctx.scene.add(g);
    this.heli = g;
  }

  private removeHeli(ctx: PoliceCtx): void {
    if (!this.heli) return;
    ctx.scene.remove(this.heli);
    this.heli = null;
    this.heliLight = null;
  }

  // ---------- per-frame ----------

  update(dt: number, ctx: PoliceCtx): void {
    const player = ctx.player;
    // Heat decays when clean; faster when far from any cruiser.
    if (this.pinned === null && this.wanted > 0) {
      const nearest = this.nearestCruiserDist(player);
      const decay = nearest > 60 ? 0.09 : 0.03;
      this.heat = Math.max(0, this.heat - decay * dt);
      this.syncWanted();
    }

    // Cruiser count tracks the wanted level.
    const wantCars = this.wanted;
    this.spawnT -= dt;
    if (this.policeCars.length < wantCars && this.spawnT <= 0) {
      this.spawnCruiser(ctx);
      this.spawnT = 1.2;
    }
    while (this.policeCars.length > wantCars) {
      this.removeCruiser(this.policeCars.length - 1, ctx);
    }

    // Cruiser AI: steer toward the player, ram when close.
    for (let i = this.policeCars.length - 1; i >= 0; i--) {
      const c = this.policeCars[i];
      const v = c.v;
      const d = Math.hypot(player.pos.x - v.pos.x, player.pos.z - v.pos.z);
      if (d > 260) {
        this.removeCruiser(i, ctx);
        continue;
      }
      const wantHeading = Math.atan2(player.pos.x - v.pos.x, player.pos.z - v.pos.z);
      let dh = wantHeading - v.heading;
      while (dh > Math.PI) dh -= Math.PI * 2;
      while (dh < -Math.PI) dh += Math.PI * 2;
      const steer = clamp(dh * 1.4, -1, 1);
      const throttle = d > 6 ? 1 : 0.4;
      v.update(dt, { throttle, steer, handbrake: false }, ctx.city, ctx.time);
      if (d < 7) {
        // Ram: push the player's car / hurt the player on foot.
        c.ramT += dt;
        if (c.ramT > 0.5) {
          c.ramT = 0;
          if (player.inCar) {
            player.inCar.hp -= 6;
            ctx.fx.sparks(player.pos.clone().add(new THREE.Vector3(0, 1, 0)), 6);
            ctx.fx.shake(0.25);
            if (player.inCar.hp <= 0) {
              player.inCar.isWreck = true;
            }
          } else {
            ctx.damagePlayer(6);
          }
        }
      } else {
        c.ramT = 0;
      }
      // Stuck detection: teleport the cruiser back onto a road near the player.
      if (Math.abs(v.speed) < 0.5 && d > 12) {
        c.stuckT += dt;
        if (c.stuckT > 4) {
          const pt = ctx.city.randomRoadPoint(this.rng);
          v.pos.set(pt.x, 0, pt.z);
          v.heading = this.rng.next() * Math.PI * 2;
          v.group.position.copy(v.pos);
          c.stuckT = 0;
        }
      } else {
        c.stuckT = 0;
      }
    }

    // Helicopter at 3+ stars.
    const wantHeli = this.wanted >= 3;
    if (wantHeli && !this.heliActive) {
      this.heliActive = true;
      this.ensureHeli(ctx);
    } else if (!wantHeli && this.heliActive) {
      this.heliActive = false;
      this.removeHeli(ctx);
    }
    if (this.heli) {
      this.heliAngle += dt * 0.35;
      const px = player.pos.x + Math.cos(this.heliAngle) * 26;
      const pz = player.pos.z + Math.sin(this.heliAngle) * 26;
      this.heli.position.set(px, 42, pz);
      this.heli.rotation.y = Math.atan2(player.pos.x - px, player.pos.z - pz);
      const rotor = this.heli.getObjectByName('rotor');
      if (rotor) rotor.rotation.y += dt * 22;
      if (this.heliLight) {
        this.heliLight.target.position.set(
          player.pos.x - px, -42, player.pos.z - pz,
        );
        this.heliLight.target.updateMatrixWorld();
      }
    }

    // Siren while any cruiser is out.
    const sirenWant = this.policeCars.length > 0;
    if (sirenWant !== this.sirenOn) {
      this.sirenOn = sirenWant;
      ctx.audio.siren(sirenWant);
    }

    // BUSTED: on foot, slow, and a cruiser right next to the player.
    if (this.wanted > 0 && !player.inCar && !player.dead) {
      const nd = this.nearestCruiserDist(player);
      if (nd < 4 && Math.abs(player.speed) < 1.5) {
        this.bustT += dt;
        if (this.bustT > 1.6) {
          this.bustT = 0;
          this.clearWanted();
          ctx.audio.busted();
          ctx.onBusted();
        }
      } else {
        this.bustT = 0;
      }
    } else {
      this.bustT = 0;
    }
  }

  private nearestCruiserDist(player: PlayerLike): number {
    let best = Infinity;
    for (const c of this.policeCars) {
      const d = Math.hypot(player.pos.x - c.v.pos.x, player.pos.z - c.v.pos.z);
      if (d < best) best = d;
    }
    return best;
  }
}
