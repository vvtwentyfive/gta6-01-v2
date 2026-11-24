// Neon Harbor — combat (Builder 3).
//
// Five weapons from config.ts (fists / pistol / SMG / shotgun / grenade):
// hitscan shooting with spread, damage falloff by range, mags + reload,
// muzzle flash via the FX particle system, and gang enemies (Dusk Vipers)
// with a simple chase-and-shoot AI. Firing a gun near witnesses raises
// police heat; hitting a ped does too. Grenades explode on a short fuse.
import * as THREE from 'three';
import { WEAPONS } from './config';
import { clamp, damp, RNG } from './random';
import type { PlayerLike } from './context';
import type { City } from './city';
import type { Peds } from './peds';
import type { FX } from './render';
import type { AudioSys } from './audio';
import type { Police } from './police';
import { Humanoid } from './vehicles';

export interface GangEnemy {
  h: Humanoid;
  pos: THREE.Vector3;
  heading: number;
  hp: number;
  maxHp: number;
  isBoss: boolean;
  state: 'idle' | 'chase' | 'dead';
  phase: number;
  shootT: number;
  deadT: number;
  speed: number;
}

export interface CombatCtx {
  scene: THREE.Scene;
  city: City;
  fx: FX;
  peds: Peds;
  audio: AudioSys;
  police: Police;
  player: PlayerLike;
  time: number;
  /** main.ts hook: damage the player through the WASTED flow. */
  damagePlayer: (n: number) => void;
  /** Camera yaw (radians) — shots fire where the player looks. */
  yaw: number;
}

interface Grenade {
  x: number;
  z: number;
  fuse: number;
}

const GANG_SHIRT = 0x5c2a8a; // Dusk Vipers purple
const GANG_PANTS = 0x1c1c22;

export class Combat {
  isReloading = false;
  private scene: THREE.Scene;
  private gang: GangEnemy[] = [];
  private cooldown = 0;
  private reloadT = 0;
  private grenades: Grenade[] = [];
  private muzzle: THREE.PointLight | null = null;
  private muzzleT = 0;
  private rng: RNG;

  constructor(scene: THREE.Scene, seed = 1337) {
    this.scene = scene;
    this.rng = new RNG(seed + 71);
    this.muzzle = new THREE.PointLight(0xffc46b, 0, 14, 1.6);
    this.scene.add(this.muzzle);
  }

  // ---------- gang ----------

  /** Spawn `count` Vipers at (x, z). Boss gets a big HP pool + red shirt. */
  spawnGang(x: number, z: number, count: number, opts: { boss?: boolean; hp?: number } = {}): GangEnemy[] {
    const out: GangEnemy[] = [];
    for (let i = 0; i < count; i++) {
      const isBoss = !!opts.boss && i === 0;
      const shirt = isBoss ? 0x8a1a1a : GANG_SHIRT;
      const h = new Humanoid(shirt, GANG_PANTS);
      const px = x + (i % 3 - 1) * 3;
      const pz = z + Math.floor(i / 3) * 3 - 2;
      h.group.position.set(px, 0, pz);
      this.scene.add(h.group);
      const hp = isBoss ? 300 : (opts.hp ?? 60);
      const e: GangEnemy = {
        h, pos: new THREE.Vector3(px, 0, pz), heading: Math.PI, hp, maxHp: hp,
        isBoss, state: 'idle', phase: i * 1.7, shootT: 1 + i * 0.4, deadT: 0,
        speed: isBoss ? 3.4 : 3.0,
      };
      this.gang.push(e);
      out.push(e);
    }
    return out;
  }

  aliveGang(): GangEnemy[] {
    return this.gang.filter((g) => g.state !== 'dead');
  }

  gangCount(): number {
    return this.aliveGang().length;
  }

  clearGang(): void {
    for (const g of this.gang) this.scene.remove(g.h.group);
    this.gang = [];
  }

  // ---------- player shooting ----------

  private aim(player: PlayerLike, yaw: number): { origin: THREE.Vector3; dir: THREE.Vector3 } {
    const origin = player.pos.clone();
    origin.y = player.inCar ? 1.4 : 1.5;
    const dir = new THREE.Vector3(-Math.sin(yaw), 0, -Math.cos(yaw)).normalize();
    return { origin, dir };
  }

