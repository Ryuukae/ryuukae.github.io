import { repositories } from './data/repositories.js';
import { RepoCardFactory } from './components/RepoCardFactory.js';
import { HeaderController } from './controllers/HeaderController.js';
import { AccordionController } from './controllers/AccordionController.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Portfolio Items
  const listContainer = document.getElementById('repo-list-container');
  if (listContainer) {
    repositories.forEach((repo) => {
      const card = RepoCardFactory.createCard(repo);
      listContainer.appendChild(card);
    });
  }

  // 2. Initialize Controllers
  const headerController = new HeaderController();
  headerController.init();

  const accordionController = new AccordionController('repo-list-container');
  accordionController.init();
});
