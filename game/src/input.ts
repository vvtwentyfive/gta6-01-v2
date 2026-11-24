// Keyboard + mouse input state for Neon Harbor.
//
// What this file owns:
//   Input   tracks the pressed key set (WASD/arrows, Shift sprint, Space,
//           action keys), pointer-drag camera deltas, and the hold-to-fire
//           flag. main.ts reads axes from here; Builders 2-3 read the same
//           instance for car controls, weapon switching and menu keys.
//
// Rules: keydown repeats are ignored for edge actions; blur clears the
// key set so a stuck key can never drive the player after tab-switch;
// dragging the pointer orbits the camera, a click without a drag fires.
export interface InputCallbacks {
  onUnlockAudio?: () => void;
  onDebugToggle?: () => void;
  onEnterTitle?: () => void;
  onPauseToggle?: () => void;
  onMapToggle?: () => void;
  onAction?: (code: string) => void;
}

export class Input {
  private keys = new Set<string>();
  private dragging = false;
  private dragMoved = false;
  private shooting = false;
  private lastMX = 0;
  private lastMY = 0;
  /** Accumulated pointer-drag deltas since the last consumeDrag(). */
  private dragDX = 0;
  private dragDY = 0;

  constructor(private canvas: HTMLCanvasElement, private cb: InputCallbacks = {}) {}

  attach(): void {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    this.canvas.addEventListener('pointerdown', (e) => {
      this.cb.onUnlockAudio?.();
      this.dragging = true;
      this.dragMoved = false;
      this.shooting = true;
      this.lastMX = e.clientX;
      this.lastMY = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.lastMX;
      const dy = e.clientY - this.lastMY;
      if (Math.abs(e.clientX - this.lastMX) + Math.abs(e.clientY - this.lastMY) > 6) {
        this.dragMoved = true;
      }
      this.dragDX += dx;
      this.dragDY += dy;
      this.lastMX = e.clientX;
      this.lastMY = e.clientY;
    });
    window.addEventListener('pointerup', () => {
      this.dragging = false;
      this.shooting = false;
    });
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (e.code === 'F3') {
      e.preventDefault();
      this.cb.onDebugToggle?.();
      return;
    }
    this.cb.onUnlockAudio?.();
    this.keys.add(e.code);
    if (e.repeat) return;
    if (e.code === 'Enter') this.cb.onEnterTitle?.();
    else if (e.code === 'Escape' || e.code === 'KeyP') this.cb.onPauseToggle?.();
    else if (e.code === 'KeyM') this.cb.onMapToggle?.();
    else this.cb.onAction?.(e.code);
  }

  has(code: string): boolean {
    return this.keys.has(code);
  }

  /** Forward axis: W/Up = +1, S/Down = -1. */
  get fwd(): number {
    return (this.has('KeyW') || this.has('ArrowUp') ? 1 : 0)
      - (this.has('KeyS') || this.has('ArrowDown') ? 1 : 0);
  }

  /** Strafe axis: D/Right = +1, A/Left = -1. */
  get strafe(): number {
    return (this.has('KeyD') || this.has('ArrowRight') ? 1 : 0)
      - (this.has('KeyA') || this.has('ArrowLeft') ? 1 : 0);
  }

  get sprint(): boolean {
    return this.has('ShiftLeft') || this.has('ShiftRight');
  }

  get jump(): boolean {
    return this.has('Space');
  }

  get handbrake(): boolean {
    return this.has('Space');
  }

  /** True while the pointer is held down without a drag (a click = fire). */
  get firing(): boolean {
    return this.shooting && !this.dragMoved;
  }

  get isDragging(): boolean {
    return this.dragging;
  }

  /** Take the accumulated drag deltas and reset them to zero. */
  consumeDrag(): { dx: number; dy: number } {
    const out = { dx: this.dragDX, dy: this.dragDY };
    this.dragDX = 0;
    this.dragDY = 0;
    return out;
  }

  clear(): void {
    this.keys.clear();
  }
}
