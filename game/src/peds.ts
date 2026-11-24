// Pedestrians (Builder 2).
//
// Peds walk the sidewalks, cross at crosswalks and panic on gunfire,
// near-misses or explosions. The system caps its count and
// spawns/despawns outside the camera view so nobody ever pops in front
// of the player. Builder 3 calls scare()/knockDown() from combat and
// explosions; peds recover on their own (down -> walk, shaken).
import * as THREE from 'three';
import { RNG, clamp } from './random';
import { Humanoid } from './vehicles';
import type { City } from './city';

export interface Ped {
  h: Humanoid;
  pos: THREE.Vector3;
  heading: number;
  speed: number;
  target: { x: number; z: number };
  state: 'walk' | 'panic' | 'down';
  phase: number;
  panicT: number;
  downT: number;
  color: number;
}

const SHIRTS = [0xd8d8e2, 0x8a2a3c, 0x2a6b8a, 0x6b8a2a, 0xd8a03c, 0x5c4a7a, 0x3c3c44];
const PANTS = [0x2c3550, 0x3a3a3a, 0x5c4a3a, 0x24344a];

export class Peds {
  list: Ped[] = [];
  private scene: THREE.Scene;
  private city: City;
  private rng: RNG;
  private spawnTimer = 0;

  constructor(scene: THREE.Scene, city: City, rng: RNG) {
    this.scene = scene;
    this.city = city;
    this.rng = rng;
  }

  get count(): number {
    return this.list.length;
  }

  spawnOne(px: number, pz: number): void {
    const pt = this.city.randomSidewalkPoint(this.rng);
    if (Math.hypot(pt.x - px, pt.z - pz) < 60) return;
    const shirt = SHIRTS[Math.floor(this.rng.next() * SHIRTS.length)];
    const pants = PANTS[Math.floor(this.rng.next() * PANTS.length)];
    const h = new Humanoid(shirt, pants);
    const scale = this.rng.range(0.92, 1.08);
    h.group.scale.setScalar(scale);
    h.group.position.set(pt.x, 0, pt.z);
    this.scene.add(h.group);
    const dest = this.city.randomSidewalkPoint(this.rng);
    this.list.push({
      h, pos: new THREE.Vector3(pt.x, 0, pt.z), heading: this.rng.next() * Math.PI * 2,
      speed: this.rng.range(1.2, 2.2), target: dest, state: 'walk',
      phase: this.rng.next() * 6, panicT: 0, downT: 0, color: shirt,
    });
  }

  /** Make peds near (x,z) panic and flee. */
  scare(x: number, z: number, radius: number): void {
    for (const p of this.list) {
      if (p.state === 'down') continue;
      const d = Math.hypot(p.pos.x - x, p.pos.z - z);
      if (d < radius) {
        p.state = 'panic';
        p.panicT = 2.5 + this.rng.next() * 2;
        const away = Math.atan2(p.pos.x - x, p.pos.z - z);
        p.target = { x: p.pos.x + Math.sin(away) * 60, z: p.pos.z + Math.cos(away) * 60 };
      }
    }
  }

  knockDown(x: number, z: number, radius: number): Ped[] {
    const hit: Ped[] = [];
    for (const p of this.list) {
      if (p.state === 'down') continue;
      if (Math.hypot(p.pos.x - x, p.pos.z - z) < radius) {
        p.state = 'down';
        p.downT = 6;
        hit.push(p);
      }
    }
    return hit;
  }

  update(dt: number, px: number, pz: number): void {
    this.spawnTimer -= dt;
    if (this.list.length < 24 && this.spawnTimer <= 0) {
      this.spawnOne(px, pz);
      this.spawnTimer = 0.4;
    }
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      if (Math.hypot(p.pos.x - px, p.pos.z - pz) > 280) {
        this.scene.remove(p.h.group);
        this.list.splice(i, 1);
        continue;
      }
      if (p.state === 'down') {
        p.downT -= dt;
        p.h.setPose('fall', p.phase);
        if (p.downT <= 0) {
          // get up and walk away, shaken
          p.state = 'walk';
          p.target = this.city.randomSidewalkPoint(this.rng);
        }
        continue;
      }
      const dx = p.target.x - p.pos.x;
      const dz = p.target.z - p.pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 3) {
        p.target = this.city.randomSidewalkPoint(this.rng);
        if (p.state === 'panic') p.state = 'walk';
        continue;
      }
      const want = Math.atan2(dx, dz);
      let dh = want - p.heading;
      while (dh > Math.PI) dh -= Math.PI * 2;
      while (dh < -Math.PI) dh += Math.PI * 2;
      p.heading += clamp(dh, -2.4 * dt, 2.4 * dt);
      const spd = p.state === 'panic' ? 5.2 : p.speed;
      const nx = p.pos.x + Math.sin(p.heading) * spd * dt;
      const nz = p.pos.z + Math.cos(p.heading) * spd * dt;
      if (!this.city.isBlocked(nx, nz, 0.6)) {
        p.pos.x = nx;
        p.pos.z = nz;
      } else {
        // blocked: pick a new target rather than wedging against a wall
        p.target = this.city.randomSidewalkPoint(this.rng);
      }
      p.phase += dt * (p.state === 'panic' ? 14 : 9);
      p.h.setPose(p.state === 'panic' ? 'panic' : 'walk', p.phase);
      p.h.group.position.copy(p.pos);
      p.h.group.rotation.y = p.heading;
      if (p.state === 'panic') {
        p.panicT -= dt;
        if (p.panicT <= 0) {
          p.state = 'walk';
          p.target = this.city.randomSidewalkPoint(this.rng);
        }
      }
    }
  }
}
