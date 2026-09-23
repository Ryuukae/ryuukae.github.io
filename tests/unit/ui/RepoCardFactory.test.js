import { describe, it, expect } from 'vitest';
import { RepoCardFactory } from '../../../src/scripts/ui/RepoCardFactory.js';

describe('RepoCardFactory', () => {
  const mockRepo = {
    id: 'test-repo',
    title: 'Test Repo',
    description: 'A test repository',
    liveUrl: 'https://example.com/pages',
    githubUrl: 'https://example.com/repo',
    image: 'test-image.png',
    imageAlt: 'Test Image Alt',
  };

  it('should create an li element with correct class names and dataset', () => {
    const card = RepoCardFactory.createCard(mockRepo);
    expect(card.tagName.toLowerCase()).toBe('li');
    expect(card.className).toContain('repo-item');
    expect(card.className).toContain('fade-in');
    expect(card.dataset.repoId).toBe('test-repo');
  });

  it('should populate the repository title and description correctly', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const nameEl = card.querySelector('.repo-name');
    expect(nameEl).not.toBeNull();
    expect(nameEl.textContent).toBe('Test Repo');

    const descEl = card.querySelector('.repo-description');
    expect(descEl).not.toBeNull();
    expect(descEl.textContent.trim()).toBe('A test repository');
  });

  it('should generate correct links for live site and repository', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const links = card.querySelectorAll('a');
    expect(links.length).toBe(2);

    expect(links[0].href).toBe('https://example.com/pages');
    expect(links[0].textContent).toContain('Visit Site');

    expect(links[1].href).toBe('https://example.com/repo');
    expect(links[1].textContent).toContain('Repository');
  });

  it('should include the image with correct src, data-src, alt, and trigger class', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const img = card.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('test-image.png');
    expect(img.getAttribute('data-src')).toBe('test-image.png');
    expect(img.getAttribute('alt')).toBe('Test Image Alt');
    expect(img.classList.contains('repo-image-trigger')).toBe(true);
  });
});
