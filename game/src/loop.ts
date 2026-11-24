// Fixed-timestep main loop for Neon Harbor.
//
// What this file owns:
//   FixedLoop   60 Hz accumulator, decoupled from render: the simulation
//               advances in exact 1/60 s steps (max 5 per frame, the rest
//               is dropped so a hitch can never spiral), rendering happens
//               once per animation frame. Also tracks fps for the HUD and
//               the window.__game snapshot.
//
// main.ts owns the update() and render() callbacks; this file only owns
// the timing. step(n) runs n fixed steps synchronously (test hooks).
export const STEP = 1 / 60;

export interface LoopCallbacks {
  update: (dt: number) => void;
  render: () => void;
}

export class FixedLoop {
  private acc = 0;
  private lastT = 0;
  private frameCount = 0;
  private fpsT = 0;
  private fpsValue = 60;
  private disposed = false;
  private steps = 0;

  constructor(private cb: LoopCallbacks) {}

  start(): void {
    this.lastT = performance.now() / 1000;
    requestAnimationFrame(() => this.tick());
  }

  stop(): void {
    this.disposed = true;
  }

  get fps(): number {
    return this.fpsValue;
  }

  get totalSteps(): number {
    return this.steps;
  }

  /** Advance the simulation n fixed steps synchronously (test hooks). */
  step(n: number): void {
    for (let i = 0; i < n; i++) {
      this.cb.update(STEP);
      this.steps++;
    }
  }

  private tick(): void {
    if (this.disposed) return;
    requestAnimationFrame(() => this.tick());
    const now = performance.now() / 1000;
    let dtReal = now - this.lastT;
    this.lastT = now;
    if (dtReal > 0.25) dtReal = 0.25;
    if (dtReal < 0) dtReal = 0;
    // fps (half-second window)
    this.frameCount++;
    this.fpsT += dtReal;
    if (this.fpsT >= 0.5) {
      this.fpsValue = this.frameCount / this.fpsT;
      this.frameCount = 0;
      this.fpsT = 0;
    }
    this.acc += dtReal;
    let steps = 0;
    while (this.acc >= STEP && steps < 5) {
      this.cb.update(STEP);
      this.steps++;
      this.acc -= STEP;
      steps++;
    }
    if (steps === 5) this.acc = 0;
    this.cb.render();
  }
}