  firePlayerShot(player: PlayerLike, ctx: CombatCtx): void {
    if (this.cooldown > 0 || this.isReloading || player.dead) return;
    const def = WEAPONS[player.currentWeapon];
    this.cooldown = def.rate;
    const { origin, dir } = this.aim(player, ctx.yaw);

    if (player.currentWeapon === 'fist') {
      ctx.audio.melee();
      // Melee arc: anything within range in front of the player.
      for (const g of this.aliveGang()) {
        const d = Math.hypot(g.pos.x - player.pos.x, g.pos.z - player.pos.z);
        if (d > def.range) continue;
        const ang = Math.atan2(g.pos.x - player.pos.x, g.pos.z - player.pos.z);
        let dh = ang - Math.atan2(dir.x, dir.z);
        while (dh > Math.PI) dh -= Math.PI * 2;
        while (dh < -Math.PI) dh += Math.PI * 2;
        if (Math.abs(dh) < 1.1) this.damageGang(g, def.damage, ctx);
      }
      ctx.peds.scare(player.pos.x, player.pos.z, 8);
      return;
    }

    const ammo = player.ammo();
    if (def.mag > 0 && ammo.ammo <= 0) {
      this.reload(player);
      return;
    }
    if (def.mag > 0) {
      player.giveWeapon(player.currentWeapon, ammo.ammo - 1, ammo.reserve);
    }
    ctx.audio.shot(player.currentWeapon);
    this.flashMuzzle(origin);
    ctx.fx.sparks(origin.clone().addScaledVector(dir, 1.2), 4);
    ctx.fx.shake(player.currentWeapon === 'shotgun' ? 0.16 : 0.06);

    // Hitscan: one ray per pellet with spread; nearest enemy in the cone.
    for (let p = 0; p < def.pellets; p++) {
      const spread = (this.rng.next() - 0.5) * 2 * def.spread;
      const dx = dir.x + Math.cos(Math.atan2(dir.x, dir.z)) * spread;
      const dz = dir.z - Math.sin(Math.atan2(dir.x, dir.z)) * spread;
      const dLen = Math.hypot(dx, dz) || 1;
      const ray = { x: dx / dLen, z: dz / dLen };
      let best: GangEnemy | null = null;
      let bestD = def.range;
      for (const g of this.aliveGang()) {
        const gx = g.pos.x - origin.x;
        const gz = g.pos.z - origin.z;
        const along = gx * ray.x + gz * ray.z;
        if (along < 0 || along > bestD) continue;
        const perp = Math.abs(gx * ray.z - gz * ray.x);
        if (perp < 1.1) {
          best = g;
          bestD = along;
        }
      }
      if (best) {
        const falloff = bestD > def.range * 0.6 ? 0.6 : 1;
        this.damageGang(best, def.damage * falloff, ctx);
        ctx.fx.burst(best.pos.clone().add(new THREE.Vector3(0, 1.2, 0)), 6, 0xc03030, 5, 0.4, 1.2);
      } else {
        // Miss: puff of dust / sparks where the ray ends, scares peds.
        const end = origin.clone().add(new THREE.Vector3(ray.x, 0, ray.z).multiplyScalar(Math.min(bestD, def.range)));
        end.y = 0.4;
        ctx.fx.sparks(end, 2);
      }
    }
    // Gunfire in public draws the law: heat, louder for shotguns.
    ctx.police.addHeat(player.currentWeapon === 'shotgun' ? 0.12 : 0.06);
    ctx.peds.scare(player.pos.x, player.pos.z, 26);
  }

  private damageGang(g: GangEnemy, dmg: number, ctx: CombatCtx): void {
    g.hp -= dmg;
    g.state = 'chase';
    if (g.hp <= 0) {
      g.hp = 0;
      g.state = 'dead';
      g.deadT = 0;
      g.h.setPose('fall', 0);
      ctx.fx.burst(g.pos.clone().add(new THREE.Vector3(0, 1, 0)), 10, 0xc03030, 6, 0.5, 1.4);
    }
  }

  reload(player: PlayerLike): void {
    const def = WEAPONS[player.currentWeapon];
    if (this.isReloading || def.mag < 0) return;
    const ammo = player.ammo();
    if (ammo.ammo >= def.mag || ammo.reserve <= 0) return;
    this.isReloading = true;
    this.reloadT = def.reload;
  }

  throwGrenade(player: PlayerLike, ctx: CombatCtx): void {
    if (this.cooldown > 0 || player.dead) return;
    // Grenades throw only while selected (slot 5) — the ammo counter the
    // player owns is per selected weapon.
    if (player.currentWeapon !== 'grenade') return;
    const ammo = player.ammo();
    if (ammo.ammo <= 0) return;
    player.giveWeapon('grenade', ammo.ammo - 1, ammo.reserve);
    this.cooldown = WEAPONS.grenade.rate;
    const { dir } = this.aim(player, ctx.yaw);
    const tx = player.pos.x + dir.x * 14;
    const tz = player.pos.z + dir.z * 14;
    this.grenades.push({ x: tx, z: tz, fuse: 0.7 });
    ctx.audio.shot('grenade');
    ctx.peds.scare(tx, tz, 20);
  }

