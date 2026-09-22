import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { NetworkBackground } from '../../../../src/scripts/canvas/orchestrators/NetworkBackground.js';

describe('NetworkBackground', () => {
  let canvas;
  let ctxMock;

  beforeEach(() => {
    document.body.innerHTML = `
      <canvas id="network-canvas"></canvas>
      <div class="header-container" style="height: 300px;"></div>
      <button class="spark-btn" style="width: 100px; height: 50px; top: 100px; left: 100px;"></button>
    `;
    canvas = document.getElementById('network-canvas');

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

    vi.stubGlobal(
      'requestAnimationFrame',
      vi.fn((cb) => setTimeout(() => cb(performance.now()), 16))
    );
    vi.stubGlobal('cancelAnimationFrame', vi.fn(clearTimeout));

    // Mock ResizeObserver
    global.ResizeObserver = class {
      constructor(cb) {
        this.cb = cb;
      }
      observe() {}
      disconnect() {}
    };

    // Mock window sizes
    vi.stubGlobal('innerWidth', 1024);
    vi.stubGlobal('innerHeight', 768);
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      value: 2000,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should initialize correctly when canvas is present', () => {
    const network = new NetworkBackground('network-canvas');
    expect(network.canvas).toBe(canvas);

    network.init();
    expect(requestAnimationFrame).toHaveBeenCalled();
    // Use vitest's vi.advanceTimersByTime or just rely on the sync init logic.
    // wait for resizeCanvas timeout

    network.destroy();
  });

  it('should gracefully handle missing canvas', () => {
    const network = new NetworkBackground('missing-canvas');
    network.init();
    expect(requestAnimationFrame).not.toHaveBeenCalled();
  });

  it('should initialize nodes and edges on resizeCanvas', () => {
    const network = new NetworkBackground('network-canvas');
    network.init();

    network.resizeCanvas();
    expect(canvas.width).toBe(1024);
    expect(canvas.height).toBe(768);
    expect(network.constellation.nodes.length).toBeGreaterThan(0);
    expect(network.constellation.edges.length).toBeGreaterThan(0);

    network.destroy();
  });

  it('should handle scroll events', () => {
    const network = new NetworkBackground('network-canvas');
    network.init();

    window.scrollY = 500;
    window.dispatchEvent(new Event('scroll'));
    expect(network.scrollY).toBe(500);

    network.destroy();
  });

  it('should handle hover circuit triggers', () => {
    const network = new NetworkBackground('network-canvas');
    network.init();
    network.resizeCanvas(); // Ensure bounds are set

    const btn = document.querySelector('.spark-btn');
    // Mock getBoundingClientRect
    btn.getBoundingClientRect = () => ({ left: 100, top: 100, width: 100, height: 50 });

    network.triggerHoverCircuit(btn);
    expect(network.circuitTracks.buttonCircuits.has(btn)).toBe(true);

    const bSys = network.circuitTracks.buttonCircuits.get(btn);
    expect(bSys.nodes.length).toBeGreaterThan(0);
    expect(bSys.edges.length).toBeGreaterThan(0);

    network.stopHoverCircuit(btn);
    expect(network.circuitTracks.buttonCircuits.get(btn).fading).toBe(true);

    network.destroy();
  });

  it('should execute animation frame drawing logic and simulate circuit growth', () => {
    const network = new NetworkBackground('network-canvas');
    network.init();
    network.resizeCanvas();

    // Trigger hover circuit to populate buttonCircuits
    const btn = document.querySelector('.spark-btn');
    btn.getBoundingClientRect = () => ({ left: 100, top: 100, width: 100, height: 50 });
    network.triggerHoverCircuit(btn);

    // Simulate many frames to cover pulses, fading, and drawing logic
    for (let i = 0; i < 250; i++) {
      // Allow built-in updatePulses to happen organically
      if (i === 150) {
        network.stopHoverCircuit(btn); // trigger fade
      }
      network.animate(performance.now() + i * 16);
    }

    expect(ctxMock.clearRect).toHaveBeenCalled();
    expect(ctxMock.save).toHaveBeenCalled();
    expect(ctxMock.restore).toHaveBeenCalled();

    network.destroy();
  });
});
