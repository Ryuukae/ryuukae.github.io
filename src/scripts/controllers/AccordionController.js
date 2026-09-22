/**
 * Controller for managing the accordion expanding behavior of repository cards.
 * @author Adam Ross DeStafeno
 * @version 1.0.0
 */
export class AccordionController {
  /**
   * Initializes the AccordionController.
   * @param {string} containerId - The ID of the container element.
   */
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  /**
   * Binds click events to the container for event delegation.
   */
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

  /**
   * Toggles the visibility of a repository card's details.
   * @param {HTMLElement} element - The repository card element.
   */
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
