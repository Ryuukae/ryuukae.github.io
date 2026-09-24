import '../styles/tailwind.css';
import { repositories } from './data/repositories.js';
import { RepoCardFactory } from './ui/RepoCardFactory.js';
import { ModalController } from './controllers/ModalController.js';
import { NetworkBackground } from './canvas/orchestrators/NetworkBackground.js';
import { HeaderNetwork } from './canvas/orchestrators/HeaderNetwork.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cyber-Glass Network Backgrounds
  const networkBackground = new NetworkBackground('network-canvas');
  networkBackground.init();

  const headerNetwork = new HeaderNetwork('header-canvas');
  headerNetwork.init();

  // Render Portfolio Items
  const listContainer = document.getElementById('repo-list-container');
  if (listContainer) {
    repositories.forEach((repo) => {
      const card = RepoCardFactory.createCard(repo);
      listContainer.appendChild(card);
    });

    const modalController = new ModalController(listContainer);
    modalController.init();
  }

  // Dynamic Button Circuit Tracks
  const sparkBtns = document.querySelectorAll('.spark-btn');
  sparkBtns.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      networkBackground.triggerHoverCircuit(btn);
    });

    btn.addEventListener('mouseleave', () => {
      networkBackground.stopHoverCircuit(btn);
    });
  });
});
