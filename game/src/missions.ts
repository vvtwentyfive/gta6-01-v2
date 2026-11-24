// Neon Harbor — story missions + side activities (Builder 3).
//
// Seven chained missions from config.ts (Missions 1–7), each a small
// stage machine: go-to markers, steal-and-deliver, a timed run, losing
// the heat, gang clear-outs, a bank crack, and a boss fight at the
// ferris wheel. Markers are 3D light beams + ground rings so the target
// is visible from across the city; the HUD draws the GPS route to them.
//
// Side activities: taxi fares (KeyT, 3 fares) and a checkpoint race
// (KeyC, 3 checkpoints, 90 s). Both only run while no story mission is
// active, so the marker and objective line never fight each other.
import * as THREE from 'three';
import { MISSIONS, type MissionDef } from './config';
import { RNG } from './random';
import type { PlayerLike } from './context';
import type { City } from './city';
import type { FX } from './render';
import type { AudioSys } from './audio';
import type { Police } from './police';
import type { Combat } from './combat';

export interface MissionsCtx {
  scene: THREE.Scene;
  city: City;
  fx: FX;
  audio: AudioSys;
  police: Police;
  combat: Combat;
  player: PlayerLike;
  time: number;
  setBanner: (text: string | null) => void;
  setMessage: (text: string) => void;
}

type Stage =
  | { type: 'go'; x: number; z: number; text: string }
  | { type: 'enter'; kind: string; text: string }
  | { type: 'timed'; x: number; z: number; seconds: number; text: string }
  | { type: 'lose'; text: string }
  | { type: 'kill'; x: number; z: number; count: number; text: string }
  | { type: 'crack'; x: number; z: number; seconds: number; text: string }
  | { type: 'boss'; x: number; z: number; text: string };

const GARAGE = { x: -80, z: 160 };
const PICKUP = { x: 0, z: -80 };
const HARBOR = { x: 400, z: 0 };
const CORNER = { x: 80, z: 80 };
const HOTEL = { x: -160, z: 80 };
const BANK = { x: 160, z: -80 };
const GETAWAY = { x: -240, z: -160 };
const FERRIS = { x: 560, z: 0 };
const RACE_POINTS = [
  { x: 0, z: 160 },
  { x: 160, z: 160 },
  { x: 160, z: -160 },
];

function stagesFor(id: number): Stage[] {
  switch (id) {
    case 1:
      return [
        { type: 'enter', kind: 'sedan', text: 'Steal a sedan (press E near one)' },
        { type: 'go', x: GARAGE.x, z: GARAGE.z, text: 'Deliver the sedan to Vera\'s garage' },
      ];
    case 2:
      return [
        { type: 'go', x: PICKUP.x, z: PICKUP.z, text: 'Pick up the package downtown' },
        { type: 'timed', x: HARBOR.x, z: HARBOR.z, seconds: 120, text: 'Deliver to the harbor docks — fast' },
      ];
    case 3:
      return [{ type: 'lose', text: 'Lose the cops — get your wanted level to zero' }];
    case 4:
      return [{ type: 'kill', x: CORNER.x, z: CORNER.z, count: 4, text: 'Take out the Vipers on their corner' }];
    case 5:
      return [{ type: 'kill', x: HOTEL.x, z: HOTEL.z, count: 6, text: 'Clear the hotel forecourt' }];
    case 6:
      return [
        { type: 'go', x: BANK.x, z: BANK.z, text: 'Reach the Harbor Bank' },
        { type: 'crack', x: BANK.x, z: BANK.z, seconds: 5, text: 'Cracking the vault — stay close' },
        { type: 'go', x: GETAWAY.x, z: GETAWAY.z, text: 'Reach the getaway marker' },
      ];
    case 7:
      return [{ type: 'boss', x: FERRIS.x, z: FERRIS.z, text: 'Defeat Silas Vane at the ferris wheel' }];
    default:
      return [{ type: 'go', x: 0, z: 0, text: 'Reach the marker' }];
  }
}

