// Rendering core for Neon Harbor: renderer setup, the sky and day/night
// lighting, fake bloom (emissive + glow sprites — no post-processing pass,
// so it works fully offline in one classic script), pooled particles,
// screen shake, and the rain system.
//
// What this file owns (Builders 2-3: use these, do not make a second sun
// or a second camera):
//   createRenderer(canvas)  WebGLRenderer, shadows on, ACES tone mapping
//   Sky                     sky dome + stars + fog + ONE directional sun
//                           (shadow camera follows the player and snaps to
//                           a texel grid so shadows never shimmer) + moon
//                           + hemisphere light; setTimeOfDay(h) drives it
//   makeDotTexture / makeGlowSprite   fake bloom: additive soft dots
//   FX                      pooled burst/spark/smoke/explosion particles,
//                           screen shake, rain cloud recycled round the player
//
// Dusk retune (config DAY): the game opens at 17.8, dusk holds until
// ~19:40 (19.67h), night hemisphere is 0.5, the moon is 0.55, and the sun
// is clamped above the horizon so its light never flips under the world.
import * as THREE from 'three';
import { DAY } from './config';
import { RNG, clamp, lerp } from './random';

export function createRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  return renderer;
}

// ---------------------------------------------------------------------------
// Day/night
// ---------------------------------------------------------------------------

interface DayKey {
  h: number;
  sun: number; // sun directional intensity
  hemi: number; // hemisphere intensity
  top: number; // sky zenith colour
  hor: number; // sky horizon colour
  fog: number; // fog colour
  lamp: number; // 0 = lamps off, 1 = lamps full on
  stars: number; // star opacity 0..1
}

// Dusk is long on purpose: the 17.8 key is golden hour, 18.5 is deep orange,
// 19.67 (~19:40) is where dusk hands over to night. Night hemi is 0.5.
const DAY_KEYS: DayKey[] = [
  { h: 0, sun: 0, hemi: 0.5, top: 0x050510, hor: 0x14142c, fog: 0x0a0a18, lamp: 1, stars: 1 },
  { h: 5, sun: 0, hemi: 0.5, top: 0x050510, hor: 0x1a1a33, fog: 0x0a0a18, lamp: 1, stars: 1 },
  { h: 7, sun: 1.4, hemi: 0.85, top: 0x4a6a9a, hor: 0xffb36b, fog: 0xc8a88a, lamp: 0.4, stars: 0.1 },
  { h: 10, sun: 2.6, hemi: 1.0, top: 0x3d7bd9, hor: 0xbfd9ee, fog: 0xc8d8e8, lamp: 0, stars: 0 },
  { h: 16, sun: 2.4, hemi: 0.95, top: 0x3d7bd9, hor: 0xd8e4ee, fog: 0xc8d8e8, lamp: 0, stars: 0 },
  { h: 17.8, sun: 2.1, hemi: 0.9, top: 0x2a2a55, hor: 0xff8a3c, fog: 0x9a6a52, lamp: 0.7, stars: 0.2 },
  { h: 18.5, sun: 1.6, hemi: 0.8, top: 0x1c1c40, hor: 0xff6a2a, fog: 0x6a4a42, lamp: 0.9, stars: 0.5 },
  { h: 19.67, sun: 0, hemi: 0.5, top: 0x050510, hor: 0x1a1a33, fog: 0x0a0a18, lamp: 1, stars: 1 },
  { h: 20, sun: 0, hemi: 0.5, top: 0x050510, hor: 0x1a1a33, fog: 0x0a0a18, lamp: 1, stars: 1 },
  { h: 24, sun: 0, hemi: 0.5, top: 0x050510, hor: 0x14142c, fog: 0x0a0a18, lamp: 1, stars: 1 },
];

