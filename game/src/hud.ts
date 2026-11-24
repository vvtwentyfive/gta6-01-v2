// Neon Harbor — HUD (Builder 3).
//
// DOM overlay + two canvas maps, all drawn from live game state:
//   health / armor bars, cash, wanted stars, weapon + ammo, objective
//   line, dialogue box, message toast, WASTED/BUSTED banner, a 2D
//   minimap (player, roads, mission waypoint, police, heli) and a
//   full-screen map (M key / ?shot=map) with a GPS route and district
//   labels. The F3 debug overlay lives in main.ts and is untouched.
import { WEAPONS, WORLD, type WeaponKind } from './config';
import { formatClock, formatMoney } from './random';
import type { PlayerLike } from './context';
import type { City } from './city';
import type { Police } from './police';
import type { Missions } from './missions';
import type { Combat } from './combat';
import type { Economy } from './economy';
import type { AudioSys } from './audio';

export interface HudSnap {
  player: PlayerLike;
  police: Police;
  missions: Missions;
  combat: Combat;
  economy: Economy;
  audio: AudioSys;
  city: City;
  state: string;
  timeOfDay: number;
  message: string | null;
  fps: number;
}

const MAP_LABELS = [
  { x: 0, z: -40, label: 'DOWNTOWN' },
  { x: 430, z: 0, label: 'HARBOR' },
  { x: -320, z: 0, label: 'PARK' },
  { x: 0, z: 360, label: 'STADIUM' },
  { x: 560, z: 0, label: 'PIER ISLAND' },
  { x: 80, z: -80, label: 'SPIRE' },
];

export class HUD {
  private root: HTMLDivElement;
  private hpBar: HTMLDivElement;
  private hpFill: HTMLDivElement;
  private armorFill: HTMLDivElement;
  private moneyEl: HTMLDivElement;
  private starsEl: HTMLDivElement;
  private weaponEl: HTMLDivElement;
  private objectiveEl: HTMLDivElement;
  private dialogueEl: HTMLDivElement;
  private toastEl: HTMLDivElement;
  private bannerEl: HTMLDivElement;
  private mapWrap: HTMLDivElement;
  private minimap: HTMLCanvasElement;
  private bigmap: HTMLCanvasElement;
  private promptEl: HTMLDivElement;
  private bannerT = 0;
  private toastT = 0;
  private lastToast = '';

