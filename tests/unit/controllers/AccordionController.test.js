import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { AccordionController } from '../../../src/scripts/controllers/AccordionController.js';

describe('AccordionController', () => {
  let controller;
  let container;
  let repoItem;
  let arrow;
  let imageContainer;

  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = `
      <ul id="repo-list">
        <li class="repo-item">
          <div class="repo-arrow fa-chevron-up"></div>
          <a href="#">Link</a>
          <div class="repo-image-container max-h-0 opacity-0 invisible"></div>
        </li>
      </ul>
    `;

    container = document.getElementById('repo-list');
    repoItem = container.querySelector('.repo-item');
    arrow = container.querySelector('.repo-arrow');
    imageContainer = container.querySelector('.repo-image-container');

    // Mock scrollHeight
    Object.defineProperty(imageContainer, 'scrollHeight', { value: 200, configurable: true });

    controller = new AccordionController('repo-list');
    controller.init();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should toggle details open when a repo item is clicked', () => {
    // Simulate click on the item
    repoItem.click();

    expect(arrow.classList.contains('fa-chevron-down')).toBe(true);
    expect(arrow.classList.contains('fa-chevron-up')).toBe(false);

    expect(imageContainer.classList.contains('open')).toBe(true);
    expect(imageContainer.classList.contains('opacity-100')).toBe(true);
    expect(imageContainer.classList.contains('visible')).toBe(true);
    expect(imageContainer.style.maxHeight).toBe('200px');
  });

  it('should close details if it is already open when clicked', () => {
    // Open it
    repoItem.click();
    expect(imageContainer.classList.contains('open')).toBe(true);

    // Click again to close
    repoItem.click();

    expect(arrow.classList.contains('fa-chevron-up')).toBe(true);
    expect(arrow.classList.contains('fa-chevron-down')).toBe(false);

    expect(imageContainer.classList.contains('open')).toBe(false);
    expect(imageContainer.classList.contains('max-h-0')).toBe(true);
    expect(imageContainer.classList.contains('opacity-0')).toBe(true);
    expect(imageContainer.classList.contains('invisible')).toBe(true);
    expect(imageContainer.style.maxHeight).toBe('0px');
  });

  it('should not toggle if a link inside the repo item is clicked', () => {
    const link = repoItem.querySelector('a');
    link.click();
    expect(imageContainer.classList.contains('open')).toBe(false);
  });

  it('should return early on init if container is missing', () => {
    document.body.innerHTML = '';
    const newController = new AccordionController('missing-id');

    // Should not throw
    expect(() => newController.init()).not.toThrow();
  });

  it('should not trigger toggle if click is outside a repo-item', () => {
    // Click directly on the ul container, not an li
    container.click();
    expect(imageContainer.classList.contains('open')).toBe(false);
  });

  it('should return early from toggleDetails if required elements are missing', () => {
    // Remove the arrow
    arrow.remove();

    // Simulate click
    repoItem.click();

    // Should not throw and should not open
    expect(imageContainer.classList.contains('open')).toBe(false);
  });
});