function sampleDay(h: number): DayKey {
  const hh = ((h % 24) + 24) % 24;
  let a = DAY_KEYS[0];
  let b = DAY_KEYS[DAY_KEYS.length - 1];
  for (let i = 0; i < DAY_KEYS.length - 1; i++) {
    if (hh >= DAY_KEYS[i].h && hh <= DAY_KEYS[i + 1].h) {
      a = DAY_KEYS[i];
      b = DAY_KEYS[i + 1];
      break;
    }
  }
  const span = b.h - a.h || 1;
  const t = clamp((hh - a.h) / span, 0, 1);
  const mixC = (x: number, y: number): number => {
    const cx = new THREE.Color(x);
    const cy = new THREE.Color(y);
    return cx.lerp(cy, t).getHex();
  };
  return {
    h: hh,
    sun: lerp(a.sun, b.sun, t),
    hemi: lerp(a.hemi, b.hemi, t),
    top: mixC(a.top, b.top),
    hor: mixC(a.hor, b.hor),
    fog: mixC(a.fog, b.fog),
    lamp: lerp(a.lamp, b.lamp, t),
    stars: lerp(a.stars, b.stars, t),
  };
}

const SHADOW_MAP_SIZE = 2048;
const SHADOW_HALF = 120; // ortho shadow camera covers +-120 around the player

export class Sky {
  readonly sun: THREE.DirectionalLight;
  readonly moon: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  private skyMat: THREE.ShaderMaterial;
  private stars: THREE.Points;
  private starMat: THREE.PointsMaterial;
  private sunDir = new THREE.Vector3(0, 0.2, -1);
  private timeOfDay: number = DAY.defaultStart;
  lampLevel = 0.7;

