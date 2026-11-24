// Neon Harbor — the seeded procedural city (Builder 2).
//
// Roads on an 80-unit grid, a downtown of towers, a harbor with docks and
// cranes, a causeway to a pier island with a ferris wheel, a park with a
// pond, and a stadium. All geometry is primitives + canvas textures;
// buildings, lamps and trees are InstancedMesh, so the whole city costs a
// few dozen draw calls. Deterministic from the seed: same seed, same city.
//
// This file owns: ground/roads/water/island, buildings + colliders,
// landmarks (spire, stadium, ferris wheel, harbor), lamps, traffic-light
// phase data, the minimap data, and the collision / road queries the rest
// of the game uses (isBlocked, collideCircle, onRoad, nearestRoad, and the
// road-adjacent spawn points other systems place targets on — never block
// centres, buildings sit there).
import * as THREE from 'three';
import { AABB, RNG, clamp } from './random';
import { CITY, PALETTE, WORLD } from './config';

export interface MapData {
  roads: number[];
  blocks: { x: number; z: number; w: number; d: number; color: number }[];
  water: { x0: number; x1: number; z0: number; z1: number };
  park: { x0: number; x1: number; z0: number; z1: number };
  island: { x: number; z: number; half: number };
  landmarks: { x: number; z: number; kind: string }[];
}

/** Lit-window texture shared by every building (one canvas, one material). */
function windowTexture(rng: RNG): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = '#232a3a';
  g.fillRect(0, 0, 128, 256);
  for (let y = 8; y < 248; y += 16) {
    for (let x = 8; x < 120; x += 14) {
      if (rng.next() < 0.42) {
        g.fillStyle = rng.chance(0.6) ? '#ffd88a' : '#9ad8ff';
        g.globalAlpha = 0.75 + rng.next() * 0.25;
      } else {
        g.fillStyle = '#0c1220';
        g.globalAlpha = 1;
      }
      g.fillRect(x, y, 8, 10);
    }
  }
  g.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** Procedural water texture (seeded streaks, no Math.random anywhere). */
function waterTexture(rng: RNG): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const g = c.getContext('2d')!;
  g.fillStyle = '#14608a';
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(120,200,255,0.25)';
  g.lineWidth = 2;
  for (let i = 0; i < 40; i++) {
    const y = rng.next() * 256;
    const x0 = rng.next() * 256;
    g.beginPath();
    g.moveTo(x0, y);
    g.lineTo(x0 + 40, y + (rng.next() * 8 - 4));
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 10);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

interface BuildingRec {
  x: number;
  z: number;
  w: number;
  h: number;
  d: number;
  color: number;
}

export class City {
  readonly scene: THREE.Scene;
  readonly rng: RNG;
  readonly colliders: AABB[] = [];
  readonly roadLines: number[] = [];
  readonly mapData: MapData;
  readonly buildingMat: THREE.MeshStandardMaterial;
  readonly lampMat: THREE.MeshStandardMaterial;
  readonly waterMat: THREE.MeshStandardMaterial;
  /** Total buildings placed (tower landmark included). */
  buildingCount = 0;
  private ferris: THREE.Group | null = null;
  private beacon: THREE.Mesh | null = null;
  private buildingChunks: THREE.InstancedMesh[] = [];
  private waterTex: THREE.CanvasTexture;
  private lightPhase = new Map<string, number>();

