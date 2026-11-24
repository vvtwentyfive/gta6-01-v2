// Neon Harbor — WebAudio: procedural radio + SFX (Builder 3).
//
// Everything is synthesized in code: no audio files, no network, no
// samples. Three radio stations (synthwave / hiphop / jazz) run a small
// step sequencer with a lookahead scheduler; SFX are short oscillator /
// filtered-noise envelopes. The AudioContext is created lazily on the
// first user gesture (unlock) so autoplay policies never throw, and every
// public method is safe to call before unlock — it just no-ops.
import { RADIO_STATIONS } from './config';

type StationGenre = 'synthwave' | 'hiphop' | 'jazz';

const STATION_TEMPO: Record<StationGenre, number> = {
  synthwave: 104,
  hiphop: 92,
  jazz: 132,
};

// 16-step patterns, one bar. Bass is semitone offsets from a root; -1 rest.
const BASS_PATTERNS: Record<StationGenre, number[]> = {
  synthwave: [0, -1, 0, -1, 3, -1, 0, -1, 5, -1, 3, -1, 7, -1, 5, 3],
  hiphop: [0, -1, -1, 0, -1, -1, 0, -1, -1, -1, 5, -1, -1, 3, -1, -1],
  jazz: [0, -1, 7, -1, 5, -1, 3, -1, 0, -1, 10, -1, 7, -1, 5, 3],
};

// Chord stabs: sets of semitone offsets from the root, per 4-step group.
const CHORDS: Record<StationGenre, number[][]> = {
  synthwave: [[0, 3, 7], [0, 3, 7], [-4, 0, 3], [-2, 2, 5]],
  hiphop: [[0, 3, 7], [0, 3, 7], [0, 3, 7], [-2, 3, 8]],
  jazz: [[0, 4, 7, 10], [0, 4, 7, 10], [-4, 0, 3, 7], [-2, 2, 5, 9]],
};

// Root notes (Hz) cycled per bar: Am — F — C — G for synthwave/hiphop,
// Am7 — Dm7 — G7 — Cmaj7 colour via the chord table for jazz.
const ROOTS = [110, 87.31, 130.81, 98];

export class AudioSys {
  muted = false;
  stationName: string = RADIO_STATIONS[0].name;
  private stationIdx = 0;
  private actx: AudioContext | null = null;
  private master: GainNode | null = null;
  private radioGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private engineGain: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private sirenOsc: OscillatorNode | null = null;
  private sirenGain: GainNode | null = null;
  private sirenLfo: OscillatorNode | null = null;
  private noiseBuf: AudioBuffer | null = null;
  private radioOn = false;
  private step = 0;
  private bar = 0;
  private nextStepTime = 0;
  private stepDur = 60 / STATION_TEMPO.synthwave / 4;

  // ---------- lifecycle ----------

