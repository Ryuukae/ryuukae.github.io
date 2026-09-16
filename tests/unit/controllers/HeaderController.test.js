import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { HeaderController } from '../../../src/scripts/controllers/HeaderController.js';

describe('HeaderController', () => {
  let controller;
  let header;
  let list;

  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `
      <div class="header-container"></div>
      <div class="list-container"></div>
    `;

    header = document.querySelector('.header-container');
    list = document.querySelector('.list-container');

    // Mock layout properties
    Object.defineProperty(header, 'offsetHeight', { value: 100, configurable: true });
    Object.defineProperty(list, 'offsetTop', { value: 500, configurable: true });

    controller = new HeaderController();
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('should set position to sticky when scrolled above the list threshold', () => {
    // Mock scroll position below threshold (500 - 100 = 400)
    Object.defineProperty(window, 'pageYOffset', { value: 300, configurable: true });

    controller.toggleStickyScroll();

    expect(header.style.position).toBe('sticky');
  });

  it('should set position to static when scrolled past the list threshold', () => {
    // Mock scroll position past threshold (500 - 100 = 400)
    Object.defineProperty(window, 'pageYOffset', { value: 450, configurable: true });

    controller.toggleStickyScroll();

    expect(header.style.position).toBe('static');
  });

  it('should add a scroll event listener on init and trigger toggleStickyScroll', () => {
    const toggleSpy = vi.spyOn(controller, 'toggleStickyScroll');
    controller.init();

    // Dispatch scroll event
    window.dispatchEvent(new Event('scroll'));

    expect(toggleSpy).toHaveBeenCalled();
  });

  it('should return early on init if elements are missing', () => {
    // Remove elements
    document.body.innerHTML = '';
    const newController = new HeaderController();

    const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
    newController.init();

    expect(addEventListenerSpy).not.toHaveBeenCalled();
  });
});
