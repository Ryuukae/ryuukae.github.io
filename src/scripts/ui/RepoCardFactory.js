/**
 * Factory class responsible for generating repository card DOM elements.
 * Constructs the complex inner HTML structure and styling for each card.
 * @author Adam Ross DeStafeno
 * @version 1.1.0
 */
export class RepoCardFactory {
  /**
   * Generates a repository list item containing title, description, and an expanding image view.
   * @param {object} repo - The repository data object.
   * @param {string} repo.id - The unique identifier of the repository.
   * @param {string} repo.title - The title of the repository.
   * @param {string} repo.description - The description of the repository.
   * @param {string} repo.image - The root-relative source path for the image.
   * @param {string} repo.imageAlt - Alternative text for the repository image.
   * @param {string} repo.githubUrl - The URL to the source repository.
   * @param {string} repo.liveUrl - The URL to the live site.
   * @returns {HTMLLIElement} - The fully constructed <li> DOM element representing the card.
   */
  static createCard(repo) {
    const li = document.createElement('li');
    li.className =
      'repo-item repo-item-font fade-in relative bg-black/60 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] cursor-pointer flex flex-col border border-cyan-900/30 hover:border-cyan-900/80 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] hover:-translate-y-2 active:scale-[0.96] transition-all duration-500 ease-in-out overflow-hidden h-fit break-inside-avoid mb-6';

    li.dataset.repoId = repo.id;

    li.innerHTML = `
      <div class="flex flex-col p-6">
          <div class="flex-grow mb-4">
              <span class="repo-name repo-name-font block w-full mb-3 font-bold">${repo.title}</span>
              <p class="repo-description repo-description-font leading-relaxed text-slate-300">
                  ${repo.description}
              </p>
          </div>
          <div class="repo-image-container relative overflow-hidden max-h-0 opacity-0 invisible transition-all duration-300 ease-in-out mt-0 mb-4 w-full bg-black rounded-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
              <div class="relative group">
                  <img alt="${repo.imageAlt}" src="${repo.image}" data-src="${repo.image}" class="w-full h-auto cursor-pointer transition-transform duration-500 group-hover:scale-105 repo-image-trigger" title="Click to enlarge">
                  <!-- Inner shadow overlay for blending and cyber effect -->
                  <div class="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] pointer-events-none transition-opacity duration-500 group-hover:opacity-50"></div>
                  <!-- Hover overlay icon -->
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <i class="fas fa-search-plus text-5xl text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"></i>
                  </div>
              </div>
          </div>
          <div class="repo-links-container flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-[var(--blue-5)]/20 w-full">
              <div class="flex gap-4">
                  <a href="${repo.liveUrl}" target="_blank" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 hover:translate-x-1 hover-pulse-blue hover:underline transition-all duration-300">
                      <i class="fas fa-link"></i> <span class="hidden sm:inline italic">Visit Site</span>
                  </a>
                  <a href="${repo.githubUrl}" target="_blank" class="flex items-center gap-2 text-slate-400 hover:text-cyan-400 hover:translate-x-1 hover-pulse-blue hover:underline transition-all duration-300">
                      <i class="fab fa-github"></i> <span class="hidden sm:inline italic">Repository</span>
                  </a>
              </div>
              <i class="fas fa-chevron-up repo-arrow repo-arrow-font cursor-pointer transition-transform duration-500 hover:scale-125"></i>
          </div>
      </div>
    `;

    return li;
  }
}
