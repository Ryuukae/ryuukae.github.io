import { describe, it, expect, beforeEach } from 'vitest';
import { RepoCardFactory } from '../../../src/scripts/components/RepoCardFactory.js';

describe('RepoCardFactory', () => {
  const mockRepo = {
    name: 'Test Repo',
    description: 'A test repository',
    pagesLink: 'https://example.com/pages',
    repoLink: 'https://example.com/repo',
    imageSrc: 'test-image.png',
    imageAlt: 'Test Image Alt',
  };

  it('should create an li element with correct class names', () => {
    const card = RepoCardFactory.createCard(mockRepo);
    expect(card.tagName.toLowerCase()).toBe('li');
    expect(card.className).toContain('repo-item');
    expect(card.className).toContain('fade-in');
  });

  it('should populate the repository name and description correctly', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const nameEl = card.querySelector('.repo-name');
    expect(nameEl).not.toBeNull();
    expect(nameEl.textContent).toBe('Test Repo');

    const descEl = card.querySelector('.repo-description');
    expect(descEl).not.toBeNull();
    expect(descEl.textContent.trim()).toBe('A test repository');
  });

  it('should generate correct links for pages and repo', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const links = card.querySelectorAll('a');
    expect(links.length).toBe(2);

    expect(links[0].href).toBe('https://example.com/pages');
    expect(links[0].textContent).toContain('Pages');

    expect(links[1].href).toBe('https://example.com/repo');
    expect(links[1].textContent).toContain('Repo');
  });

  it('should include the image with correct src and alt', () => {
    const card = RepoCardFactory.createCard(mockRepo);

    const img = card.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('test-image.png');
    expect(img.getAttribute('alt')).toBe('Test Image Alt');
  });
});