const INTRO_LINES: Record<number, string[]> = {
  1: ['Vera Kwan: Rook. You need wheels and a name.', 'Vera Kwan: Steal a sedan. Bring it to my garage.'],
  2: ['Vera Kwan: Package for the docks. Fast. No questions.', 'Vera Kwan: The clock is already running.'],
  3: ['Silas Vane: The law is on you, kid.', 'Silas Vane: Shake them off and come back clean.'],
  4: ['Silas Vane: The Dusk Vipers need a reminder.', 'Silas Vane: Hit their corner hard.'],
  5: ['Vera Kwan: Clear the hotel forecourt.', 'Vera Kwan: Nobody walks out of that deal.'],
  6: ['Silas Vane: The Harbor Bank vault. In, out, gone.', 'Silas Vane: Before the sirens. Understood?'],
  7: ['Silas Vane: So it ends at the ferris wheel.', 'Silas Vane: Come and take the city, Rook.'],
};

export class Missions {
  active = false;
  activeId: number | null = null;
  objectiveText = '';
  dialogue: string | null = null;
  missionName = '';
  marker: { x: number; z: number } | null = null;
  missionDone = 0;
  coinsCollected = 0;
  taxiDone = 0;
  shotMode = false;
  completed: number[] = [];

  private scene: THREE.Scene;
  private rng: RNG;
  private stages: Stage[] = [];
  private stageIdx = 0;
  private stageT = 0;
  private stageSpawned = false;
  private dialogueLines: string[] = [];
  private dialogueT = 0;
  private markerGroup: THREE.Group | null = null;
  private markerBeam: THREE.Mesh | null = null;
  private markerRing: THREE.Mesh | null = null;
  private markerGem: THREE.Mesh | null = null;
  private taxiActive = false;
  private taxiTarget: { x: number; z: number } | null = null;
  private taxiFares = 0;
  private raceActive = false;
  private raceIdx = 0;
  private raceT = 0;

  constructor(scene: THREE.Scene, seed = 1337) {
    this.scene = scene;
    this.rng = new RNG(seed + 113);
  }

  // ---------- marker visuals ----------