  constructor() {
    const root = document.createElement('div');
    root.id = 'hud';
    root.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:5;'
      + 'font-family:"Segoe UI",system-ui,sans-serif;color:#fff;';
    document.body.appendChild(root);
    this.root = root;

    // Top-left: health + armor + cash + stars.
    const tl = document.createElement('div');
    tl.style.cssText = 'position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:6px;';
    this.hpBar = document.createElement('div');
    this.hpBar.style.cssText = 'width:220px;height:14px;background:rgba(0,0,0,0.55);border:1px solid rgba(255,255,255,0.35);border-radius:3px;overflow:hidden;';
    this.hpFill = document.createElement('div');
    this.hpFill.style.cssText = 'height:100%;width:100%;background:linear-gradient(90deg,#ff4a5a,#ff7a5a);';
    this.hpBar.appendChild(this.hpFill);
    const armorBar = document.createElement('div');
    armorBar.style.cssText = 'width:220px;height:8px;background:rgba(0,0,0,0.55);border:1px solid rgba(255,255,255,0.35);border-radius:3px;overflow:hidden;';
    this.armorFill = document.createElement('div');
    this.armorFill.style.cssText = 'height:100%;width:0%;background:#37a0ff;';
    armorBar.appendChild(this.armorFill);
    this.moneyEl = document.createElement('div');
    this.moneyEl.style.cssText = 'font-size:20px;font-weight:700;text-shadow:0 2px 4px #000;';
    this.starsEl = document.createElement('div');
    this.starsEl.style.cssText = 'font-size:22px;letter-spacing:2px;color:#ffd76b;text-shadow:0 2px 4px #000;';
    tl.append(this.hpBar, armorBar, this.moneyEl, this.starsEl);
    root.appendChild(tl);

    // Top-right: minimap.
    this.mapWrap = document.createElement('div');
    this.mapWrap.style.cssText = 'position:absolute;top:12px;right:12px;';
    this.minimap = document.createElement('canvas');
    this.minimap.width = 200;
    this.minimap.height = 200;
    this.minimap.style.cssText = 'width:200px;height:200px;border:2px solid rgba(255,255,255,0.4);border-radius:4px;background:#0c1420;';
    this.mapWrap.appendChild(this.minimap);
    root.appendChild(this.mapWrap);

    // Bottom-left: objective + dialogue.
    const bl = document.createElement('div');
    bl.style.cssText = 'position:absolute;left:12px;bottom:12px;max-width:460px;display:flex;flex-direction:column;gap:6px;';
    this.objectiveEl = document.createElement('div');
    this.objectiveEl.style.cssText = 'background:rgba(0,0,0,0.55);padding:8px 12px;border-left:4px solid #ffc42a;font-size:15px;border-radius:3px;text-shadow:0 1px 2px #000;';
    this.dialogueEl = document.createElement('div');
    this.dialogueEl.style.cssText = 'background:rgba(10,10,30,0.75);padding:8px 12px;font-size:14px;font-style:italic;border-radius:3px;display:none;';
    bl.append(this.objectiveEl, this.dialogueEl);
    root.appendChild(bl);

    // Bottom-right: weapon + ammo.
    this.weaponEl = document.createElement('div');
    this.weaponEl.style.cssText = 'position:absolute;right:12px;bottom:12px;text-align:right;font-size:18px;font-weight:600;text-shadow:0 2px 4px #000;background:rgba(0,0,0,0.45);padding:6px 12px;border-radius:3px;';
    root.appendChild(this.weaponEl);

    // Center: toast + banner.
    this.toastEl = document.createElement('div');
    this.toastEl.style.cssText = 'position:absolute;top:18%;left:50%;transform:translateX(-50%);font-size:17px;background:rgba(0,0,0,0.6);padding:6px 16px;border-radius:4px;display:none;white-space:nowrap;';
    root.appendChild(this.toastEl);
    this.bannerEl = document.createElement('div');
    this.bannerEl.style.cssText = 'position:absolute;top:38%;left:50%;transform:translate(-50%,-50%);font-size:64px;font-weight:900;letter-spacing:6px;color:#ff4a5a;text-shadow:0 4px 0 #600,0 8px 24px #000;display:none;text-align:center;';
    root.appendChild(this.bannerEl);

    // Full-screen map (M key).
    this.bigmap = document.createElement('canvas');
    this.bigmap.width = 900;
    this.bigmap.height = 900;
    this.bigmap.style.cssText = 'position:absolute;inset:0;margin:auto;width:min(92vmin,900px);height:min(92vmin,900px);border:2px solid rgba(255,255,255,0.5);border-radius:6px;background:#0c1420;display:none;';
    root.appendChild(this.bigmap);

    // Shop prompt (bottom-center).
    this.promptEl = document.createElement('div');
    this.promptEl.style.cssText = 'position:absolute;bottom:64px;left:50%;transform:translateX(-50%);font-size:14px;background:rgba(0,0,0,0.65);padding:5px 12px;border-radius:3px;display:none;';
    root.appendChild(this.promptEl);
  }

  setBanner(text: string | null): void {
    if (text) {
      this.bannerEl.textContent = text;
      this.bannerEl.style.display = 'block';
      this.bannerT = 2.6;
    } else {
      this.bannerEl.style.display = 'none';
      this.bannerT = 0;
    }
  }