  constructor(private scene: THREE.Scene, rng: RNG) {
    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x2a2a55) },
        horizonColor: { value: new THREE.Color(0xff8a3c) },
        sunDir: { value: new THREE.Vector3(0, 0.2, -1) },
        sunColor: { value: new THREE.Color(0xffb36b) },
      },
      vertexShader: `varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `
        uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunDir; uniform vec3 sunColor;
        varying vec3 vDir;
        void main() {
          float h = clamp(vDir.y, -0.1, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(max(h, 0.0), 0.55));
          float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
          col += sunColor * (pow(s, 220.0) * 1.4 + pow(s, 8.0) * 0.22);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    const sky = new THREE.Mesh(new THREE.SphereGeometry(800, 24, 16), this.skyMat);
    sky.frustumCulled = false;
    scene.add(sky);
    scene.fog = new THREE.Fog(0x9a6a52, 120, 520);

    // Stars: a shell of points, faded in by the day keys at night.
    const starPos = new Float32Array(600 * 3);
    for (let i = 0; i < 600; i++) {
      const a = rng.next() * Math.PI * 2;
      const e = rng.range(0.1, 1.4);
      starPos[i * 3] = Math.cos(a) * Math.cos(e) * 750;
      starPos[i * 3 + 1] = Math.sin(e) * 750;
      starPos[i * 3 + 2] = Math.sin(a) * Math.cos(e) * 750;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    this.starMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 1.6, sizeAttenuation: false,
      transparent: true, opacity: 0.2, depthWrite: false,
    });
    this.stars = new THREE.Points(starGeo, this.starMat);
    this.stars.frustumCulled = false;
    scene.add(this.stars);

    // The one sun: directional light with shadows. Its shadow camera rides
    // on the player (see updateSunFollow) and snaps to a texel grid.
    this.sun = new THREE.DirectionalLight(0xffb36b, 2.1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(SHADOW_MAP_SIZE, SHADOW_MAP_SIZE);
    const cam = this.sun.shadow.camera;
    cam.left = -SHADOW_HALF;
    cam.right = SHADOW_HALF;
    cam.top = SHADOW_HALF;
    cam.bottom = -SHADOW_HALF;
    cam.near = 1;
    cam.far = 500;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.6;
    scene.add(this.sun);
    scene.add(this.sun.target);

    // Moon: a second, shadowless directional light that takes over at night.
    this.moon = new THREE.DirectionalLight(0x8fa8ff, 0);
    this.moon.position.set(-60, 120, -40);
    scene.add(this.moon);
    scene.add(this.moon.target);

    this.hemi = new THREE.HemisphereLight(0x8a7a9a, 0x2a1f18, 0.9);
    scene.add(this.hemi);

    this.setTimeOfDay(this.timeOfDay);
  }

  /** Sun azimuth/elevation for an hour: east at dawn, west at dusk end. */
  private sunDirection(h: number): THREE.Vector3 {
    const daySpan = DAY.duskEnd - 6; // 06:00 -> ~19:40
    const t = clamp((h - 6) / daySpan, 0, 1);
    const elevation = Math.max(Math.sin(Math.PI * t), DAY.sunMinElevation);
    const azimuth = Math.PI * (1 - t); // east (pi) -> west (0)
    return new THREE.Vector3(
      Math.cos(azimuth) * Math.cos(elevation),
      Math.sin(elevation),
      0.35 * Math.cos(elevation),
    ).normalize();
  }

  setTimeOfDay(h: number): void {
    this.timeOfDay = ((h % 24) + 24) % 24;
    const k = sampleDay(this.timeOfDay);
    const dir = this.sunDirection(this.timeOfDay);
    this.sunDir.copy(dir);
    this.sun.intensity = k.sun;
    this.sun.color.setHex(k.sun > 0.4 ? 0xffb36b : 0xff8a4a);
    // Night hemi is 0.5 by the day keys (never pitch black).
    this.hemi.intensity = k.hemi;
    // Night: moon on, sun off. The sun stays clamped above the horizon
    // (sunDirection) so its light can never flip under the world.
    const night = k.sun <= 0 ? 1 : 0;
    this.moon.intensity = night * DAY.moonIntensity;
    this.lampLevel = k.lamp;
    this.starMat.opacity = k.stars;
    const u = this.skyMat.uniforms as Record<string, { value: THREE.Color | THREE.Vector3 }>;
    (u.topColor.value as THREE.Color).setHex(k.top);
    (u.horizonColor.value as THREE.Color).setHex(k.hor);
    (u.sunDir.value as THREE.Vector3).copy(dir);
    (u.sunColor.value as THREE.Color).setHex(k.sun > 0.4 ? 0xffb36b : 0xff8a4a);
    if (this.scene.fog) (this.scene.fog as THREE.Fog).color.setHex(k.fog);
  }

  get time(): number {
    return this.timeOfDay;
  }

  /** Keep the sun's shadow camera on the player, snapped to the shadow
   *  map's texel grid so the shadows do not shimmer while driving. */
  updateSunFollow(px: number, pz: number): void {
    const texel = (SHADOW_HALF * 2) / SHADOW_MAP_SIZE;
    const sx = Math.round(px / texel) * texel;
    const sz = Math.round(pz / texel) * texel;
    const d = this.sunDir;
    this.sun.position.set(sx + d.x * 220, d.y * 220, sz + d.z * 220);
    this.sun.target.position.set(sx, 0, sz);
    this.sun.target.updateMatrixWorld();
    // Moon follows the same anchor so night lighting stays consistent.
    this.moon.position.set(sx - 60, 120, sz - 40);
    this.moon.target.position.set(sx, 0, sz);
    this.moon.target.updateMatrixWorld();
  }
}

// ---------------------------------------------------------------------------
// Fake bloom: glow sprites + dot texture
// ---------------------------------------------------------------------------

/** A soft round dot texture — used for glow sprites (fake bloom) and particles. */
export function makeDotTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 1, 32, 32, 30);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

