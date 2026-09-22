import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { HeaderNetwork } from '../../../../src/scripts/canvas/orchestrators/HeaderNetwork.js';

describe('HeaderNetwork', () => {
  let canvas;
  let ctxMock;

  beforeEach(() => {
    // Setup DOM
    document.body.innerHTML = `
      <div style="width: 1000px; height: 500px;">
        <canvas id="header-canvas"></canvas>
      </div>
    `;
    canvas = document.getElementById('header-canvas');

    // Mock getContext
    ctxMock = {
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
      translate: vi.fn(),
      createLinearGradient: vi.fn(() => ({
        addColorStop: vi.fn(),
      })),
    };
    canvas.getContext = vi.fn(() => ctxMock);

    // Mock ResizeObserver
    global.ResizeObserver = class {
      constructor(cb) {
        this.cb = cb;
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    // Mock requestAnimationFrame and cancelAnimationFrame
    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((cb) => setTimeout(() => cb(performance.now()), 16))
    );
    vi.stubGlobal('cancelAnimationFrame', vi.fn(clearTimeout));
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete global.ResizeObserver;
  });

  it('should initialize correctly when canvas is present', () => {
    const network = new HeaderNetwork('header-canvas');
    expect(network.canvas).toBe(canvas);
    expect(network.ctx).toBe(ctxMock);

    network.init();
    expect(network.strand.particles.length).toBeGreaterThan(0);
    expect(network.sphere.nodes.length).toBeGreaterThan(0);
    expect(requestAnimationFrame).toHaveBeenCalled();

    network.destroy();
  });

  it('should gracefully handle missing canvas', () => {
    const network = new HeaderNetwork('missing-canvas');
    expect(network.canvas).toBeNull();
    network.init(); // Should not throw
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });

  it('should handle resize events', () => {
    const network = new HeaderNetwork('header-canvas');
    network.init();

    // Trigger resize
    Object.defineProperty(canvas.parentElement, 'clientWidth', { value: 800 });
    Object.defineProperty(canvas.parentElement, 'clientHeight', { value: 400 });
    window.dispatchEvent(new Event('resize'));

    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(400);

    network.destroy();
  });

  it('should execute animation frame drawing logic', () => {
    const network = new HeaderNetwork('header-canvas');
    network.init();

    // Call animate manually to verify it uses context
    network.animate(performance.now());
    expect(ctxMock.clearRect).toHaveBeenCalled();

    network.destroy();
  });
});
