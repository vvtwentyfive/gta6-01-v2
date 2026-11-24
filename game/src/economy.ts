// Neon Harbor — economy + save/load (Builder 3).
//
// Money, mission payouts (paid by Missions straight into player.money),
// world pickups (cash / health / armor / ammo), 20 hidden "sun coins",
// two Neon Surplus shops (armor $150, ammo $50), run stats, and the
// localStorage save in the reference format (save.js):
//   { version: 1, cash, missionsDone, missionsCompleted, stats, collectibles,
//     clockMin, savedAt }
// Saves are wrapped so a blocked store never breaks the game.
import * as THREE from 'three';
import { SAVE_KEY } from './config';
import { RNG } from './random';
import type { PlayerLike } from './context';
import type { City } from './city';
import type { AudioSys } from './audio';
import type { Missions } from './missions';

export interface SaveData {
  version: 1;
  cash: number;
  missionsDone: number;
  missionsCompleted: number[];
  stats: {
    missionsDone: number;
    carsStolen: number;
    fares: number;
    distance: number;
    wantedMax: number;
  };
  collectibles: number;
  clockMin: number;
  savedAt: number;
}

export interface EconomySnapshot {
  player: PlayerLike;
  timeOfDay: number;
  missionsDone: number;
  missionsCompleted: number[];
  collectibles: number;
  elapsed: number;
}

export interface EconomyCtx {
  scene: THREE.Scene;
  city: City;
  audio: AudioSys;
  missions: Missions;
  player: PlayerLike;
  timeOfDay: number;
}

type PickupKind = 'cash' | 'health' | 'armor' | 'ammo';

interface Pickup {
  kind: PickupKind;
  mesh: THREE.Group;
  pos: THREE.Vector3;
  phase: number;
}

interface Shop {
  x: number;
  z: number;
  name: string;
}

const SHOPS: Shop[] = [
  { x: -80, z: -80, name: 'Neon Surplus — Downtown' },
  { x: 240, z: 160, name: 'Neon Surplus — Harbor' },
];

const ARMOR_PRICE = 150;
const AMMO_PRICE = 50;
const TOTAL_COINS = 20;

const PICKUP_COLORS: Record<PickupKind, number> = {
  cash: 0x2aff7a,
  health: 0xff4a5a,
  armor: 0x37a0ff,
  ammo: 0xffc42a,
};

export class Economy {
  stats = {
    missionsDone: 0,
    carsStolen: 0,
    fares: 0,
    distance: 0,
    wantedMax: 0,
  };
  collectiblesFound = 0;
  shopPrompt: string | null = null;

  private scene: THREE.Scene;
  private rng: RNG;
  private pickups: Pickup[] = [];
  private coins: Pickup[] = [];
  private nearShop: Shop | null = null;
  private lastX = 0;
  private lastZ = 0;
  private started = false;

  constructor(scene: THREE.Scene, seed = 1337) {
    this.scene = scene;
    this.rng = new RNG(seed + 131);
    this.spawnWorldItems();
  }

  // ---------- world items ----------