/** A glow sprite (additive, fake bloom) for lamps, neon, headlights. */
export function makeGlowSprite(
  tex: THREE.Texture,
  color: number,
  size: number,
  opacity = 0.55,
): THREE.Sprite {
  const mat = new THREE.SpriteMaterial({
    map: tex, color, transparent: true, opacity,
    depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const s = new THREE.Sprite(mat);
  s.scale.setScalar(size);
  return s;
}

// ---------------------------------------------------------------------------
// Particles, shake, rain
// ---------------------------------------------------------------------------

export interface Particle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  size: number;
  color: THREE.Color;
  gravity: number;
  drag: number;
}

export class FX {
  private scene: THREE.Scene;
  private rng: RNG;
  private dotTex: THREE.CanvasTexture;
  private points: THREE.Points;
  private geo: THREE.BufferGeometry;
  private posAttr: THREE.Float32BufferAttribute;
  private colAttr: THREE.Float32BufferAttribute;
  private sizeAttr: THREE.Float32BufferAttribute;
  private particles: Particle[] = [];
  private readonly MAX = 400;
  private shakeAmt = 0;
  private rain: THREE.Points | null = null;
  private rainVel: Float32Array | null = null;
  private rainCount = 0;
  private rainOn = false;

  constructor(scene: THREE.Scene, rng: RNG) {
    this.scene = scene;
    this.rng = rng;
    this.dotTex = makeDotTexture();
    this.geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.Float32BufferAttribute(new Float32Array(this.MAX * 3), 3);
    this.colAttr = new THREE.Float32BufferAttribute(new Float32Array(this.MAX * 3), 3);
    this.sizeAttr = new THREE.Float32BufferAttribute(new Float32Array(this.MAX), 1);
    this.geo.setAttribute('position', this.posAttr);
    this.geo.setAttribute('color', this.colAttr);
    this.geo.setAttribute('aSize', this.sizeAttr);
    const mat = new THREE.ShaderMaterial({
      uniforms: { map: { value: this.dotTex } },
      vertexShader: `
        attribute float aSize;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (220.0 / -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform sampler2D map;
        varying vec3 vColor;
        void main() {
          vec4 tex = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(vColor, tex.a);
          if (gl_FragColor.a < 0.02) discard;
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    this.points = new THREE.Points(this.geo, mat);
    this.points.frustumCulled = false;
    this.scene.add(this.points);
  }

  get dotTexture(): THREE.CanvasTexture {
    return this.dotTex;
  }

  private spawn(p: Particle): void {
    if (this.particles.length >= this.MAX) this.particles.shift();
    this.particles.push(p);
  }

  burst(pos: THREE.Vector3, count: number, color: number, speed = 6, life = 0.6, size = 1.6): void {
    for (let i = 0; i < count; i++) {
      const a = this.rng.next() * Math.PI * 2;
      const e = (this.rng.next() - 0.3) * Math.PI;
      this.spawn({
        pos: pos.clone(),
        vel: new THREE.Vector3(Math.cos(a) * Math.cos(e), Math.sin(e) + 0.4, Math.sin(a) * Math.cos(e))
          .multiplyScalar(speed * this.rng.range(0.4, 1)),
        life: life * this.rng.range(0.6, 1.2),
        maxLife: life,
        size: size * this.rng.range(0.7, 1.4),
        color: new THREE.Color(color).offsetHSL(0, 0, this.rng.range(-0.1, 0.1)),
        gravity: 6,
        drag: 1.5,
      });
    }
  }

  sparks(pos: THREE.Vector3, count = 8): void {
    this.burst(pos, count, 0xffd27a, 9, 0.35, 1.1);
  }

  smoke(pos: THREE.Vector3, count = 3): void {
    for (let i = 0; i < count; i++) {
      this.spawn({
        pos: pos.clone().add(new THREE.Vector3(this.rng.range(-0.4, 0.4), this.rng.range(0, 0.6), this.rng.range(-0.4, 0.4))),
        vel: new THREE.Vector3(this.rng.range(-0.4, 0.4), this.rng.range(1, 2.4), this.rng.range(-0.4, 0.4)),
        life: this.rng.range(0.8, 1.6),
        maxLife: 1.6,
        size: this.rng.range(2.5, 4.5),
        color: new THREE.Color(0x666677),
        gravity: -1.5,
        drag: 0.5,
      });
    }
  }

  explosion(pos: THREE.Vector3, big = false): void {
    const at = pos.clone().add(new THREE.Vector3(0, 1, 0));
    this.burst(at, big ? 60 : 30, 0xff7a1a, big ? 16 : 11, 0.9, 3.2);
    this.burst(at, big ? 30 : 14, 0xffd27a, big ? 10 : 7, 0.6, 2.4);
    this.smoke(at, big ? 14 : 8);
    this.shake(big ? 0.9 : 0.5);
    // brief flash of light, removed on a timer (visual only, no gameplay)
    const light = new THREE.PointLight(0xff8a2a, 400, 40, 1.8);
    light.position.copy(pos).add(new THREE.Vector3(0, 3, 0));
    this.scene.add(light);
    setTimeout(() => this.scene.remove(light), 220);
  }

  shake(amount: number): void {
    this.shakeAmt = Math.max(this.shakeAmt, amount);
  }

  /** Current shake offset in screen-ish units; decays every call. */
  shakeOffset(dt: number): { x: number; y: number } {
    if (this.shakeAmt <= 0.001) return { x: 0, y: 0 };
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.2);
    const s = this.shakeAmt * 0.35;
    return { x: (this.rng.next() - 0.5) * s, y: (this.rng.next() - 0.5) * s };
  }

  /** Rain: one Points cloud, recycled in a box around the player. */
  setRain(on: boolean): void {
    if (on === this.rainOn) return;
    this.rainOn = on;
    if (on && !this.rain) {
      this.rainCount = 1200;
      const pos = new Float32Array(this.rainCount * 3);
      this.rainVel = new Float32Array(this.rainCount);
      for (let i = 0; i < this.rainCount; i++) {
        pos[i * 3] = this.rng.range(-50, 50);
        pos[i * 3 + 1] = this.rng.range(0, 40);
        pos[i * 3 + 2] = this.rng.range(-50, 50);
        this.rainVel[i] = this.rng.range(28, 38);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const m = new THREE.PointsMaterial({
        color: 0xaac4dd, size: 0.14, transparent: true, opacity: 0.55,
        sizeAttenuation: true,
      });
      this.rain = new THREE.Points(g, m);
      this.rain.frustumCulled = false;
      this.scene.add(this.rain);
    }
    if (this.rain) this.rain.visible = on;
  }

  get raining(): boolean {
    return this.rainOn;
  }

  update(dt: number, px: number, pz: number): void {
    // particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }
      p.vel.y -= p.gravity * dt;
      p.vel.multiplyScalar(Math.max(0, 1 - p.drag * dt));
      p.pos.addScaledVector(p.vel, dt);
      if (p.pos.y < 0.05) {
        p.pos.y = 0.05;
        p.vel.y *= -0.3;
      }
    }
    // write into buffers
    const n = this.particles.length;
    for (let i = 0; i < this.MAX; i++) {
      if (i < n) {
        const p = this.particles[i];
        const a = clamp(p.life / p.maxLife, 0, 1);
        this.posAttr.setXYZ(i, p.pos.x, p.pos.y, p.pos.z);
        this.colAttr.setXYZ(i, p.color.r * a, p.color.g * a, p.color.b * a);
        this.sizeAttr.setX(i, p.size * (0.5 + a * 0.5));
      } else {
        this.posAttr.setXYZ(i, 0, -100, 0);
        this.colAttr.setXYZ(i, 0, 0, 0);
        this.sizeAttr.setX(i, 0);
      }
    }
    this.posAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
    this.sizeAttr.needsUpdate = true;
    this.geo.setDrawRange(0, this.MAX);
    // rain follows the player
    if (this.rain && this.rain.visible && this.rainVel) {
      const attr = this.rain.geometry.getAttribute('position') as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      for (let i = 0; i < this.rainCount; i++) {
        arr[i * 3 + 1] -= this.rainVel[i] * dt;
        if (arr[i * 3 + 1] < 0) {
          arr[i * 3] = px + this.rng.range(-50, 50);
          arr[i * 3 + 1] = this.rng.range(30, 40);
          arr[i * 3 + 2] = pz + this.rng.range(-50, 50);
        }
      }
      attr.needsUpdate = true;
    }
  }
}
