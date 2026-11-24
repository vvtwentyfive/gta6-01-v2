// Player character and vehicles (Builder 2).
//
// The player is a procedural humanoid with animated limbs; vehicles are
// procedural box models with arcade physics (acceleration, braking,
// reverse, handbrake drift, speed-dependent steering, body roll and
// bounce). Collisions use an oriented local-frame check so adjacent-lane
// cars never wedge each other. Parked cars are spawned with
// hasDriver=false — a phantom driver made ~35% of carjack attempts fail.
// Parked cars are placed >= 8 units apart.
//
// Forward convention: a vehicle's forward is (-sin heading, -cos heading),
// matching group.rotation.y = heading in three.js. A humanoid's forward
// is (sin heading, cos heading) — the mesh faces +z.
//
// The 7 drivable kinds come from config VEHICLES: sedan, sports, suv,
// truck, bus, police, bike. A taxi is a sedan with a taxi sign (spawned
// via spawnVehicle with the taxi flag); the boat stays out — the harbor
// water is a boundary, not a drivable zone.
import * as THREE from 'three';
import { RNG, clamp, clean, damp } from './random';
import { VEHICLES, type VehicleDef, type VehicleKind } from './config';
import type { City } from './city';

/** Small box mesh helper (castShadow on, standard material). */
export function box(
  w: number, h: number, d: number, color: number,
  x = 0, y = 0, z = 0,
  opts: { emissive?: number; emissiveIntensity?: number; roughness?: number; metalness?: number } = {},
): THREE.Mesh {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({
      color, roughness: opts.roughness ?? 0.7, metalness: opts.metalness ?? 0.2,
      emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 1,
    }),
  );
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

/** A procedural humanoid: torso, head, limbs on shoulder/hip pivots. */
export class Humanoid {
  readonly group = new THREE.Group();
  private armL: THREE.Group;
  private armR: THREE.Group;
  private legL: THREE.Group;
  private legR: THREE.Group;
  private torso: THREE.Mesh;

  constructor(shirt: number, pants: number, skin = 0xc98d64, hair = 0x222222) {
    const mat = (c: number): THREE.MeshStandardMaterial =>
      new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 });
    this.torso = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.62, 0.3), mat(shirt));
    this.torso.position.y = 1.16;
    this.torso.castShadow = true;
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.32, 0.3), mat(skin));
    head.position.y = 1.66;
    head.castShadow = true;
    const hairM = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.32), mat(hair));
    hairM.position.y = 1.84;
    const mkLimb = (w: number, h: number, c: number, px: number, py: number): THREE.Group => {
      const pivot = new THREE.Group();
      pivot.position.set(px, py, 0);
      const part = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), mat(c));
      part.position.y = -h / 2;
      part.castShadow = true;
      pivot.add(part);
      return pivot;
    };
    this.armL = mkLimb(0.15, 0.62, shirt, -0.34, 1.42);
    this.armR = mkLimb(0.15, 0.62, shirt, 0.34, 1.42);
    this.legL = mkLimb(0.19, 0.78, pants, -0.13, 0.86);
    this.legR = mkLimb(0.19, 0.78, pants, 0.13, 0.86);
    this.group.add(this.torso, head, hairM, this.armL, this.armR, this.legL, this.legR);
  }

  setPose(mode: 'idle' | 'walk' | 'run' | 'shoot' | 'fall' | 'panic', phase: number): void {
    const s = Math.sin(phase);
    const c = Math.cos(phase);
    if (mode === 'fall') {
      this.group.rotation.x = -Math.PI / 2 + 0.15;
      this.armL.rotation.x = 0.4;
      this.armR.rotation.x = -0.3;
      this.legL.rotation.x = 0.2;
      this.legR.rotation.x = -0.15;
      return;
    }
    this.group.rotation.x = 0;
    if (mode === 'idle') {
      this.armL.rotation.x = s * 0.06;
      this.armR.rotation.x = -s * 0.06;
      this.legL.rotation.x = 0;
      this.legR.rotation.x = 0;
      this.torso.position.y = 1.16 + Math.sin(phase * 0.5) * 0.01;
    } else if (mode === 'shoot') {
      this.armR.rotation.x = -Math.PI / 2 + 0.08;
      this.armL.rotation.x = -Math.PI / 2 + 0.35;
      this.legL.rotation.x = 0.25;
      this.legR.rotation.x = -0.25;
    } else if (mode === 'panic') {
      this.armL.rotation.z = 2.6;
      this.armR.rotation.z = -2.6;
      this.armL.rotation.x = s * 0.5;
      this.armR.rotation.x = -s * 0.5;
      this.legL.rotation.x = s * 0.9;
      this.legR.rotation.x = c * 0.9;
    } else {
      const amp = mode === 'run' ? 0.95 : 0.55;
      this.armL.rotation.x = s * amp;
      this.armR.rotation.x = -s * amp;
      this.legL.rotation.x = -s * amp;
      this.legR.rotation.x = s * amp;
      this.armL.rotation.z = 0;
      this.armR.rotation.z = 0;
      this.group.rotation.x = mode === 'run' ? 0.12 : 0.03;
    }
  }
}