  private flashMuzzle(origin: THREE.Vector3): void {
    if (!this.muzzle) return;
    this.muzzle.position.copy(origin);
    this.muzzle.intensity = 60;
    this.muzzleT = 0.06;
  }

  // ---------- per-frame ----------

  update(dt: number, ctx: CombatCtx): void {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.muzzleT > 0) {
      this.muzzleT -= dt;
      if (this.muzzleT <= 0 && this.muzzle) this.muzzle.intensity = 0;
    }
    if (this.isReloading) {
      this.reloadT -= dt;
      if (this.reloadT <= 0) {
        this.isReloading = false;
        const p = ctx.player;
        const def = WEAPONS[p.currentWeapon];
        const ammo = p.ammo();
        const need = def.mag - ammo.ammo;
        const take = Math.min(need, ammo.reserve);
        p.giveWeapon(p.currentWeapon, ammo.ammo + take, ammo.reserve - take);
        ctx.audio.reload();
      }
    }
    // Grenade fuses.
    for (let i = this.grenades.length - 1; i >= 0; i--) {
      const g = this.grenades[i];
      g.fuse -= dt;
      if (g.fuse <= 0) {
        this.grenades.splice(i, 1);
        this.detonate(g.x, g.z, ctx);
      }
    }
    // Gang AI.
    const player = ctx.player;
    for (let i = this.gang.length - 1; i >= 0; i--) {
      const g = this.gang[i];
      if (g.state === 'dead') {
        g.deadT += dt;
        if (g.deadT > 6) {
          this.scene.remove(g.h.group);
          this.gang.splice(i, 1);
        }
        continue;
      }
      const d = Math.hypot(player.pos.x - g.pos.x, player.pos.z - g.pos.z);
      const sees = d < 55 && !player.dead;
      if (sees) g.state = 'chase';
      if (g.state === 'chase' && !player.dead) {
        const want = Math.atan2(player.pos.x - g.pos.x, player.pos.z - g.pos.z);
        let dh = want - g.heading;
        while (dh > Math.PI) dh -= Math.PI * 2;
        while (dh < -Math.PI) dh += Math.PI * 2;
        g.heading += clamp(dh, -3 * dt, 3 * dt);
        if (d > 9) {
          const nx = g.pos.x + Math.sin(g.heading) * g.speed * dt;
          const nz = g.pos.z + Math.cos(g.heading) * g.speed * dt;
          if (!ctx.city.isBlocked(nx, nz, 0.6)) {
            g.pos.x = nx;
            g.pos.z = nz;
          }
        }
        g.phase += dt * 9;
        g.h.setPose(d > 9 ? 'run' : 'shoot', g.phase);
        // Shoot the player inside 26 units, telegraphed by the pose.
        g.shootT -= dt;
        if (d < 26 && g.shootT <= 0) {
          g.shootT = g.isBoss ? 0.9 : 1.5;
          ctx.audio.shot('pistol');
          ctx.fx.sparks(g.pos.clone().add(new THREE.Vector3(0, 1.4, 0)), 3);
          const hitChance = d < 12 ? 0.55 : 0.3;
          if (this.rng.next() < hitChance) {
            const dmg = g.isBoss ? 14 : 8;
            ctx.damagePlayer(dmg);
          }
        }
      } else {
        g.phase += dt * 2;
        g.h.setPose('idle', g.phase);
      }
      g.h.group.position.copy(g.pos);
      g.h.group.rotation.y = g.heading;
    }
  }

  private detonate(x: number, z: number, ctx: CombatCtx): void {
    const at = new THREE.Vector3(x, 0, z);
    ctx.fx.explosion(at, true);
    ctx.audio.explosion();
    ctx.police.addHeat(0.5);
    for (const g of this.aliveGang()) {
      const d = Math.hypot(g.pos.x - x, g.pos.z - z);
      if (d < 11) this.damageGang(g, d < 5 ? 140 : 70, ctx);
    }
    const down = ctx.peds.knockDown(x, z, 9);
    if (down.length > 0) ctx.police.addHeat(0.3);
    ctx.peds.scare(x, z, 40);
    // Splash damage on the player if they stand too close.
    const pd = Math.hypot(ctx.player.pos.x - x, ctx.player.pos.z - z);
    if (pd < 8 && !ctx.player.dead) ctx.damagePlayer(35);
  }

  /** Smooth-aim helper (unused by main, kept for the harness). */
  dampHeading(cur: number, target: number, dt: number): number {
    return damp(cur, target, 8, dt);
  }
}
