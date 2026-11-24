// Traffic (Builder 2).
//
// Cars follow road lanes, stop at red lights, yield to the car ahead and
// honk when blocked. The system caps its count and spawns/despawns outside
// the camera view so nothing ever pops in front of the player.
//
// Scripted vehicles (chase car, player car) must NEVER be pushed into
// traffic.cars — the AI would drive them into a building. Scripted
// vehicles live in their own list (Game.parked / the player's car) and are
// only counted in window.__game.vehicles(), never steered here.
//
// Audio does not exist yet (Builder 3 owns audio.ts), so the horn is an
// optional callback the Game wires up later; traffic works silently
// without it.
import * as THREE from 'three';
import { RNG, clamp } from './random';
import { Vehicle, spawnVehicle } from './vehicles';
import type { City } from './city';

export interface TrafficCar {
  v: Vehicle;
  target: { x: number; z: number };
  wait: number;
  stuck: number;
  honkAt: number;
}

const TRAFFIC_KINDS = ['sedan', 'sedan', 'sports', 'suv', 'truck', 'bus'] as const;

export class Traffic {
  cars: TrafficCar[] = [];
  shotMode = false;
  private scene: THREE.Scene;
  private city: City;
  private rng: RNG;
  private spawnTimer = 0;
  private onHorn: (() => void) | null;

  constructor(scene: THREE.Scene, city: City, rng: RNG, onHorn?: () => void) {
    this.scene = scene;
    this.city = city;
    this.rng = rng;
    this.onHorn = onHorn ?? null;
  }

  get count(): number {
    return this.cars.length;
  }

  /** All ambient traffic vehicles (for window.__game.vehicles()). */
  vehicles(): Vehicle[] {
    return this.cars.map((c) => c.v);
  }

  /** Remove a car from AI control (e.g. the player carjacked it). The
   *  vehicle stays in the world; only its traffic wrapper is dropped. */
  detachCar(v: Vehicle): boolean {
    const i = this.cars.findIndex((c) => c.v === v);
    if (i < 0) return false;
    this.cars.splice(i, 1);
    return true;
  }

  private pickDestination(fromX: number, fromZ: number): { x: number; z: number } {
    // a random intersection a few blocks away
    const rx = this.rng.pick(this.city.roadLines);
    const rz = this.rng.pick(this.city.roadLines);
    if (Math.hypot(rx - fromX, rz - fromZ) < 120) return this.pickDestination(fromX, fromZ);
    return { x: rx, z: rz };
  }

  private laneOffset(heading: number): { x: number; z: number } {
    // right-hand traffic: offset 3.5 to the right of the direction of travel
    const rx = Math.cos(heading);
    const rz = -Math.sin(heading);
    return { x: rx * 3.5, z: rz * 3.5 };
  }

  spawnOne(px: number, pz: number): void {
    const pt = this.city.randomRoadPoint(this.rng);
    const off = this.laneOffset(pt.heading);
    const x = pt.x + off.x;
    const z = pt.z + off.z;
    if (Math.hypot(x - px, z - pz) < 90) return;
    for (const c of this.cars) {
      if (Math.hypot(c.v.pos.x - x, c.v.pos.z - z) < 10) return;
    }
    const kind = TRAFFIC_KINDS[Math.floor(this.rng.next() * TRAFFIC_KINDS.length)];
    const v = spawnVehicle(this.scene, kind, x, z, pt.heading, { driver: true });
    v.speed = this.rng.range(8, 14);
    this.cars.push({ v, target: this.pickDestination(x, z), wait: 0, stuck: 0, honkAt: 0 });
  }

