export class RepoCardFactory {
  static createCard(repo) {
    const li = document.createElement('li');
    // Retaining 'repo-item' class specifically for AccordionController.js click events
    li.className =
      'repo-item repo-item-font fade-in relative bg-[var(--repo-item-background)] rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.3)] cursor-pointer flex flex-col h-full border border-transparent hover:border-[var(--blue-5)]/50 hover:shadow-[0_8px_24px_rgba(82,139,141,0.2)] hover:-translate-y-2 transition-all duration-300';

    li.innerHTML = `
      <div class="flex flex-col h-full p-6">
          <div class="flex-grow mb-6">
              <span class="repo-name repo-name-font block w-full mb-3">${repo.name}</span>
              <p class="repo-description repo-description-font leading-relaxed text-slate-300">
                  ${repo.description}
              </p>
          </div>
          <div class="repo-links-container flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-[var(--blue-5)]/20 w-full">
              <div class="flex gap-4">
                  <a href="${repo.pagesLink}" target="_blank" class="flex items-center gap-2 hover:text-[var(--blue-5)] transition-colors">
                      <i class="fas fa-link"></i> <span class="hidden sm:inline">Pages</span>
                  </a>
                  <a href="${repo.repoLink}" target="_blank" class="flex items-center gap-2 hover:text-[var(--blue-5)] transition-colors">
                      <i class="fab fa-github"></i> <span class="hidden sm:inline">Repo</span>
                  </a>
              </div>
              <i class="fas fa-chevron-up repo-arrow repo-arrow-font cursor-pointer transition-transform duration-500 hover:scale-125"></i>
          </div>
      </div>
      <div class="repo-image-container overflow-hidden max-h-0 opacity-0 invisible transition-all duration-300 ease-in-out mt-0 rounded-b-2xl bg-[var(--repo-details-background)]/80">
          <img alt="${repo.imageAlt}" src="${repo.imageSrc}" class="w-full h-auto mb-2 border-2 border-[var(--blue-5)] rounded-lg">
      </div>
    `;

    return li;
  }
}
