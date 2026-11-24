// Shared structural types for the Builder 3 subsystems (missions, HUD,
// police, combat, audio, economy). main.ts owns the concrete player
// (StubPlayer); every subsystem below talks to it through this interface
// only, so no module needs to import main.ts.
import type * as THREE from 'three';
import type { WeaponKind } from './config';
import type { Vehicle } from './vehicles';

/** The minimal player surface every Builder 3 module may use. */
export interface PlayerLike {
  pos: THREE.Vector3;
  heading: number;
  hp: number;
  armor: number;
  money: number;
  wanted: number;
  speed: number;
  dead: boolean;
  inCar: Vehicle | null;
  currentWeapon: WeaponKind;
  mesh: THREE.Group;
  hasWeapon(kind: WeaponKind): boolean;
  giveWeapon(kind: WeaponKind, ammo: number, reserve: number): void;
  ammo(): { ammo: number; reserve: number };
}

/** Muzzle position + aim direction for a shot, in world space. */
export interface Aim {
  origin: THREE.Vector3;
  dir: THREE.Vector3;
}