  /** Steer a car toward its target intersection along the road grid. */
  private driveCar(c: TrafficCar, dt: number, px: number, pz: number, time: number, playerCar: Vehicle | null): void {
    const v = c.v;
    const dx = c.target.x - v.pos.x;
    const dz = c.target.z - v.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist < 12) {
      c.target = this.pickDestination(v.pos.x, v.pos.z);
      return;
    }
    // route: drive along one axis at a time (Manhattan), via the nearest road
    let targetHeading: number;
    if (Math.abs(dx) > Math.abs(dz)) {
      targetHeading = dx > 0 ? -Math.PI / 2 : Math.PI / 2;
    } else {
      targetHeading = dz > 0 ? Math.PI : 0;
    }
    // steering: turn toward the target heading
    let dh = targetHeading - v.heading;
    while (dh > Math.PI) dh -= Math.PI * 2;
    while (dh < -Math.PI) dh += Math.PI * 2;
    const steer = clamp(dh * 1.6, -1, 1);
    // slow down for turns and for the car ahead
    let throttle = 0.7;
    if (Math.abs(dh) > 0.6) throttle = 0.25;
    // red light: stop before the next intersection when our axis is red
    const aheadX = v.pos.x + Math.sin(v.heading) * -14;
    const aheadZ = v.pos.z + Math.cos(v.heading) * -14;
    const ix = this.city.roadLines.reduce((a, b) => (Math.abs(b - aheadX) < Math.abs(a - aheadX) ? b : a));
    const iz = this.city.roadLines.reduce((a, b) => (Math.abs(b - aheadZ) < Math.abs(a - aheadZ) ? b : a));
    const nearInter = Math.abs(aheadX - ix) < 10 && Math.abs(aheadZ - iz) < 10;
    if (nearInter) {
      const light = this.city.lightState(ix, iz, time);
      const goingX = Math.abs(dx) > Math.abs(dz);
      if ((goingX && light === 'ns') || (!goingX && light === 'ew')) {
        throttle = -1; // red for our axis: brake
      }
    }
    // car ahead in our lane: brake (traffic cars + the player's car)
    let nearestAhead = Infinity;
    const aheadCheck = (ox: number, oz: number): void => {
      const fwd = -ox * Math.sin(v.heading) - oz * Math.cos(v.heading);
      const lat = Math.abs(ox * Math.cos(v.heading) - oz * Math.sin(v.heading));
      if (fwd > 0 && fwd < 16 && lat < 3.5) nearestAhead = Math.min(nearestAhead, fwd);
    };
    for (const o of this.cars) {
      if (o === c) continue;
      aheadCheck(o.v.pos.x - v.pos.x, o.v.pos.z - v.pos.z);
    }
    if (playerCar && playerCar !== v) {
      aheadCheck(playerCar.pos.x - v.pos.x, playerCar.pos.z - v.pos.z);
    }
    if (nearestAhead < 14) throttle = -0.6;
    // in shot mode, traffic ahead of the player pulls to the right and never
    // blocks the player's lane
    if (this.shotMode) {
      const pdx = px - v.pos.x;
      const pdz = pz - v.pos.z;
      const fwdToPlayer = -pdx * Math.sin(v.heading) - pdz * Math.cos(v.heading);
      if (fwdToPlayer > -40 && fwdToPlayer < 70 && Math.abs(pdx * Math.cos(v.heading) - pdz * Math.sin(v.heading)) < 8) {
        throttle = 0.35;
      }
    }
    v.update(dt, { throttle, steer, handbrake: false }, this.city, time);
    // stuck detection: no progress for 4s -> pick a new destination
    if (Math.abs(v.speed) < 0.5 && throttle > 0) c.stuck += dt;
    else c.stuck = 0;
    if (c.stuck > 4) {
      c.target = this.pickDestination(v.pos.x, v.pos.z);
      c.stuck = 0;
    }
    // honk when blocked by the player
    if (nearestAhead < 8 && time > c.honkAt) {
      c.honkAt = time + 3 + this.rng.next() * 2;
      if (this.onHorn) this.onHorn();
    }
  }

  update(dt: number, px: number, pz: number, time: number, playerCar: Vehicle | null): void {
    this.spawnTimer -= dt;
    if (this.cars.length < 14 && this.spawnTimer <= 0) {
      this.spawnOne(px, pz);
      this.spawnTimer = 0.5;
    }
    for (let i = this.cars.length - 1; i >= 0; i--) {
      const c = this.cars[i];
      const d = Math.hypot(c.v.pos.x - px, c.v.pos.z - pz);
      if (d > 300) {
        this.scene.remove(c.v.group);
        this.cars.splice(i, 1);
        continue;
      }
      try {
        this.driveCar(c, dt, px, pz, time, playerCar);
      } catch {
        c.target = this.pickDestination(c.v.pos.x, c.v.pos.z);
      }
      // pairwise separation: push overlapping traffic cars apart
      // (oriented check — adjacent-lane cars never wedge)
      for (const o of this.cars) {
        if (o === c) continue;
        if (c.v.overlapsVehicle(o.v)) {
          const dx = c.v.pos.x - o.v.pos.x;
          const dz = c.v.pos.z - o.v.pos.z;
          const dist = Math.hypot(dx, dz) || 0.01;
          const push = (6 - dist) / 2;
          c.v.pos.x += (dx / dist) * push;
          c.v.pos.z += (dz / dist) * push;
          c.v.speed *= 0.6;
        }
      }
      // the player's car is an obstacle too: push the traffic car off it
      if (playerCar && c.v.overlapsVehicle(playerCar)) {
        const dx = c.v.pos.x - playerCar.pos.x;
        const dz = c.v.pos.z - playerCar.pos.z;
        const dist = Math.hypot(dx, dz) || 0.01;
        const push = (6 - dist) / 2;
        c.v.pos.x += (dx / dist) * push;
        c.v.pos.z += (dz / dist) * push;
        c.v.speed *= 0.6;
      }
    }
  }
}
