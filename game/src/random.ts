// Shared deterministic helpers for Neon Harbor: a seeded RNG, math
// utilities, NaN guards, and a spatial grid for cheap collision and
// neighbour queries.
//
// Everything here is deterministic: the same seed always builds the same
// city and the same traffic. Builders 2-3: import from here, never roll a
// second RNG — one seeded stream per system, created in main.ts and passed
// down, keeps replays identical.
//
// Interfaces this file owns (used by later builders):
//   RNG            mulberry32, seeded per system (city, traffic, fx, ...)
//   AABB           flat box on the XZ plane (the city is flat, y is ignored)
//   SpatialGrid<T> uniform grid, O(1) neighbour queries for collisions
//   clean(n, fb)   NaN/Infinity guard — call on any number that reaches the
//                  scene graph or the HUD, every step, no exceptions.

export const TAU = Math.PI * 2;

export function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Frame-rate independent approach: lambda is "how fast", dt is seconds. */
export function damp(a: number, b: number, lambda: number, dt: number): number {
  return lerp(a, b, 1 - Math.exp(-lambda * dt));
}

export function wrapAngle(a: number): number {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}

export function angleLerp(a: number, b: number, t: number): number {
  return a + wrapAngle(b - a) * t;
}

export function dist2(ax: number, az: number, bx: number, bz: number): number {
  const dx = ax - bx;
  const dz = az - bz;
  return Math.sqrt(dx * dx + dz * dz);
}

/** FNV-1a hash of a string, as an unsigned 32-bit seed. */
export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Deterministic RNG (mulberry32). One instance per system, all seeded. */
export class RNG {
  private s: number;
  constructor(seed: number) {
    this.s = seed >>> 0 || 1;
  }
  next(): number {
    this.s = (this.s + 0x6d2b79f5) | 0;
    let t = Math.imul(this.s ^ (this.s >>> 15), 1 | this.s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  range(lo: number, hi: number): number {
    return lo + this.next() * (hi - lo);
  }
  int(lo: number, hi: number): number {
    return Math.floor(this.range(lo, hi + 1));
  }
  pick<T>(arr: readonly T[]): T {
    return arr[Math.floor(this.next() * arr.length)];
  }
  chance(p: number): boolean {
    return this.next() < p;
  }
  sign(): number {
    return this.next() < 0.5 ? -1 : 1;
  }
}

/** Axis-aligned box on the XZ plane (y is ignored: the city is flat). */
export interface AABB {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export function circleHitsAABB(x: number, z: number, r: number, b: AABB): boolean {
  const cx = clamp(x, b.minX, b.maxX);
  const cz = clamp(z, b.minZ, b.maxZ);
  const dx = x - cx;
  const dz = z - cz;
  return dx * dx + dz * dz < r * r;
}

/** Push a circle out of an AABB. Returns true when a push happened. */
export function resolveCircleAABB(
  p: { x: number; z: number },
  r: number,
  b: AABB,
): boolean {
  const cx = clamp(p.x, b.minX, b.maxX);
  const cz = clamp(p.z, b.minZ, b.maxZ);
  const dx = p.x - cx;
  const dz = p.z - cz;
  const d2 = dx * dx + dz * dz;
  if (d2 >= r * r) return false;
  if (d2 > 1e-8) {
    const d = Math.sqrt(d2);
    const push = (r - d) / d;
    p.x += dx * push;
    p.z += dz * push;
  } else {
    // Centre inside the box: push out along the smallest penetration axis.
    const pl = p.x - b.minX;
    const pr = b.maxX - p.x;
    const pt = p.z - b.minZ;
    const pb = b.maxZ - p.z;
    const m = Math.min(pl, pr, pt, pb);
    if (m === pl) p.x = b.minX - r;
    else if (m === pr) p.x = b.maxX + r;
    else if (m === pt) p.z = b.minZ - r;
    else p.z = b.maxZ + r;
  }
  return true;
}

/** A uniform grid so collision and neighbour checks stay O(1) per entity. */
export class SpatialGrid<T> {
  private cell: number;
  private map = new Map<string, Set<T>>();
  private where = new Map<T, string>();
  constructor(cell = 16) {
    this.cell = cell;
  }
  private key(x: number, z: number): string {
    return `${Math.floor(x / this.cell)},${Math.floor(z / this.cell)}`;
  }
  add(item: T, x: number, z: number): void {
    const k = this.key(x, z);
    let s = this.map.get(k);
    if (!s) {
      s = new Set();
      this.map.set(k, s);
    }
    s.add(item);
    this.where.set(item, k);
  }
  move(item: T, x: number, z: number): void {
    const k = this.key(x, z);
    const old = this.where.get(item);
    if (old === k) return;
    if (old) {
      const s = this.map.get(old);
      if (s) s.delete(item);
    }
    this.add(item, x, z);
  }
  remove(item: T): void {
    const k = this.where.get(item);
    if (k) {
      const s = this.map.get(k);
      if (s) s.delete(item);
      this.where.delete(item);
    }
  }
  clear(): void {
    this.map.clear();
    this.where.clear();
  }
  /** Call fn for every item in the cells around (x, z) within radius r. */
  query(x: number, z: number, r: number, fn: (item: T) => void): void {
    const c = this.cell;
    const x0 = Math.floor((x - r) / c);
    const x1 = Math.floor((x + r) / c);
    const z0 = Math.floor((z - r) / c);
    const z1 = Math.floor((z + r) / c);
    for (let gx = x0; gx <= x1; gx++) {
      for (let gz = z0; gz <= z1; gz++) {
        const s = this.map.get(`${gx},${gz}`);
        if (s) s.forEach(fn);
      }
    }
  }
}

export function formatMoney(n: number): string {
  const v = Math.round(n);
  const sign = v < 0 ? '-' : '';
  const abs = Math.abs(v).toString();
  let out = '';
  for (let i = 0; i < abs.length; i++) {
    if (i > 0 && (abs.length - i) % 3 === 0) out += ',';
    out += abs[i];
  }
  return `${sign}$${out}`;
}

export function formatClock(hours: number): string {
  const h = Math.floor(hours) % 24;
  const m = Math.floor((hours % 1) * 60);
  const hh = h < 10 ? `0${h}` : `${h}`;
  const mm = m < 10 ? `0${m}` : `${m}`;
  return `${hh}:${mm}`;
}

export function formatTimer(sec: number): string {
  const s = Math.max(0, Math.ceil(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r < 10 ? '0' : ''}${r}`;
}

/** Sanitize a number: NaN or Infinity becomes the fallback. */
export function clean(n: number, fallback = 0): number {
  return Number.isFinite(n) ? n : fallback;
}