  constructor(scene: THREE.Scene, seed: number) {
    this.scene = scene;
    this.rng = new RNG(seed);
    const rng = this.rng;
    for (let i = -5; i <= 5; i++) this.roadLines.push(i * WORLD.roadEvery);

    // ---- base ground (grass-green dirt under everything) ----
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(WORLD.half * 2 + 420, WORLD.half * 2),
      new THREE.MeshStandardMaterial({ color: 0x2a2f28, roughness: 1 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(90, 0, 0);
    ground.receiveShadow = true;
    scene.add(ground);

    // ---- water (east) ----
    this.waterTex = waterTexture(rng);
    this.waterMat = new THREE.MeshStandardMaterial({
      map: this.waterTex, color: 0x9fd4ff, roughness: 0.55, metalness: 0.1,
      transparent: true, opacity: 0.94,
    });
    const water = new THREE.Mesh(new THREE.PlaneGeometry(240, WORLD.half * 2), this.waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(WORLD.waterX + 120, 0.02, 0);
    water.receiveShadow = true;
    scene.add(water);

    // ---- pier island + causeway ----
    const island = new THREE.Mesh(
      new THREE.BoxGeometry(WORLD.islandHalf * 2, 0.2, WORLD.islandHalf * 2),
      new THREE.MeshStandardMaterial({ color: 0x9a8a6a, roughness: 1 }),
    );
    island.position.set(WORLD.islandX, 0.1, WORLD.islandZ);
    island.receiveShadow = true;
    scene.add(island);
    const causeway = new THREE.Mesh(
      new THREE.BoxGeometry(90, 0.2, 18),
      new THREE.MeshStandardMaterial({ color: 0x55555f, roughness: 0.9 }),
    );
    causeway.position.set(440, 0.1, 0);
    causeway.receiveShadow = true;
    scene.add(causeway);
    for (const s of [-1, 1]) {
      const rail = new THREE.Mesh(
        new THREE.BoxGeometry(90, 1.1, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x37e6ff, roughness: 0.4, metalness: 0.4 }),
      );
      rail.position.set(440, 1.0, s * 8.6);
      scene.add(rail);
    }

    // ---- roads (planes) ----
    const roadMat = new THREE.MeshStandardMaterial({
      color: PALETTE.asphalt, roughness: 0.92,
      polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
    });
    for (const x of this.roadLines) {
      const r = new THREE.Mesh(new THREE.PlaneGeometry(WORLD.roadWidth, WORLD.half * 2), roadMat);
      r.rotation.x = -Math.PI / 2;
      r.position.set(x, 0.02, 0);
      r.receiveShadow = true;
      scene.add(r);
    }
    for (const z of this.roadLines) {
      const r = new THREE.Mesh(new THREE.PlaneGeometry(WORLD.half * 2, WORLD.roadWidth), roadMat);
      r.rotation.x = -Math.PI / 2;
      r.position.set(0, 0.03, z);
      r.receiveShadow = true;
      scene.add(r);
    }

    // ---- centre dashes (instanced) ----
    const dashGeo = new THREE.PlaneGeometry(0.5, 3.2);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xd8b93c });
    const dashes = new THREE.InstancedMesh(dashGeo, dashMat, this.roadLines.length * 2 * 22);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const s = new THREE.Vector3(1, 1, 1);
      let i = 0;
      for (const x of this.roadLines) {
        for (let z = -440; z <= 440; z += 40) {
          if (this.roadLines.includes(z)) continue;
          m.compose(new THREE.Vector3(x, 0.045, z), q, s);
          dashes.setMatrixAt(i++, m);
        }
      }
      for (const z of this.roadLines) {
        for (let x = -440; x <= 440; x += 40) {
          if (this.roadLines.includes(x)) continue;
          m.compose(new THREE.Vector3(x, 0.045, z), q, s);
          dashes.setMatrixAt(i++, m);
        }
      }
      dashes.count = i;
      dashes.instanceMatrix.needsUpdate = true;
    }
    scene.add(dashes);

    // ---- crosswalk slabs at every intersection (instanced stripes) ----
    const stripeGeo = new THREE.PlaneGeometry(1.1, 5.5);
    const stripeMat = new THREE.MeshBasicMaterial({ color: 0x9a9aa2 });
    const stripes = new THREE.InstancedMesh(stripeGeo, stripeMat, 11 * 11 * 4 * 5);
    {
      const m = new THREE.Matrix4();
      const qz = new THREE.Quaternion();
      const qx = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
      const s = new THREE.Vector3(1, 1, 1);
      let i = 0;
      for (const x of this.roadLines) {
        for (const z of this.roadLines) {
          for (let k = -2; k <= 2; k++) {
            m.compose(new THREE.Vector3(x + k * 2.2, 0.05, z - 9.5), qz, s);
            stripes.setMatrixAt(i++, m);
            m.compose(new THREE.Vector3(x + k * 2.2, 0.05, z + 9.5), qz, s);
            stripes.setMatrixAt(i++, m);
            m.compose(new THREE.Vector3(x - 9.5, 0.05, z + k * 2.2), qx, s);
            stripes.setMatrixAt(i++, m);
            m.compose(new THREE.Vector3(x + 9.5, 0.05, z + k * 2.2), qx, s);
            stripes.setMatrixAt(i++, m);
          }
        }
      }
      stripes.count = i;
      stripes.instanceMatrix.needsUpdate = true;
    }
    scene.add(stripes);

