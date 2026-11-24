// Static data for Neon Harbor: world layout, palette, vehicles, weapons,
// missions and shot presets. No logic lives here, only the numbers every
// other module agrees on, so the city, the HUD and the tests all match.
//
// Builders 2-3: read vehicle/weapon/mission data from here — never hardcode
// a second copy. WORLD/CITY define the ground truth for the map (HUD and
// minimap draw from these same numbers).

export const SEED_DEFAULT = 1337;

export const WORLD = {
  half: 480, // playable city extends -480..480 on x and z
  roadEvery: 80, // roads are 80 units apart
  roadWidth: 14,
  sidewalk: 5,
  block: 80, // block pitch (road centre to road centre)
  waterX: 452, // water starts east of this x
  islandX: 560, // pier island centre x
  islandZ: 0,
  islandHalf: 110,
} as const;

export const CITY = {
  /** downtown core: towers */
  downtownHalf: 170,
  /** park block (west) */
  park: { x0: -400, x1: -240, z0: -80, z1: 80 },
  /** stadium block (south) */
  stadium: { x: 0, z: 360, w: 150, d: 110 },
  /** harbor docks (east edge) */
  harbor: { x0: 400, x1: 452, z0: -320, z1: 320 },
} as const;

export const PALETTE = {
  asphalt: 0x33333e,
  asphaltLight: 0x2e2e3a,
  sidewalk: 0x8d8d96,
  curb: 0x6f6f78,
  grass: 0x2f6b34,
  water: 0x0e3a55,
  sand: 0xc9b083,
  buildingGlass: 0x1a2436,
  lampGlow: 0xffc46b,
  neonPink: 0xff5c8a,
  neonCyan: 0x37e6ff,
  neonAmber: 0xffb03c,
  sunDusk: 0xff9a3c,
  skyDuskTop: 0x2a1b4d,
  skyDuskBot: 0xff7a3c,
  skyNightTop: 0x050510,
  skyNightBot: 0x0e1030,
  skyDayTop: 0x6fb7ff,
  skyDayBot: 0xcfe8ff,
} as const;

/** Day/night retune: the game opens at dusk and the dusk holds until
 *  ~19:40, so the neon reads against a coloured sky. */
export const DAY = {
  defaultStart: 17.8, // dusk; the game opens here
  duskEnd: 19.67, // ~19:40 — dusk lasts this long before full night
  nightHemi: 0.5, // hemisphere light at night (never pitch black)
  moonIntensity: 0.55, // moon directional light at night
  sunMinElevation: 0.04, // sun never dips below the horizon (clamped)
} as const;

/** Physics / movement tuning shared by the player and vehicles. */
export const PHYSICS = {
  walkSpeed: 6,
  sprintSpeed: 10,
  accel: 40,
  friction: 10,
  gravity: 24,
  jumpSpeed: 9,
} as const;

export type VehicleKind =
  | 'sedan'
  | 'sports'
  | 'suv'
  | 'truck'
  | 'bus'
  | 'police'
  | 'bike';

export interface VehicleDef {
  kind: VehicleKind;
  label: string;
  len: number;
  wid: number;
  accel: number;
  brake: number;
  topSpeed: number; // units per second
  reverseSpeed: number;
  steer: number; // radians per second at low speed
  grip: number; // 1 = planted, lower = drifty
  hp: number;
  colors: number[];
}

export const VEHICLES: Record<VehicleKind, VehicleDef> = {
  sedan: {
    kind: 'sedan', label: 'Sedan', len: 4.6, wid: 2.0,
    accel: 14, brake: 26, topSpeed: 34, reverseSpeed: 10, steer: 1.9, grip: 0.9, hp: 100,
    colors: [0x8a97a8, 0x3c4a5c, 0xa83c3c, 0x3c7a4a, 0xc9c9c9, 0x222226],
  },
  sports: {
    kind: 'sports', label: 'Sports', len: 4.4, wid: 2.0,
    accel: 22, brake: 30, topSpeed: 46, reverseSpeed: 12, steer: 2.2, grip: 0.95, hp: 80,
    colors: [0xff2a55, 0xffb03c, 0x37e6ff, 0x7a2aff, 0xf5f5f5],
  },
  suv: {
    kind: 'suv', label: 'SUV', len: 5.0, wid: 2.1,
    accel: 12, brake: 24, topSpeed: 30, reverseSpeed: 9, steer: 1.7, grip: 0.9, hp: 130,
    colors: [0x2c2c30, 0x5c3a1a, 0x1a3a5c, 0x6b7a5c],
  },
  truck: {
    kind: 'truck', label: 'Truck', len: 6.4, wid: 2.4,
    accel: 9, brake: 20, topSpeed: 26, reverseSpeed: 8, steer: 1.4, grip: 0.9, hp: 170,
    colors: [0x8a6b2a, 0x4a5c6b, 0x777777],
  },
  bus: {
    kind: 'bus', label: 'Bus', len: 9.0, wid: 2.6,
    accel: 8, brake: 18, topSpeed: 24, reverseSpeed: 7, steer: 1.2, grip: 0.9, hp: 200,
    colors: [0x2a7a8a, 0xd8a03c, 0x8a2a3c],
  },
  police: {
    kind: 'police', label: 'Police Cruiser', len: 4.8, wid: 2.0,
    accel: 20, brake: 30, topSpeed: 42, reverseSpeed: 11, steer: 2.1, grip: 0.95, hp: 120,
    colors: [0x101418],
  },
  bike: {
    kind: 'bike', label: 'Motorcycle', len: 2.4, wid: 0.9,
    accel: 24, brake: 32, topSpeed: 48, reverseSpeed: 0, steer: 2.6, grip: 0.85, hp: 50,
    colors: [0xff2a55, 0x222226, 0x37e6ff],
  },
};