export interface VehicleInput {
  throttle: number; // -1..1 (1 = accelerate, -1 = brake/reverse)
  steer: number; // -1..1
  handbrake: boolean;
}

export class Vehicle {
  readonly def: VehicleDef;
  readonly group = new THREE.Group();
  readonly pos = new THREE.Vector3();
  heading = 0;
  speed = 0;
  steerAngle = 0;
  hp: number;
  hasDriver = false;
  isPolice = false;
  isTaxi = false;
  isWreck = false;
  smoking = false;
  readonly id: number;
  private wheels: THREE.Mesh[] = [];
  private sirenL: THREE.Mesh | null = null;
  private sirenR: THREE.Mesh | null = null;
  private brakeL: THREE.Mesh | null = null;
  private brakeR: THREE.Mesh | null = null;
  private body: THREE.Group;
  private slide = 0; // lateral slide velocity (drift)
  private bouncePhase = 0;
  private static nextId = 1;

  constructor(def: VehicleDef, color: number, isPolice = false, isTaxi = false) {
    this.def = def;
    this.id = Vehicle.nextId++;
    this.hp = def.hp;
    this.isPolice = isPolice;
    this.isTaxi = isTaxi;
    this.body = this.buildMesh(def, color, isPolice, isTaxi);
    this.group.add(this.body);
    this.group.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
  }

