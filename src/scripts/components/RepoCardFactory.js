export class RepoCardFactory {
  static createCard(repo) {
    const li = document.createElement('li');
    // Using Tailwind CSS utility classes moving forward, mixing with custom CSS where necessary for now
    li.className = 'repo-item repo-item-font fade-in relative';

    li.innerHTML = `
      <div class="list-item-container flex items-center justify-between w-full">
          <div>
              <span class="repo-name repo-name-font block max-w-[50%]">${repo.name}</span>
              <p class="repo-description repo-description-font mr-4 indent-2 flex-grow-0">
                  ${repo.description}
              </p>
          </div>
          <div class="repo-links-container flex flex-shrink-0 flex-basis-[30%] gap-5">
              <a href="${repo.pagesLink}" target="_blank" class="flex items-center gap-1">
                  <i class="fas fa-link"></i> GitHub Pages
              </a>
              <a href="${repo.repoLink}" target="_blank" class="flex items-center gap-1">
                  <i class="fab fa-github"></i> GitHub Repository
              </a>
              <i class="fas fa-chevron-up repo-arrow repo-arrow-font cursor-pointer transition-transform duration-500 hover:rotate-180"></i>
          </div>
      </div>
      <div class="repo-image-container overflow-hidden max-h-0 opacity-0 invisible transition-all duration-300 ease-in-out mt-2 rounded-lg bg-[var(--repo-details-background)] shadow-[0_4px_8px_var(--repo-hover-box-shadow)]">
          <img alt="${repo.imageAlt}" src="${repo.imageSrc}" class="w-full h-auto mb-2 border-2 border-[var(--blue-5)] rounded-lg">
      </div>
    `;

    return li;
  }
}