  update(dt: number, snap: HudSnap): void {
    const p = snap.player;
    // Bars / cash / stars.
    this.hpFill.style.width = `${Math.max(0, Math.min(100, p.hp))}%`;
    this.armorFill.style.width = `${Math.max(0, Math.min(100, p.armor))}%`;
    this.moneyEl.textContent = `${formatMoney(Math.floor(p.money))}  ·  ${formatClock(snap.timeOfDay)}`;
    const w = snap.police.wanted;
    this.starsEl.textContent = '★'.repeat(w) + '☆'.repeat(5 - w);
    this.starsEl.style.visibility = w > 0 ? 'visible' : 'hidden';

    // Weapon.
    const kind: WeaponKind = p.currentWeapon;
    const ammo = p.ammo();
    const def = WEAPONS[kind];
    const ammoText = def.mag < 0 ? '∞' : `${ammo.ammo} / ${ammo.reserve}`;
    this.weaponEl.textContent = `${def.label}  ${ammoText}${snap.combat.isReloading ? '  — RELOADING' : ''}`;

    // Objective + dialogue.
    const obj = snap.missions.objectiveText
      || (snap.missions.active ? snap.missions.missionName : 'Press N for the next mission · T taxi · C race · M map');
    this.objectiveEl.textContent = obj;
    if (snap.missions.dialogue) {
      this.dialogueEl.style.display = 'block';
      this.dialogueEl.textContent = snap.missions.dialogue;
    } else {
      this.dialogueEl.style.display = 'none';
    }

    // Toast (message survives one frame in main.ts; HUD holds it 3 s).
    if (snap.message && snap.message !== this.lastToast) {
      this.lastToast = snap.message;
      this.toastEl.textContent = snap.message;
      this.toastEl.style.display = 'block';
      this.toastT = 3;
    }
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) this.toastEl.style.display = 'none';
    }
    if (this.bannerT > 0) {
      this.bannerT -= dt;
      if (this.bannerT <= 0) this.bannerEl.style.display = 'none';
    }

    // Shop prompt.
    if (snap.economy.shopPrompt) {
      this.promptEl.textContent = snap.economy.shopPrompt;
      this.promptEl.style.display = 'block';
    } else {
      this.promptEl.style.display = 'none';
    }

    // Maps.
    const showBig = snap.state === 'map';
    this.bigmap.style.display = showBig ? 'block' : 'none';
    this.mapWrap.style.display = showBig ? 'none' : 'block';
    this.root.style.display = snap.state === 'title' ? 'none' : 'block';
    if (snap.state !== 'title') {
      this.drawMap(this.minimap, snap, false);
      if (showBig) this.drawMap(this.bigmap, snap, true);
    }
  }

  private drawMap(canvas: HTMLCanvasElement, snap: HudSnap, big: boolean): void {
    const g = canvas.getContext('2d');
    if (!g) return;
    const S = canvas.width;
    const half = WORLD.half + 120;
    const toX = (x: number): number => ((x + half) / (half * 2)) * S;
    const toY = (z: number): number => ((z + half) / (half * 2)) * S;
    const md = snap.city.mapData;
    g.clearRect(0, 0, S, S);
    // Water + park.
    g.fillStyle = '#0e3a55';
    g.fillRect(toX(md.water.x0), toY(md.water.z0), toX(md.water.x1) - toX(md.water.x0), toY(md.water.z1) - toY(md.water.z0));
    g.fillStyle = '#1d4a24';
    g.fillRect(toX(md.park.x0), toY(md.park.z0), toX(md.park.x1) - toX(md.park.x0), toY(md.park.z1) - toY(md.park.z0));
    // Island.
    g.fillStyle = '#2c3a4a';
    g.fillRect(toX(md.island.x - md.island.half), toY(md.island.z - md.island.half),
      toX(md.island.x + md.island.half) - toX(md.island.x - md.island.half),
      toY(md.island.z + md.island.half) - toY(md.island.z - md.island.half));
    // Blocks.
    for (const b of md.blocks) {
      g.fillStyle = '#232c3d';
      g.fillRect(toX(b.x - b.w / 2), toY(b.z - b.d / 2), (b.w / (half * 2)) * S, (b.d / (half * 2)) * S);
    }
    // Roads.
    g.strokeStyle = '#4a4a58';
    g.lineWidth = big ? 5 : 2;
    for (const r of md.roads) {
      g.beginPath(); g.moveTo(toX(r), toY(-half)); g.lineTo(toX(r), toY(half)); g.stroke();
      g.beginPath(); g.moveTo(toX(-half), toY(r)); g.lineTo(toX(half), toY(r)); g.stroke();
    }
    // Landmarks.
    for (const lm of md.landmarks) {
      g.fillStyle = '#ffc42a';
      g.beginPath();
      g.arc(toX(lm.x), toY(lm.z), big ? 6 : 3, 0, Math.PI * 2);
      g.fill();
    }
    // GPS route: player -> marker (L-shaped via roads).
    const marker = snap.missions.marker;
    const px = snap.player.pos.x;
    const pz = snap.player.pos.z;
    if (marker) {
      g.strokeStyle = '#ffc42a';
      g.lineWidth = big ? 3 : 1.5;
      g.setLineDash([6, 5]);
      g.beginPath();
      g.moveTo(toX(px), toY(pz));
      g.lineTo(toX(marker.x), toY(pz));
      g.lineTo(toX(marker.x), toY(marker.z));
      g.stroke();
      g.setLineDash([]);
      // Waypoint diamond (pulsing).
      const pulse = 4 + Math.sin(Date.now() / 300) * 1.5;
      g.fillStyle = '#ffd76b';
      g.save();
      g.translate(toX(marker.x), toY(marker.z));
      g.rotate(Math.PI / 4);
      g.fillRect(-pulse, -pulse, pulse * 2, pulse * 2);
      g.restore();
    }
    // Police cruisers (blue) + heli (white).
    g.fillStyle = '#37a0ff';
    for (const c of snap.police.policeCars) {
      g.beginPath();
      g.arc(toX(c.v.pos.x), toY(c.v.pos.z), big ? 5 : 2.5, 0, Math.PI * 2);
      g.fill();
    }
    if (snap.police.heliActive) {
      g.fillStyle = '#ffffff';
      g.font = `${big ? 16 : 10}px sans-serif`;
      g.fillText('H', toX(px + 30) - 3, toY(pz - 30));
    }
    // Player arrow (rotated by heading).
    const cx = toX(px);
    const cy = toY(pz);
    g.save();
    g.translate(cx, cy);
    // Arrow drawn pointing up; canvas y is down, so rotate by π − heading.
    g.rotate(Math.PI - snap.player.heading);
    g.fillStyle = snap.player.inCar ? '#37e6ff' : '#ffffff';
    g.beginPath();
    g.moveTo(0, big ? -9 : -7);
    g.lineTo(big ? 6 : 5, big ? 7 : 5);
    g.lineTo(0, big ? 3 : 2);
    g.lineTo(big ? -6 : -5, big ? 7 : 5);
    g.closePath();
    g.fill();
    g.restore();

    if (big) {
      // District labels + legend.
      g.font = 'bold 15px sans-serif';
      g.fillStyle = 'rgba(255,255,255,0.85)';
      g.textAlign = 'center';
      for (const l of MAP_LABELS) {
        g.fillText(l.label, toX(l.x), toY(l.z));
      }
      g.textAlign = 'left';
      g.font = '13px sans-serif';
      g.fillStyle = '#ffc42a';
      g.fillText('◆ Mission waypoint', 16, S - 52);
      g.fillStyle = '#37a0ff';
      g.fillText('● Police', 16, S - 32);
      g.fillStyle = '#ffffff';
      g.fillText('▲ You', 16, S - 12);
      g.fillStyle = 'rgba(255,255,255,0.85)';
      g.font = 'bold 20px sans-serif';
      g.fillText(`NEON HARBOR — ${formatClock(snap.timeOfDay)}`, 16, 30);
    }
  }
}