  /** Create/resume the context. Called from the first pointer/key gesture. */
  unlock(): void {
    try {
      if (!this.actx) {
        const AC = window.AudioContext
          || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AC) return;
        this.actx = new AC();
        this.master = this.actx.createGain();
        this.master.gain.value = this.muted ? 0 : 0.55;
        this.master.connect(this.actx.destination);
        this.radioGain = this.actx.createGain();
        this.radioGain.gain.value = 0.16;
        this.radioGain.connect(this.master);
        this.sfxGain = this.actx.createGain();
        this.sfxGain.gain.value = 0.5;
        this.sfxGain.connect(this.master);
        this.engineGain = this.actx.createGain();
        this.engineGain.gain.value = 0;
        this.engineGain.connect(this.master);
        // Engine: two detuned saws through a lowpass.
        this.engineFilter = this.actx.createBiquadFilter();
        this.engineFilter.type = 'lowpass';
        this.engineFilter.frequency.value = 420;
        this.engineFilter.connect(this.engineGain);
        this.engineOsc = this.actx.createOscillator();
        this.engineOsc.type = 'sawtooth';
        this.engineOsc.frequency.value = 55;
        this.engineOsc.connect(this.engineFilter);
        this.engineOsc.start();
        this.engineOsc2 = this.actx.createOscillator();
        this.engineOsc2.type = 'sawtooth';
        this.engineOsc2.frequency.value = 82.5;
        this.engineOsc2.connect(this.engineFilter);
        this.engineOsc2.start();
        // Shared 1s white-noise buffer for hats / shots / explosions.
        const len = this.actx.sampleRate;
        this.noiseBuf = this.actx.createBuffer(1, len, this.actx.sampleRate);
        const data = this.noiseBuf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        this.nextStepTime = this.actx.currentTime + 0.1;
      }
      if (this.actx.state === 'suspended') void this.actx.resume();
    } catch {
      // Audio is cosmetic: never let it break the game.
    }
  }

  setMuted(m: boolean): void {
    this.muted = m;
    if (this.master && this.actx) {
      this.master.gain.setTargetAtTime(m ? 0 : 0.55, this.actx.currentTime, 0.05);
    }
  }

  setRadioOn(on: boolean): void {
    this.radioOn = on;
  }

  cycleStation(): string {
    this.stationIdx = (this.stationIdx + 1) % RADIO_STATIONS.length;
    this.stationName = RADIO_STATIONS[this.stationIdx].name;
    const genre = RADIO_STATIONS[this.stationIdx].genre as StationGenre;
    this.stepDur = 60 / STATION_TEMPO[genre] / 4;
    this.uiClick();
    return this.stationName;
  }

  // ---------- engine + siren ----------

  /** Continuous engine hum. ratio 0..1 of top speed; silent on foot. */
  engine(ratio: number, inCar: boolean): void {
    if (!this.actx || !this.engineOsc || !this.engineOsc2 || !this.engineGain || !this.engineFilter) return;
    try {
      const t = this.actx.currentTime;
      const target = inCar ? 0.05 + ratio * 0.075 : 0;
      this.engineGain.gain.setTargetAtTime(target, t, 0.08);
      const f = 48 + ratio * 95;
      this.engineOsc.frequency.setTargetAtTime(f, t, 0.06);
      this.engineOsc2.frequency.setTargetAtTime(f * 1.494, t, 0.06);
      this.engineFilter.frequency.setTargetAtTime(320 + ratio * 1400, t, 0.1);
    } catch { /* cosmetic */ }
  }

  /** Two-tone police siren loop; call with false to stop. */
  siren(on: boolean): void {
    if (!this.actx || !this.master) return;
    try {
      if (on && !this.sirenOsc) {
        this.sirenGain = this.actx.createGain();
        this.sirenGain.gain.value = 0.045;
        this.sirenGain.connect(this.master);
        this.sirenOsc = this.actx.createOscillator();
        this.sirenOsc.type = 'triangle';
        this.sirenOsc.frequency.value = 720;
        this.sirenLfo = this.actx.createOscillator();
        this.sirenLfo.type = 'square';
        this.sirenLfo.frequency.value = 0.55;
        const lfoGain = this.actx.createGain();
        lfoGain.gain.value = 190;
        this.sirenLfo.connect(lfoGain);
        lfoGain.connect(this.sirenOsc.frequency);
        this.sirenOsc.connect(this.sirenGain);
        this.sirenOsc.start();
        this.sirenLfo.start();
      } else if (!on && this.sirenOsc) {
        const osc = this.sirenOsc;
        const lfo = this.sirenLfo;
        const gain = this.sirenGain;
        this.sirenOsc = null;
        this.sirenLfo = null;
        this.sirenGain = null;
        gain?.gain.setTargetAtTime(0, this.actx.currentTime, 0.1);
        window.setTimeout(() => {
          try { osc.stop(); lfo?.stop(); gain?.disconnect(); } catch { /* noop */ }
        }, 400);
      }
    } catch { /* cosmetic */ }
  }

  // ---------- SFX ----------

  private tone(freq: number, at: number, dur: number, type: OscillatorType, gain: number, dest?: AudioNode): void {
    if (!this.actx) return;
    const o = this.actx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const g = this.actx.createGain();
    g.gain.setValueAtTime(gain, at);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    o.connect(g);
    g.connect(dest ?? this.sfxGain ?? this.actx.destination);
    o.start(at);
    o.stop(at + dur + 0.02);
  }

  private noise(at: number, dur: number, filterFreq: number, gain: number, type: BiquadFilterType = 'lowpass'): void {
    if (!this.actx || !this.noiseBuf) return;
    const src = this.actx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const f = this.actx.createBiquadFilter();
    f.type = type;
    f.frequency.value = filterFreq;
    const g = this.actx.createGain();
    g.gain.setValueAtTime(gain, at);
    g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
    src.connect(f);
    f.connect(g);
    g.connect(this.sfxGain ?? this.actx.destination);
    src.start(at);
    src.stop(at + dur + 0.02);
  }

  private now(): number {
    return this.actx ? this.actx.currentTime : 0;
  }

  shot(kind: string): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      if (kind === 'shotgun') {
        this.noise(t, 0.28, 1400, 0.9);
        this.tone(140, t, 0.18, 'square', 0.4);
      } else if (kind === 'smg') {
        this.noise(t, 0.08, 3200, 0.5, 'highpass');
        this.tone(220, t, 0.06, 'square', 0.25);
      } else if (kind === 'grenade') {
        this.tone(90, t, 0.3, 'sine', 0.5);
      } else {
        // pistol / default crack
        this.noise(t, 0.12, 2400, 0.7, 'bandpass');
        this.tone(180, t, 0.09, 'square', 0.3);
      }
    } catch { /* cosmetic */ }
  }

  melee(): void {
    if (!this.actx || this.muted) return;
    try { this.noise(this.now(), 0.09, 900, 0.4); } catch { /* cosmetic */ }
  }

  horn(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.tone(370, t, 0.32, 'square', 0.16);
      this.tone(466, t, 0.32, 'square', 0.16);
    } catch { /* cosmetic */ }
  }

  reload(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.tone(1200, t, 0.04, 'square', 0.2);
      this.tone(800, t + 0.12, 0.04, 'square', 0.2);
    } catch { /* cosmetic */ }
  }

  pickup(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.tone(660, t, 0.09, 'sine', 0.3);
      this.tone(880, t + 0.08, 0.09, 'sine', 0.3);
      this.tone(1320, t + 0.16, 0.14, 'sine', 0.3);
    } catch { /* cosmetic */ }
  }

  explosion(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.noise(t, 0.9, 320, 1.0);
      this.tone(55, t, 0.7, 'sine', 0.7);
    } catch { /* cosmetic */ }
  }

  wasted(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      const seq = [392, 311, 233, 175];
      seq.forEach((f, i) => this.tone(f, t + i * 0.22, 0.3, 'triangle', 0.35));
    } catch { /* cosmetic */ }
  }

  busted(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.tone(220, t, 0.25, 'square', 0.25);
      this.tone(220, t + 0.3, 0.4, 'square', 0.25);
    } catch { /* cosmetic */ }
  }

  missionComplete(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      [523, 659, 784, 1047].forEach((f, i) => this.tone(f, t + i * 0.1, 0.22, 'triangle', 0.3));
    } catch { /* cosmetic */ }
  }

  missionFail(): void {
    if (!this.actx || this.muted) return;
    try {
      const t = this.now();
      this.tone(311, t, 0.25, 'triangle', 0.3);
      this.tone(233, t + 0.22, 0.4, 'triangle', 0.3);
    } catch { /* cosmetic */ }
  }

  uiClick(): void {
    if (!this.actx || this.muted) return;
    try { this.tone(950, this.now(), 0.05, 'square', 0.14); } catch { /* cosmetic */ }
  }

  // ---------- radio sequencer ----------

  update(_dt: number): void {
    if (!this.actx || !this.radioGain || !this.radioOn || this.muted) return;
    try {
      const genre = RADIO_STATIONS[this.stationIdx].genre as StationGenre;
      const horizon = this.actx.currentTime + 0.25;
      while (this.nextStepTime < horizon) {
        this.scheduleStep(genre, this.step, this.bar, this.nextStepTime);
        this.nextStepTime += this.stepDur;
        this.step = (this.step + 1) % 16;
        if (this.step === 0) this.bar = (this.bar + 1) % ROOTS.length;
      }
    } catch { /* cosmetic */ }
  }

  private scheduleStep(genre: StationGenre, step: number, bar: number, at: number): void {
    if (!this.actx || !this.radioGain) return;
    const root = ROOTS[bar];
    const semi = (n: number): number => root * Math.pow(2, n / 12);
    // Bass on pattern steps.
    const b = BASS_PATTERNS[genre][step];
    if (b >= 0) {
      this.tone(semi(b), at, this.stepDur * 1.8, genre === 'jazz' ? 'sine' : 'sawtooth', 0.5, this.radioGain);
    }
    // Chord stab at the top of each 4-step group.
    if (step % 4 === 0) {
      const chord = CHORDS[genre][(step / 4) | 0];
      for (const n of chord) {
        this.tone(semi(n) * 2, at, this.stepDur * 3.2, 'triangle', 0.12, this.radioGain);
      }
    }
    // Drums: kick on 0/8 (synthwave 0/4/8/12), hat every other step.
    const kickSteps = genre === 'synthwave' ? [0, 4, 8, 12] : genre === 'hiphop' ? [0, 7, 8] : [0, 8];
    if (kickSteps.includes(step)) {
      this.tone(120, at, 0.12, 'sine', 0.8, this.radioGain);
    }
    if (step % 2 === 0) {
      this.noise(at, 0.03, 8000, 0.1, 'highpass');
    }
    // Synthwave lead arp on off-beats.
    if (genre === 'synthwave' && step % 2 === 1) {
      const arp = [0, 3, 7, 12, 7, 3];
      this.tone(semi(arp[(step / 2) | 0] ?? 0) * 4, at, this.stepDur * 0.9, 'square', 0.05, this.radioGain);
    }
  }
}
