export class AccordionController {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  init() {
    if (!this.container) return;

    // Use event delegation on the container
    this.container.addEventListener('click', (event) => {
      // Find the closest repo-item that was clicked
      const repoItem = event.target.closest('.repo-item');
      if (!repoItem) return;

      // Prevent triggering if a link inside was clicked
      if (event.target.closest('a')) return;

      this.toggleDetails(repoItem);
    });
  }

  toggleDetails(element) {
    const repoImage = element.querySelector('.repo-image-container');
    const arrow = element.querySelector('.repo-arrow');

    if (!repoImage || !arrow) return;

    if (!repoImage.classList.contains('open')) {
      arrow.classList.remove('fa-chevron-up');
      arrow.classList.add('fa-chevron-down');

      repoImage.classList.add('open');
      repoImage.classList.remove('max-h-0', 'opacity-0', 'invisible');
      repoImage.classList.add('opacity-100', 'visible', 'p-5');

      const maxHeight = repoImage.scrollHeight;
      repoImage.style.maxHeight = maxHeight + 'px';
    } else {
      arrow.classList.remove('fa-chevron-down');
      arrow.classList.add('fa-chevron-up');

      repoImage.classList.remove('open', 'opacity-100', 'visible', 'p-5');
      repoImage.classList.add('max-h-0', 'opacity-0', 'invisible');
      repoImage.style.maxHeight = '0';
    }
  }
}
