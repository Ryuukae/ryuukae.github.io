export class HeaderController {
  constructor() {
    this.header = document.querySelector('.header-container');
    this.list = document.querySelector('.list-container');
  }

  init() {
    if (!this.header || !this.list) return;

    window.addEventListener('scroll', () => {
      this.toggleStickyScroll();
    });
  }

  toggleStickyScroll() {
    const sticky = this.list.offsetTop - this.header.offsetHeight;
    if (window.pageYOffset >= sticky) {
      this.header.style.position = 'static';
    } else {
      this.header.style.position = 'sticky';
    }
  }
}
