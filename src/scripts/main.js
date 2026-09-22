import '../styles/tailwind.css';
import { repositories } from './data/repositories.js';
import { RepoCardFactory } from './ui/RepoCardFactory.js';
import { AccordionController } from './controllers/AccordionController.js';
import { NetworkBackground } from './components/NetworkBackground.js';
import { HeaderNetwork } from './components/HeaderNetwork.js';

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

    // Event Delegation for Image Modal
    listContainer.addEventListener('click', (event) => {
      const imgTarget = event.target.closest('.repo-image-trigger');
      if (imgTarget) {
        const src = imgTarget.getAttribute('data-src');
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');

        if (modal && modalImg && src) {
          try {
            // Sanitize URL to prevent javascript: XSS (CodeQL mitigation)
            const safeUrl = new URL(src, window.location.href);
            if (safeUrl.protocol === 'http:' || safeUrl.protocol === 'https:') {
              // codeql[js/xss-through-dom] - URL protocol is strictly validated above
              modalImg.src = safeUrl.href;
              modal.classList.remove('opacity-0', 'invisible');
            }
          } catch (e) {
            console.warn('Invalid image URL:', src, e);
          }
        }
      }
    });
  }

  // Initialize Controllers
  const accordionController = new AccordionController('repo-list-container');
  accordionController.init();

  // Setup Image Modal Closing
  const closeModal = () => {
    const modal = document.getElementById('image-modal');
    if (modal) {
      modal.classList.add('opacity-0', 'invisible');
    }
  };

  document.querySelectorAll('.modal-close').forEach((el) => {
    el.addEventListener('click', closeModal);
  });

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