  private buildMesh(def: VehicleDef, color: number, isPolice: boolean, isTaxi: boolean): THREE.Group {
    const g = new THREE.Group();
    const L = def.len;
    const W = def.wid;
    const glass = 0x18222e;
    const add = (m: THREE.Mesh): THREE.Mesh => { g.add(m); return m; };
    if (def.kind === 'bike') {
      add(box(0.5, 0.5, 1.6, color, 0, 0.55, 0));
      add(box(0.4, 0.45, 0.5, glass, 0, 0.85, -0.3));
      add(box(0.16, 0.5, 0.5, 0x222226, 0, 0.75, 0.55));
      const wheelGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.16, 12);
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
      for (const z of [-0.85, 0.85]) {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.z = Math.PI / 2;
        w.position.set(0, 0.36, z);
        w.castShadow = true;
        g.add(w);
        this.wheels.push(w);
      }
      this.brakeL = add(box(0.2, 0.12, 0.06, 0xff2a2a, 0, 0.6, L / 2, { emissive: 0xff2a2a, emissiveIntensity: 0.6 }));
      add(box(0.2, 0.12, 0.06, 0xfff2c8, 0, 0.6, -L / 2, { emissive: 0xfff2c8, emissiveIntensity: 1.4 }));
      return g;
    }
    // body
    const bodyH = def.kind === 'bus' ? 1.5 : def.kind === 'truck' ? 1.0 : 0.62;
    const bodyY = def.kind === 'bus' ? 1.15 : 0.62;
    add(box(W, bodyH, L, color, 0, bodyY, 0, { metalness: 0.45, roughness: 0.35 }));
    // cabin / glasshouse
    if (def.kind === 'bus') {
      add(box(W - 0.2, 0.9, L - 1.2, glass, 0, 2.0, 0, { roughness: 0.2, metalness: 0.4 }));
      for (let i = 0; i < 5; i++) {
        add(box(0.06, 0.7, 1.1, 0xd8d8e2, -W / 2 + 0.02, 2.0, -3 + i * 1.5));
        add(box(0.06, 0.7, 1.1, 0xd8d8e2, W / 2 - 0.02, 2.0, -3 + i * 1.5));
      }
    } else if (def.kind === 'truck') {
      add(box(W - 0.3, 0.85, 1.4, color, 0, 1.35, -L / 2 + 0.9, { metalness: 0.4, roughness: 0.4 }));
      add(box(W - 0.5, 0.6, 1.1, glass, 0, 1.3, -L / 2 + 0.85, { roughness: 0.2, metalness: 0.4 }));
      add(box(W - 0.2, 1.3, L - 2.4, 0x6b5c4a, 0, 1.0, 0.8, { roughness: 0.9 }));
    } else {
      const cabL = L * (def.kind === 'suv' ? 0.62 : 0.45);
      add(box(W - 0.3, 0.55, cabL, glass, 0, bodyY + bodyH / 2 + 0.24, def.kind === 'suv' ? 0.1 : 0.15, { roughness: 0.15, metalness: 0.5 }));
      add(box(W - 0.1, 0.08, cabL + 0.1, color, 0, bodyY + bodyH / 2 + 0.55, def.kind === 'suv' ? 0.1 : 0.15, { metalness: 0.4, roughness: 0.35 }));
    }
    // bumpers
    add(box(W + 0.1, 0.22, 0.3, 0x222226, 0, 0.32, -L / 2 + 0.05));
    add(box(W + 0.1, 0.22, 0.3, 0x222226, 0, 0.32, L / 2 - 0.05));
    // headlights + taillights
    const hl = new THREE.MeshStandardMaterial({ color: 0xfff2c8, emissive: 0xfff2c8, emissiveIntensity: 2.0 });
    for (const s of [-1, 1]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.08), hl);
      h.position.set(s * (W / 2 - 0.35), 0.68, -L / 2 - 0.01);
      g.add(h);
      const t = new THREE.Mesh(
        new THREE.BoxGeometry(0.42, 0.16, 0.08),
        new THREE.MeshStandardMaterial({ color: 0xff2a2a, emissive: 0xff2a2a, emissiveIntensity: 0.7 }),
      );
      t.position.set(s * (W / 2 - 0.35), 0.68, L / 2 + 0.01);
      g.add(t);
      if (s === -1) this.brakeL = t;
      else this.brakeR = t;
    }
    // taxi sign + livery
    if (isTaxi) {
      add(box(0.9, 0.28, 0.4, 0xffc42a, 0, 1.55, 0.1, { emissive: 0xffc42a, emissiveIntensity: 1.6 }));
      add(box(W + 0.02, 0.24, L * 0.4, 0x222226, 0, 0.7, 0));
    }
    // police livery + light bar
    if (isPolice) {
      add(box(W + 0.02, 0.3, L * 0.5, 0xf2f2f2, 0, 0.72, 0));
      add(box(W + 0.04, 0.22, 0.5, 0x101418, 0, 0.95, -L / 2 + 0.6));
      add(box(1.3, 0.12, 0.4, 0x222226, 0, 1.55, -0.1));
      this.sirenL = add(box(0.55, 0.22, 0.36, 0xff2a2a, -0.33, 1.68, -0.1, { emissive: 0xff2a2a, emissiveIntensity: 2.5 }));
      this.sirenR = add(box(0.55, 0.22, 0.36, 0x2a6bff, 0.33, 1.68, -0.1, { emissive: 0x2a6bff, emissiveIntensity: 2.5 }));
    }
    // wheels
    const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.3, 12);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const wheelZ = def.kind === 'bus' ? [-3.2, -1.2, 1.6, 3.2] : [-L / 2 + 0.9, L / 2 - 0.9];
    for (const z of wheelZ) {
      for (const s of [-1, 1]) {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.rotation.z = Math.PI / 2;
        w.position.set(s * (W / 2 - 0.15), 0.38, z);
        w.castShadow = true;
        g.add(w);
        this.wheels.push(w);
      }
    }
    return g;
  }

  /** Local-frame check: is point (wx,wz) inside this vehicle's footprint? */
  containsPoint(wx: number, wz: number, pad = 0): boolean {
    const dx = wx - this.pos.x;
    const dz = wz - this.pos.z;
    const c = Math.cos(-this.heading);
    const s = Math.sin(-this.heading);
    const lx = dx * c - dz * s;
    const lz = dx * s + dz * c;
    return Math.abs(lx) < this.def.wid / 2 + pad && Math.abs(lz) < this.def.len / 2 + pad;
  }

  /**
   * Oriented overlap test against another vehicle (local-frame, both ways).
   * Length-based checks wedged adjacent-lane cars; this one only fires
   * when the footprints genuinely overlap.
   */
  overlapsVehicle(other: Vehicle): boolean {
    const dx = other.pos.x - this.pos.x;
    const dz = other.pos.z - this.pos.z;
    const dist = Math.hypot(dx, dz);
    if (dist > (this.def.len + other.def.len) / 2 + 1) return false;
    if (!this.containsPoint(other.pos.x, other.pos.z, (other.def.len + other.def.wid) / 4)) {
      if (!other.containsPoint(this.pos.x, this.pos.z, (this.def.len + this.def.wid) / 4)) return false;
    }
    return true;
  }

  damage(amount: number, onExplode: (v: Vehicle) => void): void {
    if (this.isWreck) return;
    this.hp -= amount;
    if (this.hp <= 40) this.smoking = true;
    if (this.hp <= 0) {
      this.hp = 0;
      this.isWreck = true;
      onExplode(this);
    }
  }

  setSiren(on: boolean, time: number): void {
    if (!this.sirenL || !this.sirenR) return;
    const phase = Math.floor(time * 6) % 2 === 0;
    const onMat = (m: THREE.Mesh, active: boolean): void => {
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = active && on ? 3.5 : 0.25;
    };
    onMat(this.sirenL, phase);
    onMat(this.sirenR, !phase);
  }

  setBraking(braking: boolean): void {
    for (const b of [this.brakeL, this.brakeR]) {
      if (!b) continue;
      const mat = b.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = braking ? 3.0 : 0.7;
    }
  }

  update(dt: number, input: VehicleInput | null, city: City, time: number): void {
    const def = this.def;
    if (this.isWreck) {
      this.speed = damp(this.speed, 0, 4, dt);
    } else if (input) {
      const speedRatio = clamp(Math.abs(this.speed) / def.topSpeed, 0, 1);
      if (input.throttle > 0) {
        this.speed += def.accel * (1 - speedRatio * 0.85) * dt;
      } else if (input.throttle < 0) {
        if (this.speed > 0.5) this.speed -= def.brake * dt;
        else this.speed -= def.accel * 0.55 * dt;
      } else {
        this.speed = damp(this.speed, 0, 0.6, dt);
      }
      this.speed = clamp(this.speed, -def.reverseSpeed, def.topSpeed);
      const steerTarget = input.steer * def.steer * (1 - speedRatio * 0.55);
      this.steerAngle = damp(this.steerAngle, steerTarget, 8, dt);
      const grip = input.handbrake ? def.grip * 0.45 : def.grip;
      const turn = this.steerAngle * clamp(Math.abs(this.speed) / 6, 0, 1) * (this.speed >= 0 ? 1 : -1) * grip;
      this.heading += turn * dt;
      // handbrake drift: keep a lateral slide that decays
      if (input.handbrake && Math.abs(this.speed) > 8) {
        this.slide = clamp(this.slide + input.steer * 6 * dt, -6, 6);
      } else {
        this.slide = damp(this.slide, 0, 3, dt);
      }
    } else {
      this.speed = damp(this.speed, 0, 1.2, dt);
    }
    // forward is (-sin heading, -cos heading); slide is lateral
    const fwdX = -Math.sin(this.heading);
    const fwdZ = -Math.cos(this.heading);
    this.pos.x += (fwdX * this.speed + Math.cos(this.heading) * this.slide) * dt;
    this.pos.z += (fwdZ * this.speed - Math.sin(this.heading) * this.slide) * dt;
    // building / water collision: centre circle, push out, bleed speed
    const r = Math.max(def.len, def.wid) / 2;
    const p = { x: this.pos.x, z: this.pos.z };
    if (city.collideCircle(p, r * 0.72)) {
      const impact = Math.abs(this.speed);
      this.pos.x = p.x;
      this.pos.z = p.z;
      if (impact > 12) this.damage(impact * 0.7, () => undefined);
      this.speed *= 0.45;
      this.slide *= 0.4;
    }
    // body visuals: roll into turns, pitch on accel/brake, bounce
    this.bouncePhase += dt * (4 + Math.abs(this.speed) * 0.55);
    const roll = clamp(-this.steerAngle * clamp(Math.abs(this.speed) / def.topSpeed, 0, 1) * 0.12, -0.1, 0.1);
    const pitch = clamp((input ? input.throttle : 0) * 0.02, -0.03, 0.03);
    const bounce = Math.sin(this.bouncePhase) * 0.02 * clamp(Math.abs(this.speed) / 20, 0, 1);
    this.body.rotation.z = roll;
    this.body.rotation.x = pitch;
    this.body.position.y = bounce;
    for (const w of this.wheels) w.rotation.x += (this.speed / 0.38) * dt;
    this.group.position.copy(this.pos);
    this.group.position.y = 0;
    this.group.rotation.y = this.heading;
    this.setSiren(this.isPolice, time);
    this.setBraking(input ? input.throttle < 0 : false);
    this.pos.x = clean(this.pos.x);
    this.pos.z = clean(this.pos.z);
    this.speed = clean(this.speed);
  }
}