export type WeaponKind = 'fist' | 'pistol' | 'smg' | 'shotgun' | 'grenade';

export interface WeaponDef {
  kind: WeaponKind;
  label: string;
  damage: number;
  rate: number; // seconds between shots
  range: number;
  spread: number; // radians
  mag: number; // -1 = infinite (fists)
  reload: number; // seconds
  auto: boolean;
  pellets: number;
}

export const WEAPONS: Record<WeaponKind, WeaponDef> = {
  fist: { kind: 'fist', label: 'Fists', damage: 12, rate: 0.45, range: 2.4, spread: 0, mag: -1, reload: 0, auto: false, pellets: 1 },
  pistol: { kind: 'pistol', label: 'Pistol', damage: 26, rate: 0.28, range: 70, spread: 0.012, mag: 12, reload: 1.1, auto: false, pellets: 1 },
  smg: { kind: 'smg', label: 'SMG', damage: 14, rate: 0.085, range: 55, spread: 0.045, mag: 30, reload: 1.4, auto: true, pellets: 1 },
  shotgun: { kind: 'shotgun', label: 'Shotgun', damage: 11, rate: 0.85, range: 30, spread: 0.09, mag: 6, reload: 2.0, auto: false, pellets: 7 },
  grenade: { kind: 'grenade', label: 'Grenade', damage: 120, rate: 1.2, range: 45, spread: 0, mag: 5, reload: 0.6, auto: false, pellets: 1 },
};

export const WEAPON_ORDER: WeaponKind[] = ['fist', 'pistol', 'smg', 'shotgun', 'grenade'];

export interface MissionDef {
  id: number;
  name: string;
  giver: string;
  brief: string;
  reward: number;
  par: string; // one-line objective shown on the HUD
}

export const MISSIONS: MissionDef[] = [
  { id: 1, name: 'First Keys', giver: 'Vera Kwan', brief: 'Steal a sedan and bring it to my garage.', reward: 200, par: 'Steal a sedan and deliver it to the garage' },
  { id: 2, name: 'Hot Delivery', giver: 'Vera Kwan', brief: 'A package for the docks. Fast. No questions.', reward: 350, par: 'Deliver the package to the harbor docks in time' },
  { id: 3, name: 'Lose the Heat', giver: 'Silas Vane', brief: 'The law is on you. Shake them off and come back clean.', reward: 300, par: 'Lose your wanted level' },
  { id: 4, name: 'Loud Message', giver: 'Silas Vane', brief: 'The Dusk Vipers need a reminder. Hit their corner hard.', reward: 500, par: 'Take out the Vipers on their corner' },
  { id: 5, name: 'Hotel Forecourt', giver: 'Vera Kwan', brief: 'Clear the hotel forecourt. Nobody walks out of that deal.', reward: 600, par: 'Clear the hotel forecourt of Vipers' },
  { id: 6, name: 'Bank Vault', giver: 'Silas Vane', brief: 'The Harbor Bank vault. In, out, and gone before the sirens.', reward: 1200, par: 'Rob the bank vault and reach the getaway marker' },
  { id: 7, name: 'Ferris Finale', giver: 'Silas Vane', brief: 'Vane is done talking. End it at the ferris wheel.', reward: 2000, par: 'Defeat Silas Vane at the ferris wheel' },
];

export const STORY = {
  player: 'Rook Calloway',
  fixer: 'Vera Kwan',
  kingpin: 'Silas Vane',
  gang: 'Dusk Vipers',
  city: 'Neon Harbor',
} as const;

/** Time of day (hours) for the default game and each screenshot scenario. */
export const SHOT_TIME = {
  default: 17.8,
  chase: 17.8,
  street: 17.9,
  mission: 18.5,
  map: 22.0,
  night: 22.0,
} as const;

export const SAVE_KEY = 'neon-harbor-save-v1';
export const SETTINGS_KEY = 'neon-harbor-settings-v1';

export const RADIO_STATIONS = [
  { name: 'NEON FM', genre: 'synthwave' },
  { name: 'HARBOR 92', genre: 'hiphop' },
  { name: 'PIER JAZZ', genre: 'jazz' },
] as const;