    // ---- sidewalk slabs, one per block (instanced) ----
    const slabGeo = new THREE.BoxGeometry(66, 0.3, 66);
    const slabMat = new THREE.MeshStandardMaterial({ color: PALETTE.sidewalk, roughness: 1 });
    const slabs = new THREE.InstancedMesh(slabGeo, slabMat, 100);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const s = new THREE.Vector3(1, 1, 1);
      let i = 0;
      for (let bx = -4; bx <= 5; bx++) {
        for (let bz = -4; bz <= 5; bz++) {
          m.compose(new THREE.Vector3(bx * 80 - 40, 0.15, bz * 80 - 40), q, s);
          slabs.setMatrixAt(i++, m);
        }
      }
      slabs.count = i;
      slabs.instanceMatrix.needsUpdate = true;
    }
    slabs.receiveShadow = true;
    scene.add(slabs);

    // ---- buildings (5 instanced chunks: 4 quadrants + downtown) ----
    const winTex = windowTexture(rng);
    this.buildingMat = new THREE.MeshStandardMaterial({
      map: winTex, emissiveMap: winTex, emissive: 0xffc46b, emissiveIntensity: 0.55,
      roughness: 0.85, metalness: 0.08,
    });
    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    boxGeo.translate(0, 0.5, 0);
    const blocks: { x: number; z: number; w: number; d: number; color: number }[] = [];
    const perChunk: BuildingRec[][] = [[], [], [], [], []];
    const chunkOf = (x: number, z: number): number => {
      if (Math.abs(x) <= CITY.downtownHalf && Math.abs(z) <= CITY.downtownHalf) return 4;
      return (x >= 0 ? 1 : 0) + (z >= 0 ? 2 : 0);
    };
    const addBuilding = (rec: BuildingRec): void => {
      perChunk[chunkOf(rec.x, rec.z)].push(rec);
      blocks.push({ x: rec.x, z: rec.z, w: rec.w, d: rec.d, color: rec.color });
      this.colliders.push({
        minX: rec.x - rec.w / 2, maxX: rec.x + rec.w / 2,
        minZ: rec.z - rec.d / 2, maxZ: rec.z + rec.d / 2,
      });
      this.buildingCount++;
    };
    for (let bx = -4; bx <= 5; bx++) {
      for (let bz = -4; bz <= 5; bz++) {
        const cx = bx * 80 - 40;
        const cz = bz * 80 - 40;
        if (this.inPark(cx, cz)) continue;
        if (Math.abs(cx - CITY.stadium.x) < 90 && Math.abs(cz - CITY.stadium.z) < 70) continue;
        if (cx > 360) {
          // harbor warehouses
          addBuilding({
            x: cx, z: cz,
            w: rng.range(24, 40), d: rng.range(16, 26), h: rng.range(9, 15),
            color: rng.pick([0x5c6b7a, 0x7a6b4a, 0x6b4a4a, 0x4a5c6b]),
          });
          continue;
        }
        const downtown = Math.abs(cx) <= CITY.downtownHalf && Math.abs(cz) <= CITY.downtownHalf;
        if (downtown) {
          addBuilding({
            x: cx, z: cz,
            w: rng.range(22, 34), d: rng.range(22, 34), h: rng.range(38, 92),
            color: rng.pick([0x2c3550, 0x3a2c50, 0x24384a, 0x4a3a5c, 0x2c4a3c]),
          });
        } else {
          const n = rng.int(1, 3);
          for (let k = 0; k < n; k++) {
            addBuilding({
              x: cx + rng.range(-18, 18), z: cz + rng.range(-18, 18),
              w: rng.range(11, 22), d: rng.range(11, 22), h: rng.range(8, 22),
              color: rng.pick([0x4a4038, 0x5c4a3a, 0x3a4a5c, 0x6b5c4a, 0x44503e]),
            });
          }
        }
      }
    }
    for (let c = 0; c < 5; c++) {
      const list = perChunk[c];
      const mesh = new THREE.InstancedMesh(boxGeo, this.buildingMat, Math.max(1, list.length));
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const col = new THREE.Color();
      list.forEach((b, i) => {
        m.compose(new THREE.Vector3(b.x, 0.3, b.z), q, new THREE.Vector3(b.w, b.h, b.d));
        mesh.setMatrixAt(i, m);
        mesh.setColorAt(i, col.setHex(b.color));
      });
      mesh.count = list.length;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      scene.add(mesh);
      this.buildingChunks.push(mesh);
    }

    // ---- tower landmark (spire + blinking beacon) ----
    const tower = new THREE.Mesh(
      new THREE.BoxGeometry(26, 130, 26),
      new THREE.MeshStandardMaterial({
        map: winTex, emissiveMap: winTex, emissive: 0xffc46b, emissiveIntensity: 0.7, roughness: 0.8,
      }),
    );
    tower.position.set(80, 0.3, -80);
    tower.castShadow = true;
    scene.add(tower);
    const spire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 2.5, 26, 8),
      new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.4, metalness: 0.7 }),
    );
    spire.position.set(80, 143, -80);
    scene.add(spire);
    this.beacon = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 12, 8),
      new THREE.MeshBasicMaterial({ color: 0xff2a3c }),
    );
    this.beacon.position.set(80, 158, -80);
    scene.add(this.beacon);
    this.colliders.push({ minX: 67, maxX: 93, minZ: -93, maxZ: -67 });
    this.buildingCount++;

    // ---- stadium (south) ----
    const stad = new THREE.Group();
    const bowl = new THREE.Mesh(
      new THREE.CylinderGeometry(62, 68, 16, 24, 1, true),
      new THREE.MeshStandardMaterial({ color: 0x8a8f98, roughness: 0.9, side: THREE.DoubleSide }),
    );
    bowl.position.y = 8;
    stad.add(bowl);
    const field = new THREE.Mesh(
      new THREE.CircleGeometry(52, 24),
      new THREE.MeshStandardMaterial({ color: 0x2f7a34, roughness: 1 }),
    );
    field.rotation.x = -Math.PI / 2;
    field.position.y = 0.35;
    stad.add(field);
    for (let k = 0; k < 4; k++) {
      const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 30, 6),
        new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.6, metalness: 0.5 }),
      );
      pole.position.set(Math.cos(a) * 66, 15, Math.sin(a) * 66);
      stad.add(pole);
      const head = new THREE.Mesh(
        new THREE.BoxGeometry(8, 3, 1),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2c8, emissiveIntensity: 1.2 }),
      );
      head.position.set(Math.cos(a) * 66, 30, Math.sin(a) * 66);
      head.lookAt(0, 0, 0);
      stad.add(head);
    }
    stad.position.set(CITY.stadium.x, 0, CITY.stadium.z);
    stad.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
    scene.add(stad);
    this.colliders.push({ minX: -68, maxX: 68, minZ: 292, maxZ: 428 });

    // ---- park (west): grass, pond, trees ----
    const park = CITY.park;
    const grass = new THREE.Mesh(
      new THREE.PlaneGeometry(park.x1 - park.x0, park.z1 - park.z0),
      new THREE.MeshStandardMaterial({ color: PALETTE.grass, roughness: 1 }),
    );
    grass.rotation.x = -Math.PI / 2;
    grass.position.set((park.x0 + park.x1) / 2, 0.06, (park.z0 + park.z1) / 2);
    grass.receiveShadow = true;
    scene.add(grass);
    const pond = new THREE.Mesh(
      new THREE.CircleGeometry(26, 20),
      new THREE.MeshStandardMaterial({ color: 0x1a5a8a, roughness: 0.25, metalness: 0.2 }),
    );
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(-320, 0.08, 0);
    scene.add(pond);
    this.colliders.push({ minX: -346, maxX: -294, minZ: -26, maxZ: 26 });

    // ---- trees (instanced trunks + cones): park + sidewalk corners ----
    const treeSpots: { x: number; z: number }[] = [];
    for (let i = 0; i < 70; i++) {
      treeSpots.push({ x: rng.range(park.x0 + 8, park.x1 - 8), z: rng.range(park.z0 + 8, park.z1 - 8) });
    }
    for (let i = 0; i < 60; i++) {
      const bx = rng.pick(this.roadLines);
      const bz = rng.pick(this.roadLines);
      treeSpots.push({ x: bx + rng.range(-30, 30), z: bz + 34 });
    }
    const trunkGeo = new THREE.CylinderGeometry(0.35, 0.5, 2.4, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4028, roughness: 1 });
    const leafGeo = new THREE.ConeGeometry(2.6, 6.5, 8);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f7a34, roughness: 1 });
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treeSpots.length);
    const leaves = new THREE.InstancedMesh(leafGeo, leafMat, treeSpots.length);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const col = new THREE.Color();
      treeSpots.forEach((t, i) => {
        const s = rng.range(0.8, 1.5);
        m.compose(new THREE.Vector3(t.x, 1.2 * s, t.z), q, new THREE.Vector3(s, s, s));
        trunks.setMatrixAt(i, m);
        m.compose(new THREE.Vector3(t.x, (2.4 + 3.0) * s, t.z), q, new THREE.Vector3(s, s, s));
        leaves.setMatrixAt(i, m);
        leaves.setColorAt(i, col.setHSL(0.32 + rng.next() * 0.06, 0.5, 0.3 + rng.next() * 0.12));
      });
      trunks.instanceMatrix.needsUpdate = true;
      leaves.instanceMatrix.needsUpdate = true;
      if (leaves.instanceColor) leaves.instanceColor.needsUpdate = true;
    }
    trunks.castShadow = true;
    leaves.castShadow = true;
    scene.add(trunks);
    scene.add(leaves);

    // ---- street lamps (instanced pole + emissive head) ----
    const lampSpots: { x: number; z: number }[] = [];
    for (const x of this.roadLines) {
      for (const z of this.roadLines) {
        lampSpots.push({ x: x + 9, z: z + 9 });
      }
    }
    const poleGeo = new THREE.CylinderGeometry(0.18, 0.24, 6.5, 6);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x2c2c34, roughness: 0.7, metalness: 0.5 });
    const poles = new THREE.InstancedMesh(poleGeo, poleMat, lampSpots.length);
    const headGeo = new THREE.SphereGeometry(0.55, 8, 6);
    this.lampMat = new THREE.MeshStandardMaterial({ color: 0xffc46b, emissive: 0xffc46b, emissiveIntensity: 2.2 });
    const heads = new THREE.InstancedMesh(headGeo, this.lampMat, lampSpots.length);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const s = new THREE.Vector3(1, 1, 1);
      lampSpots.forEach((p, i) => {
        m.compose(new THREE.Vector3(p.x, 3.25, p.z), q, s);
        poles.setMatrixAt(i, m);
        m.compose(new THREE.Vector3(p.x, 6.6, p.z), q, s);
        heads.setMatrixAt(i, m);
      });
      poles.instanceMatrix.needsUpdate = true;
      heads.instanceMatrix.needsUpdate = true;
    }
    scene.add(poles);
    scene.add(heads);

    // ---- traffic lights (instanced poles + 3 stacked heads) ----
    const tlPoleGeo = new THREE.CylinderGeometry(0.16, 0.2, 5.5, 6);
    const tlPoles = new THREE.InstancedMesh(tlPoleGeo, poleMat, 121);
    const tlHeadGeo = new THREE.SphereGeometry(0.42, 8, 6);
    const tlHeadMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xffffff, emissiveIntensity: 1.4 });
    const tlHeads = new THREE.InstancedMesh(tlHeadGeo, tlHeadMat, 121 * 3);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const s = new THREE.Vector3(1, 1, 1);
      const col = new THREE.Color();
      let pi = 0;
      let hi = 0;
      for (const x of this.roadLines) {
        for (const z of this.roadLines) {
          m.compose(new THREE.Vector3(x - 9, 2.75, z - 9), q, s);
          tlPoles.setMatrixAt(pi++, m);
          for (let k = 0; k < 3; k++) {
            m.compose(new THREE.Vector3(x - 9, 4.6 + k * 0.9, z - 9), q, s);
            tlHeads.setMatrixAt(hi, m);
            tlHeads.setColorAt(hi, col.setHex(k === 0 ? 0xff2a2a : k === 1 ? 0xffc42a : 0x2aff5c));
            hi++;
          }
          this.lightPhase.set(`${x},${z}`, rng.next() * 12);
        }
      }
      tlPoles.count = pi;
      tlHeads.count = hi;
      tlPoles.instanceMatrix.needsUpdate = true;
      tlHeads.instanceMatrix.needsUpdate = true;
      if (tlHeads.instanceColor) tlHeads.instanceColor.needsUpdate = true;
    }
    scene.add(tlPoles);
    scene.add(tlHeads);

    // ---- harbor: containers (kept OFF the roads) + cranes ----
    const contGeo = new THREE.BoxGeometry(6, 2.6, 2.6);
    const contMat = new THREE.MeshStandardMaterial({ roughness: 0.8, metalness: 0.2 });
    const conts: { x: number; z: number; color: number }[] = [];
    for (let i = 0; i < 36; i++) {
      const x = rng.range(408, 446);
      let z = rng.range(-300, 300);
      // keep containers off the roads (and off the z=0 causeway approach)
      while (this.roadLines.some((r) => Math.abs(z - r) < 8)) z += 20;
      conts.push({ x, z, color: rng.pick([0x8a2a2a, 0x2a6b8a, 0x8a6b2a, 0x3a8a4a, 0x5c5c6b]) });
      this.colliders.push({ minX: x - 3, maxX: x + 3, minZ: z - 1.3, maxZ: z + 1.3 });
    }
    const contMesh = new THREE.InstancedMesh(contGeo, contMat, conts.length);
    {
      const m = new THREE.Matrix4();
      const q = new THREE.Quaternion();
      const col = new THREE.Color();
      conts.forEach((c, i) => {
        m.compose(new THREE.Vector3(c.x, 1.3, c.z), q, new THREE.Vector3(1, 1, 1));
        contMesh.setMatrixAt(i, m);
        contMesh.setColorAt(i, col.setHex(c.color));
      });
      contMesh.instanceMatrix.needsUpdate = true;
      if (contMesh.instanceColor) contMesh.instanceColor.needsUpdate = true;
    }
    contMesh.castShadow = true;
    scene.add(contMesh);
    for (let k = 0; k < 3; k++) {
      const cz = -200 + k * 160; // -200, -40, 120 — none sits on a road line
      const crane = new THREE.Group();
      const legMat = new THREE.MeshStandardMaterial({ color: 0xd8a03c, roughness: 0.6, metalness: 0.4 });
      for (const [lx, lz] of [[-3, -3], [3, -3], [-3, 3], [3, 3]] as const) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(1.2, 26, 1.2), legMat);
        leg.position.set(lx, 13, lz);
        crane.add(leg);
      }
      const arm = new THREE.Mesh(new THREE.BoxGeometry(2, 1.6, 34), legMat);
      arm.position.set(0, 26, 8);
      crane.add(arm);
      const hook = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 2.4, 2.4),
        new THREE.MeshStandardMaterial({ color: 0x333333 }),
      );
      hook.position.set(0, 18, 20);
      crane.add(hook);
      crane.position.set(430, 0, cz);
      crane.traverse((o) => { if (o instanceof THREE.Mesh) o.castShadow = true; });
      scene.add(crane);
      this.colliders.push({ minX: 426, maxX: 434, minZ: cz - 4, maxZ: cz + 4 });
    }

    // ---- ferris wheel on the pier island ----
    const wheel = new THREE.Group();
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(26, 1.1, 10, 32),
      new THREE.MeshStandardMaterial({ color: 0xff5c8a, emissive: 0xff5c8a, emissiveIntensity: 0.7, roughness: 0.4 }),
    );
    wheel.add(rim);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      const spoke = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 52, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xd8d8e2, roughness: 0.5, metalness: 0.5 }),
      );
      spoke.rotation.z = a + Math.PI / 2;
      wheel.add(spoke);
      const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(3.4, 3, 3),
        new THREE.MeshStandardMaterial({ color: k % 2 ? 0x37e6ff : 0xffb03c, emissive: 0x332200, roughness: 0.5 }),
      );
      cabin.position.set(Math.cos(a) * 26, Math.sin(a) * 26, 0);
      wheel.add(cabin);
    }
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(2, 2, 3, 12),
      new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.6, roughness: 0.4 }),
    );
    hub.rotation.x = Math.PI / 2;
    wheel.add(hub);
    wheel.position.set(WORLD.islandX, 34, WORLD.islandZ);
    scene.add(wheel);
    this.ferris = wheel;
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.BoxGeometry(2, 34, 2),
        new THREE.MeshStandardMaterial({ color: 0x777777, roughness: 0.6, metalness: 0.4 }),
      );
      leg.position.set(WORLD.islandX + s * 7, 17, WORLD.islandZ);
      leg.rotation.z = -s * 0.22;
      scene.add(leg);
    }
    this.colliders.push({ minX: WORLD.islandX - 10, maxX: WORLD.islandX + 10, minZ: -4, maxZ: 4 });

    // ---- minimap data ----
    this.mapData = {
      roads: [...this.roadLines],
      blocks: blocks.map((b) => ({ x: b.x, z: b.z, w: b.w, d: b.d, color: b.color })),
      water: { x0: WORLD.waterX, x1: WORLD.waterX + 240, z0: -WORLD.half, z1: WORLD.half },
      park: { x0: park.x0, x1: park.x1, z0: park.z0, z1: park.z1 },
      island: { x: WORLD.islandX, z: WORLD.islandZ, half: WORLD.islandHalf },
      landmarks: [
        { x: 80, z: -80, kind: 'tower' },
        { x: CITY.stadium.x, z: CITY.stadium.z, kind: 'stadium' },
        { x: WORLD.islandX, z: WORLD.islandZ, kind: 'ferris' },
        { x: 430, z: 0, kind: 'harbor' },
      ],
    };
  }

  private inPark(x: number, z: number): boolean {
    const p = CITY.park;
    return x >= p.x0 && x <= p.x1 && z >= p.z0 && z <= p.z1;
  }

  /** Is (x,z) water (blocks movement) — causeway and island are dry. */
  isWater(x: number, z: number): boolean {
    if (x < WORLD.waterX) return false;
    if (Math.abs(z) <= 9 && x >= 400 && x <= 480) return false; // causeway
    if (Math.abs(x - WORLD.islandX) <= WORLD.islandHalf && Math.abs(z - WORLD.islandZ) <= WORLD.islandHalf) return false;
    return true;
  }

  /** True when a circle of radius r at (x,z) is blocked by a building/prop/water. */
  isBlocked(x: number, z: number, r: number): boolean {
    if (this.isWater(x, z)) return true;
    for (const b of this.colliders) {
      if (x + r > b.minX && x - r < b.maxX && z + r > b.minZ && z - r < b.maxZ) return true;
    }
    return false;
  }

  /** Push a circle out of every collider it overlaps. Returns true if moved. */
  collideCircle(p: { x: number; z: number }, r: number): boolean {
    let moved = false;
    for (const b of this.colliders) {
      if (p.x + r > b.minX && p.x - r < b.maxX && p.z + r > b.minZ && p.z - r < b.maxZ) {
        const cx = clamp(p.x, b.minX, b.maxX);
        const cz = clamp(p.z, b.minZ, b.maxZ);
        const dx = p.x - cx;
        const dz = p.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2);
          const push = (r - d) / d;
          p.x += dx * push;
          p.z += dz * push;
        } else {
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
        moved = true;
      }
    }
    if (this.isWater(p.x, p.z)) {
      // push back west out of the water
      p.x = Math.min(p.x, WORLD.waterX - r);
      moved = true;
    }
    p.x = clamp(p.x, -WORLD.half, WORLD.waterX + WORLD.islandHalf * 2);
    p.z = clamp(p.z, -WORLD.half, WORLD.half);
    return moved;
  }

  onRoad(x: number, z: number): boolean {
    const hw = WORLD.roadWidth / 2;
    for (const r of this.roadLines) {
      if (Math.abs(x - r) <= hw || Math.abs(z - r) <= hw) return true;
    }
    return false;
  }

  nearestRoad(x: number, z: number): { x: number; z: number } {
    let bx = this.roadLines[0];
    let bz = this.roadLines[0];
    let bd = Infinity;
    for (const r of this.roadLines) {
      const d = Math.abs(x - r);
      if (d < bd) { bd = d; bx = r; }
    }
    bd = Infinity;
    for (const r of this.roadLines) {
      const d = Math.abs(z - r);
      if (d < bd) { bd = d; bz = r; }
    }
    // snap to whichever axis is closer
    return Math.abs(x - bx) < Math.abs(z - bz) ? { x: bx, z } : { x, z: bz };
  }

  randomRoadPoint(rng: RNG): { x: number; z: number; heading: number } {
    const alongX = rng.chance(0.5);
    if (alongX) {
      return { x: rng.range(-400, 400), z: rng.pick(this.roadLines), heading: rng.chance(0.5) ? Math.PI / 2 : -Math.PI / 2 };
    }
    return { x: rng.pick(this.roadLines), z: rng.range(-400, 400), heading: rng.chance(0.5) ? 0 : Math.PI };
  }

  randomSidewalkPoint(rng: RNG): { x: number; z: number } {
    for (let tries = 0; tries < 20; tries++) {
      const x = rng.range(-400, 400);
      const z = rng.range(-400, 400);
      const n = this.nearestRoad(x, z);
      const off = 9.5;
      // sidewalk runs just outside the road edge (road half-width 7 + 2.5)
      const cand = Math.abs(x - n.x) < Math.abs(z - n.z)
        ? { x: n.x + (rng.chance(0.5) ? off : -off), z: n.z + rng.range(-30, 30) }
        : { x: n.x + rng.range(-30, 30), z: n.z + (rng.chance(0.5) ? off : -off) };
      if (!this.isBlocked(cand.x, cand.z, 1)) return cand;
    }
    return { x: 0, z: 40 };
  }

  /**
   * Road-adjacent spawn points (mission targets, pickups, getaway
   * markers): ON the road, in a lane (3.5 units off the centre line),
   * never inside a block — buildings sit there. Deterministic per seed;
   * `count` points, each at least 40 units from the previous ones.
   */
  roadSpawnPoints(count: number, rng: RNG): { x: number; z: number; heading: number }[] {
    const out: { x: number; z: number; heading: number }[] = [];
    let guard = 0;
    while (out.length < count && guard++ < count * 30) {
      const pt = this.randomRoadPoint(rng);
      const alongX = Math.abs(Math.sin(pt.heading)) > 0.5;
      const lane = rng.chance(0.5) ? 3.5 : -3.5;
      const x = pt.x + (alongX ? 0 : lane);
      const z = pt.z + (alongX ? lane : 0);
      if (this.isBlocked(x, z, 2)) continue;
      if (out.some((o) => Math.hypot(o.x - x, o.z - z) < 40)) continue;
      out.push({ x, z, heading: pt.heading });
    }
    return out;
  }

  /** Traffic light at an intersection: 'ns' (north-south green) or 'ew'. */
  lightState(x: number, z: number, time: number): 'ns' | 'ew' {
    const phase = this.lightPhase.get(`${x},${z}`) ?? 0;
    const t = (time + phase) % 12;
    return t < 6 ? 'ns' : 'ew';
  }

  /** Night factor 0..1: lamps and windows glow at dusk/night. */
  setNight(lampOn: number): void {
    this.lampMat.emissiveIntensity = 0.3 + lampOn * 2.4;
    this.buildingMat.emissiveIntensity = 0.35 + lampOn * 0.5;
  }

  /** Rotate the ferris wheel, blink the beacon, scroll the water, hide far chunks. */
  update(dt: number, px: number, pz: number, time: number): void {
    if (this.ferris) this.ferris.rotation.z += dt * 0.05;
    if (this.beacon) {
      const m = this.beacon.material as THREE.MeshBasicMaterial;
      m.color.setHex(Math.sin(time * 2.4) > 0 ? 0xff2a3c : 0x881122);
    }
    this.waterTex.offset.x += dt * 0.004;
    this.waterTex.offset.y += dt * 0.002;
    for (let c = 0; c < this.buildingChunks.length; c++) {
      const mesh = this.buildingChunks[c];
      // chunk centres: quadrants at (+-240, +-240), downtown at (0,0)
      const cx = c === 4 ? 0 : (c % 2 === 0 ? -240 : 240);
      const cz = c === 4 ? 0 : (c < 2 ? -240 : 240);
      const d = Math.hypot(px - cx, pz - cz);
      mesh.visible = d < 620;
    }
  }
}