/** Build a vehicle of the given kind at a position. Parked cars have no driver. */
export function spawnVehicle(
  scene: THREE.Scene, kind: VehicleKind, x: number, z: number, heading: number,
  opts: { police?: boolean; taxi?: boolean; driver?: boolean } = {},
): Vehicle {
  const def = VEHICLES[kind];
  const rng = new RNG(Math.floor(Math.abs(x * 13 + z * 7 + kind.length * 101)) + 1);
  const color = opts.taxi ? 0xffc42a : def.colors[Math.floor(rng.next() * def.colors.length)];
  const v = new Vehicle(def, color, opts.police ?? kind === 'police', opts.taxi ?? false);
  v.pos.set(x, 0, z);
  v.heading = heading;
  // Parked cars must not carry a phantom driver, or the carjack prompt
  // fails about a third of the time.
  v.hasDriver = opts.driver ?? false;
  v.group.position.copy(v.pos);
  v.group.rotation.y = heading;
  scene.add(v.group);
  return v;
}

/** Parked cars along a road, spaced far enough apart to never wedge. */
export function spawnParkedCars(
  scene: THREE.Scene, city: City, rng: RNG, count: number,
): Vehicle[] {
  const out: Vehicle[] = [];
  const kinds: VehicleKind[] = ['sedan', 'sedan', 'sports', 'suv', 'truck', 'sedan', 'sports'];
  let guard = 0;
  while (out.length < count && guard++ < count * 12) {
    const pt = city.randomRoadPoint(rng);
    // parked cars sit on the side of the road, parallel to traffic
    const alongX = Math.abs(Math.sin(pt.heading)) > 0.5;
    const off = 5.2;
    const x = pt.x + (alongX ? 0 : (rng.chance(0.5) ? off : -off));
    const z = pt.z + (alongX ? (rng.chance(0.5) ? off : -off) : 0);
    // keep parked cars at least 8 units apart (wedge fix)
    let ok = !city.isBlocked(x, z, 3);
    if (ok) {
      for (const o of out) {
        if (Math.hypot(o.pos.x - x, o.pos.z - z) < 8) { ok = false; break; }
      }
    }
    if (!ok) continue;
    const kind = kinds[Math.floor(rng.next() * kinds.length)];
    out.push(spawnVehicle(scene, kind, x, z, pt.heading, { driver: false }));
  }
  return out;
}

