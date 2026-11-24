// Third-person follow camera for Neon Harbor.
//
// What this file owns (Builders 2-3: use this rig, do not make a second
// camera):
//   CameraRig   yaw/pitch/distance, damped follow, snap() for teleports,
//               shake offsets from FX. Collision-aware: the rig shortens
//               its distance when a building AABB sits between the camera
//               and the target (Builders 2 registers colliders via
//               setObstacles; with no obstacles it behaves like a plain
//               damped follow).
import * as THREE from 'three';
import { AABB, circleHitsAABB, clamp, damp } from './random';

export class CameraRig {
  yaw: number;
  pitch: number;
  distance: number;
  private camPos = new THREE.Vector3(0, 8, 52);
  private lookTarget = new THREE.Vector3();
  private obstacles: AABB[] = [];

  constructor(
    private camera: THREE.PerspectiveCamera,
    yaw = Math.PI,
    pitch = 0.12,
    distance = 9,
  ) {
    this.yaw = yaw;
    this.pitch = pitch;
    this.distance = distance;
  }

  /** Colliders the camera must not clip through (buildings, walls).
   *  Builder 2 calls this with the city colliders. */
  setObstacles(boxes: AABB[]): void {
    this.obstacles = boxes;
  }

  /** Offset from the target for the current yaw/pitch/distance. */
  private offset(dist: number): THREE.Vector3 {
    return new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch) + 0.35,
      Math.cos(this.yaw) * Math.cos(this.pitch),
    ).multiplyScalar(dist);
  }

  /** Shorten the distance while the wanted camera spot is inside a
   *  building; returns the first clear distance (never below 2.5). */
  private clearDistance(target: THREE.Vector3): number {
    let d = this.distance;
    for (let tries = 0; tries < 8 && d > 2.5; tries++) {
      const spot = target.clone().add(this.offset(d)).add(new THREE.Vector3(0, 1.2, 0));
      let blocked = false;
      for (const b of this.obstacles) {
        if (circleHitsAABB(spot.x, spot.z, 0.6, b)) { blocked = true; break; }
      }
      if (!blocked) return d;
      d *= 0.8;
    }
    return Math.max(d, 2.5);
  }

  /** Teleport the camera behind the target (used after teleport/shot). */
  snap(target: THREE.Vector3): void {
    const d = this.clearDistance(target);
    this.camPos.copy(target).add(this.offset(d)).add(new THREE.Vector3(0, 1.2, 0));
    this.camera.position.copy(this.camPos);
    this.lookTarget.copy(target).add(new THREE.Vector3(0, 2, 0));
    this.camera.lookAt(this.lookTarget);
  }

  /** Damped follow; shake is a small x/y offset from FX.shakeOffset. */
  update(dt: number, target: THREE.Vector3, shakeX = 0, shakeY = 0): void {
    const d = this.clearDistance(target);
    const want = target.clone().add(this.offset(d)).add(new THREE.Vector3(0, 1.2, 0));
    const k = damp(0, 1, 8, dt);
    this.camPos.lerp(want, k);
    this.camera.position.set(
      this.camPos.x + shakeX,
      this.camPos.y + shakeY,
      this.camPos.z,
    );
    this.lookTarget.lerp(target.clone().add(new THREE.Vector3(0, 2, 0)), damp(0, 1, 12, dt));
    this.camera.lookAt(this.lookTarget);
  }

  /** Keep the pitch inside the playable band (drag input clamps here). */
  clampPitch(): void {
    this.pitch = clamp(this.pitch, -0.1, 0.9);
  }
}
