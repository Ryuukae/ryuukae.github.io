/**
 * Controls the accordion behavior for the repository items list.
 * Utilizes event delegation on the container for efficient event handling.
 * @author Adam Ross DeStafeno
 * @version 1.0.0
 */
export class AccordionController {
  /**
   * Initializes the controller for a specific container.
   * @param {string} containerId - The DOM ID of the container holding accordion items.
   */
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  /**
   * Attaches event listeners via delegation to handle accordion toggling.
   */
  init() {
    if (!this.container) return;

    // Use event delegation on the container
    this.container.addEventListener('click', (event) => {
      // Find the closest repo-item that was clicked
      const repoItem = event.target.closest('.repo-item');
      if (!repoItem) return;

      // Prevent triggering if a link or image was clicked
      if (event.target.closest('a') || event.target.closest('img')) return;

      this.toggleDetails(repoItem);
    });
  }

  /**
   * Toggles the visibility of the repository details and arrow icon state.
   * @param {HTMLElement} element - The repository item element being toggled.
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
      repoImage.classList.add('opacity-100', 'visible');

      const maxHeight = repoImage.scrollHeight;
      repoImage.style.maxHeight = maxHeight + 'px';
    } else {
      arrow.classList.remove('fa-chevron-down');
      arrow.classList.add('fa-chevron-up');

      repoImage.classList.remove('open', 'opacity-100', 'visible');
      repoImage.classList.add('max-h-0', 'opacity-0', 'invisible');
      repoImage.style.maxHeight = '0';
    }
  }
}