  private makePickupMesh(kind: PickupKind): THREE.Group {
    const g = new THREE.Group();
    const color = PICKUP_COLORS[kind];
    if (kind === 'cash') {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 0.25, 0.5),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.7 }),
      );
      box.position.y = 0.5;
      g.add(box);
    } else {
      const orb = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.45),
        new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.9 }),
      );
      orb.position.y = 0.8;
      g.add(orb);
    }
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.7, 0.9, 24),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.08;
    g.add(ring);
    return g;
  }

  private spawnWorldItems(): void {
    // 10 pickups on road points (deterministic from the seed).
    const kinds: PickupKind[] = ['cash', 'cash', 'health', 'armor', 'ammo', 'cash', 'health', 'ammo', 'cash', 'armor'];
    for (const kind of kinds) {
      const pt = this.spawnPoint();
      const mesh = this.makePickupMesh(kind);
      mesh.position.set(pt.x, 0, pt.z);
      this.scene.add(mesh);
      this.pickups.push({ kind, mesh, pos: new THREE.Vector3(pt.x, 0, pt.z), phase: this.rng.next() * 6 });
    }
    // 20 sun coins scattered on roads.
    for (let i = 0; i < TOTAL_COINS; i++) {
      const pt = this.spawnPoint();
      const mesh = new THREE.Group();
      const coin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 0.12, 20),
        new THREE.MeshStandardMaterial({ color: 0xffc42a, emissive: 0xa87800, emissiveIntensity: 0.8, metalness: 0.8, roughness: 0.25 }),
      );
      coin.rotation.x = Math.PI / 2;
      coin.position.y = 0.9;
      mesh.add(coin);
      mesh.position.set(pt.x, 0, pt.z);
      this.scene.add(mesh);
      this.coins.push({ kind: 'cash', mesh, pos: new THREE.Vector3(pt.x, 0, pt.z), phase: this.rng.next() * 6 });
    }
  }

  /** A road point away from the spawn plaza, from the seeded RNG. */
  private spawnPoint(): { x: number; z: number } {
    // Road lines are multiples of 80; pick one and offset along it.
    const lines = [-400, -320, -240, -160, -80, 0, 80, 160, 240, 320, 400];
    const a = lines[Math.floor(this.rng.next() * lines.length)];
    const b = lines[Math.floor(this.rng.next() * lines.length)];
    if (this.rng.next() < 0.5) return { x: a, z: b + (this.rng.next() * 40 - 20) };
    return { x: a + (this.rng.next() * 40 - 20), z: b };
  }

  // ---------- shops ----------

  /** Buy at the nearby shop: armor first ($150), else ammo ($50). */
  buyAtShop(player: PlayerLike, ctx: EconomyCtx): string {
    if (!this.nearShop) return 'No shop nearby';
    if (player.inCar) return 'Step out of the car to shop';
    if (player.armor < 100 && player.money >= ARMOR_PRICE) {
      player.money -= ARMOR_PRICE;
      player.armor = 100;
      ctx.audio.pickup();
      return `Body armor bought — $${ARMOR_PRICE}`;
    }
    if (player.money >= AMMO_PRICE) {
      player.money -= AMMO_PRICE;
      const cur = player.currentWeapon;
      const ammo = player.ammo();
      player.giveWeapon(cur, ammo.ammo, ammo.reserve + 60);
      ctx.audio.pickup();
      return `Ammo bought — $${AMMO_PRICE} (+60 reserve)`;
    }
    return 'Not enough cash (armor $150 / ammo $50)';
  }

  // ---------- penalties ----------

  /** Hospital bill after WASTED: up to $200. Returns the fee charged. */
  applyWasted(player: PlayerLike): number {
    const fee = Math.min(player.money, 200);
    player.money -= fee;
    return fee;
  }

  /** Fine after BUSTED: up to $150. Returns the fee charged. */
  applyBusted(player: PlayerLike): number {
    const fee = Math.min(player.money, 150);
    player.money -= fee;
    return fee;
  }

  // ---------- save / load ----------

  hasSave(): boolean {
    try {
      return window.localStorage.getItem(SAVE_KEY) !== null;
    } catch {
      return false;
    }
  }

  save(snap: EconomySnapshot): boolean {
    try {
      const data: SaveData = {
        version: 1,
        cash: Math.floor(snap.player.money),
        missionsDone: snap.missionsDone,
        missionsCompleted: [...snap.missionsCompleted],
        stats: {
          missionsDone: snap.missionsDone,
          carsStolen: this.stats.carsStolen,
          fares: this.stats.fares,
          distance: Math.round(this.stats.distance),
          wantedMax: this.stats.wantedMax,
        },
        collectibles: snap.collectibles,
        clockMin: Math.round(snap.timeOfDay * 60),
        savedAt: Math.floor(snap.elapsed),
      };
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  load(): SaveData | null {
    try {
      const raw = window.localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw) as SaveData;
      if (!data || typeof data !== 'object' || data.version !== 1) return null;
      return data;
    } catch {
      return null;
    }
  }

  clearSave(): boolean {
    try {
      window.localStorage.removeItem(SAVE_KEY);
      return true;
    } catch {
      return false;
    }
  }

  // ---------- per-frame ----------

  update(dt: number, ctx: EconomyCtx): void {
    const p = ctx.player;
    if (!this.started) {
      this.started = true;
      this.lastX = p.pos.x;
      this.lastZ = p.pos.z;
    }
    // Distance + wanted stats.
    const moved = Math.hypot(p.pos.x - this.lastX, p.pos.z - this.lastZ);
    this.stats.distance += moved;
    this.lastX = p.pos.x;
    this.lastZ = p.pos.z;
    if (p.wanted > this.stats.wantedMax) this.stats.wantedMax = p.wanted;
    this.stats.fares = ctx.missions.taxiDone;
    this.stats.missionsDone = ctx.missions.missionDone;

    // Pickups: bob + spin, collect within 2.5.
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const pk = this.pickups[i];
      pk.phase += dt * 2;
      pk.mesh.rotation.y += dt * 1.5;
      pk.mesh.children[0].position.y = 0.6 + Math.sin(pk.phase) * 0.15;
      const d = Math.hypot(p.pos.x - pk.pos.x, p.pos.z - pk.pos.z);
      if (d < 2.5) {
        this.applyPickup(pk.kind, p, ctx);
        this.scene.remove(pk.mesh);
        this.pickups.splice(i, 1);
      }
    }
    // Sun coins: collect within 2.5, +$50 each.
    for (let i = this.coins.length - 1; i >= 0; i--) {
      const c = this.coins[i];
      c.phase += dt * 2;
      c.mesh.rotation.y += dt * 2;
      c.mesh.children[0].position.y = 0.9 + Math.sin(c.phase) * 0.12;
      const d = Math.hypot(p.pos.x - c.pos.x, p.pos.z - c.pos.z);
      if (d < 2.5) {
        this.collectiblesFound++;
        ctx.missions.coinsCollected = this.collectiblesFound;
        p.money += 50;
        ctx.audio.pickup();
        this.scene.remove(c.mesh);
        this.coins.splice(i, 1);
      }
    }
    // Shop proximity (on foot, within 6).
    this.nearShop = null;
    this.shopPrompt = null;
    if (!p.inCar) {
      for (const s of SHOPS) {
        if (Math.hypot(p.pos.x - s.x, p.pos.z - s.z) < 6) {
          this.nearShop = s;
          this.shopPrompt = `${s.name} — press B: armor $150 / ammo $50`;
          break;
        }
      }
    }
  }

  private applyPickup(kind: PickupKind, p: PlayerLike, ctx: EconomyCtx): void {
    ctx.audio.pickup();
    if (kind === 'cash') {
      const amount = 25 + Math.floor(this.rng.next() * 4) * 25;
      p.money += amount;
    } else if (kind === 'health') {
      p.hp = Math.min(100, p.hp + 40);
    } else if (kind === 'armor') {
      p.armor = Math.min(100, p.armor + 50);
    } else {
      const ammo = p.ammo();
      p.giveWeapon(p.currentWeapon, ammo.ammo, ammo.reserve + 60);
    }
  }
}