  private buildMarker(): void {
    const g = new THREE.Group();
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xffc42a, transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 34, 12, 1, true), beamMat);
    beam.position.y = 17;
    g.add(beam);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(2.2, 3.2, 32),
      new THREE.MeshBasicMaterial({ color: 0xffc42a, transparent: true, opacity: 0.9, side: THREE.DoubleSide }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.15;
    g.add(ring);
    const gem = new THREE.Mesh(
      new THREE.OctahedronGeometry(1.1),
      new THREE.MeshBasicMaterial({ color: 0xffd76b, transparent: true, opacity: 0.95 }),
    );
    gem.position.y = 6;
    g.add(gem);
    g.visible = false;
    this.scene.add(g);
    this.markerGroup = g;
    this.markerBeam = beam;
    this.markerRing = ring;
    this.markerGem = gem;
  }

  private setMarker(x: number | null, z: number | null): void {
    if (!this.markerGroup) this.buildMarker();
    if (x === null || z === null || !this.markerGroup) {
      if (this.markerGroup) this.markerGroup.visible = false;
      this.marker = null;
      return;
    }
    this.markerGroup.position.set(x, 0, z);
    this.markerGroup.visible = true;
    this.marker = { x, z };
  }

  // ---------- dialogue ----------

  private say(lines: string[]): void {
    this.dialogueLines = [...lines];
    this.dialogueT = 0;
    this.dialogue = this.dialogueLines[0] ?? null;
  }

  // ---------- story missions ----------

  start(id: number, ctx: MissionsCtx): void {
    const def: MissionDef | undefined = MISSIONS.find((m) => m.id === id);
    if (!def) return;
    if (this.active) this.failMission(ctx, 'Mission abandoned');
    this.active = true;
    this.activeId = id;
    this.missionName = def.name;
    this.stages = stagesFor(id);
    this.stageIdx = 0;
    this.stageT = 0;
    this.stageSpawned = false;
    this.say(INTRO_LINES[id] ?? [def.brief]);
    ctx.setBanner(`${def.name} — ${def.giver}`);
    ctx.setMessage(`Mission started: ${def.name} ($${def.reward})`);
    if (id === 3) ctx.police.addWanted(2);
    this.enterStage(ctx);
  }

  startNext(ctx: MissionsCtx): void {
    if (this.active) {
      ctx.setMessage(`Mission in progress: ${this.missionName}`);
      return;
    }
    const next = MISSIONS.find((m) => !this.completed.includes(m.id));
    if (!next) {
      ctx.setMessage('All missions complete — Neon Harbor is yours, Rook.');
      return;
    }
    this.start(next.id, ctx);
  }

  private enterStage(ctx: MissionsCtx): void {
    const st = this.stages[this.stageIdx];
    if (!st) {
      this.completeMission(ctx);
      return;
    }
    this.stageSpawned = false;
    this.stageT = st.type === 'timed' || st.type === 'crack' ? st.seconds : 0;
    this.objectiveText = st.text;
    if (st.type === 'go' || st.type === 'timed' || st.type === 'crack') {
      this.setMarker(st.x, st.z);
    } else if (st.type === 'kill' || st.type === 'boss') {
      this.setMarker(st.x, st.z);
    } else {
      this.setMarker(null, null);
    }
  }

  private advanceStage(ctx: MissionsCtx): void {
    this.stageIdx++;
    if (this.stageIdx >= this.stages.length) {
      this.completeMission(ctx);
    } else {
      this.enterStage(ctx);
    }
  }

  private completeMission(ctx: MissionsCtx): void {
    const def = MISSIONS.find((m) => m.id === this.activeId);
    const reward = def?.reward ?? 0;
    ctx.player.money += reward;
    if (this.activeId !== null) {
      this.completed.push(this.activeId);
      this.missionDone = this.completed.length;
    }
    this.active = false;
    this.activeId = null;
    this.objectiveText = def ? `Completed: ${def.name} (+$${reward})` : '';
    this.setMarker(null, null);
    ctx.combat.clearGang();
    ctx.setBanner(`MISSION COMPLETE  +$${reward}`);
    ctx.audio.missionComplete();
    ctx.setMessage(`Mission complete: ${def?.name ?? ''} — $${reward} earned`);
  }

  failMission(ctx: MissionsCtx, reason: string): void {
    if (!this.active) return;
    this.active = false;
    this.activeId = null;
    this.objectiveText = `Mission failed: ${reason}`;
    this.setMarker(null, null);
    ctx.combat.clearGang();
    ctx.setBanner('MISSION FAILED');
    ctx.audio.missionFail();
    ctx.setMessage(`Mission failed: ${reason}`);
  }

  // ---------- side activities ----------

  startTaxi(ctx: MissionsCtx): void {
    if (this.active) {
      ctx.setMessage('Finish the current mission first.');
      return;
    }
    if (this.taxiActive) {
      ctx.setMessage('Taxi fare already running.');
      return;
    }
    this.taxiActive = true;
    this.taxiFares = 0;
    this.nextFare(ctx);
    ctx.setMessage('Taxi: pick up the fare at the marker.');
  }

  private nextFare(ctx: MissionsCtx): void {
    const pt = ctx.city.randomRoadPoint(this.rng);
    this.taxiTarget = { x: pt.x, z: pt.z };
    this.setMarker(pt.x, pt.z);
    this.objectiveText = `Taxi fare ${this.taxiFares + 1}/3 — reach the pickup marker`;
  }

  startRace(ctx: MissionsCtx): void {
    if (this.active) {
      ctx.setMessage('Finish the current mission first.');
      return;
    }
    if (this.raceActive) {
      ctx.setMessage('Race already running.');
      return;
    }
    this.raceActive = true;
    this.raceIdx = 0;
    this.raceT = 90;
    const pt = RACE_POINTS[0];
    this.setMarker(pt.x, pt.z);
    this.objectiveText = 'Race: checkpoint 1/3 — 90s';
    ctx.setBanner('STREET RACE');
    ctx.setMessage('Race started — hit all 3 checkpoints in 90 seconds.');
  }

  // ---------- per-frame ----------

  update(dt: number, ctx: MissionsCtx): void {
    // Dialogue lines advance every 5 s.
    if (this.dialogue) {
      this.dialogueT += dt;
      if (this.dialogueT > 5) {
        this.dialogueT = 0;
        this.dialogueLines.shift();
        this.dialogue = this.dialogueLines[0] ?? null;
      }
    }
    // Marker pulse + spin.
    if (this.markerGroup?.visible) {
      const t = ctx.time;
      if (this.markerGem) {
        this.markerGem.rotation.y = t * 1.6;
        this.markerGem.position.y = 6 + Math.sin(t * 2) * 0.5;
      }
      if (this.markerRing) {
        const s = 1 + Math.sin(t * 3) * 0.12;
        this.markerRing.scale.set(s, s, 1);
      }
      if (this.markerBeam) {
        const mat = this.markerBeam.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.22 + Math.sin(t * 3) * 0.08;
      }
    }

    // Taxi fares.
    if (this.taxiActive && this.taxiTarget) {
      const d = Math.hypot(ctx.player.pos.x - this.taxiTarget.x, ctx.player.pos.z - this.taxiTarget.z);
      if (d < 8) {
        this.taxiFares++;
        this.taxiDone = this.taxiFares;
        const pay = 40 + this.taxiFares * 20;
        ctx.player.money += pay;
        ctx.audio.pickup();
        ctx.setMessage(`Fare complete +$${pay}`);
        if (this.taxiFares >= 3) {
          this.taxiActive = false;
          this.taxiTarget = null;
          this.setMarker(null, null);
          this.objectiveText = 'Taxi shift done — $' + (40 + 60 + 80) + ' earned';
        } else {
          this.nextFare(ctx);
        }
      }
    }

    // Race checkpoints.
    if (this.raceActive) {
      this.raceT -= dt;
      if (this.raceT <= 0) {
        this.raceActive = false;
        this.setMarker(null, null);
        this.objectiveText = 'Race failed — out of time';
        ctx.setBanner('RACE FAILED');
        ctx.audio.missionFail();
        return;
      }
      const pt = RACE_POINTS[this.raceIdx];
      const d = Math.hypot(ctx.player.pos.x - pt.x, ctx.player.pos.z - pt.z);
      this.objectiveText = `Race: checkpoint ${this.raceIdx + 1}/3 — ${Math.ceil(this.raceT)}s`;
      if (d < 9) {
        this.raceIdx++;
        if (this.raceIdx >= RACE_POINTS.length) {
          this.raceActive = false;
          ctx.player.money += 250;
          this.setMarker(null, null);
          this.objectiveText = 'Race won! +$250';
          ctx.setBanner('RACE WON  +$250');
          ctx.audio.missionComplete();
        } else {
          const next = RACE_POINTS[this.raceIdx];
          this.setMarker(next.x, next.z);
          ctx.audio.pickup();
        }
      }
    }

    // Story mission stages.
    if (!this.active) return;
    const st = this.stages[this.stageIdx];
    if (!st) return;
    const p = ctx.player;
    switch (st.type) {
      case 'go': {
        const d = Math.hypot(p.pos.x - st.x, p.pos.z - st.z);
        this.objectiveText = `${st.text} (${Math.round(d)}m)`;
        if (d < 8) this.advanceStage(ctx);
        break;
      }
      case 'enter': {
        if (p.inCar && p.inCar.def.kind === st.kind) this.advanceStage(ctx);
        break;
      }
      case 'timed': {
        this.stageT -= dt;
        const d = Math.hypot(p.pos.x - st.x, p.pos.z - st.z);
        this.objectiveText = `${st.text} — ${Math.ceil(this.stageT)}s (${Math.round(d)}m)`;
        if (d < 8) {
          this.advanceStage(ctx);
        } else if (this.stageT <= 0) {
          this.failMission(ctx, 'Out of time');
        }
        break;
      }
      case 'lose': {
        this.objectiveText = `${st.text} — wanted ${ctx.police.wanted}★`;
        if (ctx.police.wanted <= 0) this.advanceStage(ctx);
        break;
      }
      case 'kill': {
        if (!this.stageSpawned) {
          this.stageSpawned = true;
          ctx.combat.spawnGang(st.x, st.z, st.count);
        }
        const left = ctx.combat.gangCount();
        this.objectiveText = `${st.text} — ${left} left`;
        if (left <= 0) this.advanceStage(ctx);
        break;
      }
      case 'crack': {
        const d = Math.hypot(p.pos.x - st.x, p.pos.z - st.z);
        if (d < 10) {
          this.stageT -= dt;
          this.objectiveText = `${st.text} — ${Math.ceil(this.stageT)}s`;
          if (this.stageT <= 0) {
            ctx.police.addWanted(2);
            ctx.setMessage('Vault cracked — the alarm is up. Run!');
            this.advanceStage(ctx);
          }
        } else {
          this.objectiveText = `${st.text} (get to the bank)`;
        }
        break;
      }
      case 'boss': {
        if (!this.stageSpawned) {
          this.stageSpawned = true;
          ctx.combat.spawnGang(st.x, st.z, 4, { boss: true });
        }
        const alive = ctx.combat.aliveGang();
        const bossAlive = alive.some((g) => g.isBoss);
        this.objectiveText = bossAlive
          ? `${st.text} — take down Silas Vane`
          : `${st.text} — mop up ${alive.length} Viper(s)`;
        if (!bossAlive && alive.length === 0) this.advanceStage(ctx);
        break;
      }
    }
  }
}
