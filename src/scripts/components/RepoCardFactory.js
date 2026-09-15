export class RepoCardFactory {
  static createCard(repo) {
    const li = document.createElement('li');
    // Retaining 'repo-item' class specifically for AccordionController.js click events
    li.className =
      'repo-item repo-item-font fade-in relative bg-[var(--repo-item-background)] rounded-lg shadow-[0_2px_4px_var(--repo-box-shadow)] cursor-pointer flex flex-col my-[10px] p-[15px] transition-all duration-200 w-full border-2 border-transparent hover:border-[var(--blue-5)] hover:shadow-[0_4px_8px_var(--repo-hover-box-shadow)] hover:-translate-y-2.5 hover:scale-[1.02]';

    li.innerHTML = `
      <div class="list-item-container flex flex-col items-start md:flex-row md:items-center md:justify-between w-full">
          <div class="w-full md:w-auto md:max-w-[50%] mb-2 md:mb-0">
              <span class="repo-name repo-name-font block w-full">${repo.name}</span>
              <p class="repo-description repo-description-font md:mr-4 indent-2 flex-grow-0">
                  ${repo.description}
              </p>
          </div>
          <div class="repo-links-container flex flex-col items-start gap-3 mt-4 md:mt-0 md:flex-row md:items-center md:flex-shrink-0 md:basis-[30%] md:gap-5 w-full md:w-auto">
              <a href="${repo.pagesLink}" target="_blank" class="flex items-center gap-1">
                  <i class="fas fa-link"></i> GitHub Pages
              </a>
              <a href="${repo.repoLink}" target="_blank" class="flex items-center gap-1">
                  <i class="fab fa-github"></i> GitHub Repository
              </a>
              <i class="fas fa-chevron-up repo-arrow repo-arrow-font cursor-pointer transition-transform duration-500 hover:rotate-180 self-center mt-2 md:mt-0 md:self-auto"></i>
          </div>
      </div>
      <div class="repo-image-container overflow-hidden max-h-0 opacity-0 invisible transition-all duration-300 ease-in-out mt-2 rounded-lg bg-[var(--repo-details-background)] shadow-[0_4px_8px_var(--repo-hover-box-shadow)]">
          <img alt="${repo.imageAlt}" src="${repo.imageSrc}" class="w-full h-auto mb-2 border-2 border-[var(--blue-5)] rounded-lg">
      </div>
    `;

    return li;
  }
}