/** Keep a list of vehicles separated from each other (parked + traffic). */
export function separateVehicles(list: Vehicle[]): void {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = list[i];
      const b = list[j];
      if (a.isWreck || b.isWreck) continue;
      if (!a.overlapsVehicle(b)) continue;
      const dx = a.pos.x - b.pos.x;
      const dz = a.pos.z - b.pos.z;
      const dist = Math.hypot(dx, dz) || 0.01;
      const push = (5.5 - dist) / 2;
      a.pos.x += (dx / dist) * push;
      a.pos.z += (dz / dist) * push;
      b.pos.x -= (dx / dist) * push;
      b.pos.z -= (dz / dist) * push;
      a.speed *= 0.7;
      b.speed *= 0.7;
    }
  }
}

/** Nearest vehicle the player could enter (within maxDist), or null. */
export function nearestEnterable(list: Vehicle[], x: number, z: number, maxDist = 4.5): Vehicle | null {
  let best: Vehicle | null = null;
  let bd = maxDist;
  for (const v of list) {
    if (v.isWreck) continue;
    const d = Math.hypot(v.pos.x - x, v.pos.z - z);
    if (d < bd) { bd = d; best = v; }
  }
  return best;
}

/** Step-out spot: the car's left side, facing the car's heading. */
export function exitCarSpot(v: Vehicle): { x: number; z: number; heading: number } {
  const lx = Math.cos(v.heading);
  const lz = -Math.sin(v.heading);
  return { x: v.pos.x + lx * 2.2, z: v.pos.z + lz * 2.2, heading: v.heading };
}
