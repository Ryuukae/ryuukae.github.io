/**
 * Controller for managing the header scroll and sticky positioning.
 * @author Adam Ross DeStafeno
 * @version 1.0.0
 */
export class HeaderController {
  /**
   * Initializes the HeaderController and selects DOM elements.
   */
  constructor() {
    this.header = document.querySelector('.header-container');
    this.list = document.querySelector('.list-container');
  }

  /**
   * Binds scroll events to the window to trigger sticky header behavior.
   */
  init() {
    if (!this.header || !this.list) return;

    window.addEventListener('scroll', () => {
      this.toggleStickyScroll();
    });
  }

  /**
   * Toggles the sticky positioning of the header based on scroll depth.
   */
  toggleStickyScroll() {
    const sticky = this.list.offsetTop - this.header.offsetHeight;
    if (window.pageYOffset >= sticky) {
      this.header.style.position = 'static';
    } else {
      this.header.style.position = 'sticky';
    }
  }
}
