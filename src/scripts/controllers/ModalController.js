import { repositories } from '../data/repositories.js';
import { DefaultModalView } from '../views/DefaultModalView.js';
import { ModalRenderer } from '../renderers/ModalRenderer.js';

/**
 * Orchestrates the interaction between the user, the data, and the modal view.
 * It listens for clicks on repository cards, fetches the correct data, tells
 * the view to build the HTML, and then hands that HTML to the renderer to display.
 * @author Adam Ross DeStafeno
 * @version 1.2.0
 */
export class ModalController {
  /**
   * Sets up the controller with the parent container to listen for delegated clicks.
   * @param {HTMLElement} containerElement - The DOM node containing the repository cards.
   */
  constructor(containerElement) {
    this.container = containerElement;
    this.renderer = new ModalRenderer();

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  /**
   * Starts listening for clicks on the repository list.
   * @public
   */
  init() {
    if (!this.container) return;
    this.container.addEventListener('click', this.handleCardClick);
  }

  /**
   * Intercepts clicks on the container and opens the modal if a card was clicked.
   * @private
   * @param {MouseEvent} event - The click event object.
   */
  handleCardClick(event) {
    // Ignore clicks on hyperlinks so external navigation still works
    if (event.target.closest('a')) return;

    const card = event.target.closest('.repo-item');
    if (!card) return;

    const repoId = card.dataset.repoId;
    if (!repoId) return;

    const repoData = repositories.find((repo) => repo.id === repoId);

    if (repoData) {
      this.openModalForRepo(repoData);
    }
  }

  /**
   * Connects the data to the view and displays the modal on the screen.
   * @private
   * @param {object} repoData - The specific repository data to display.
   */
  openModalForRepo(repoData) {
    const viewInstance = new DefaultModalView(repoData);
    const viewNode = viewInstance.render();

    this.renderer.open(viewNode);

    // Update the URL to allow for deep linking
    const slug = repoData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    history.pushState({ repo: slug }, document.title, `#${slug}`);
  }
}
