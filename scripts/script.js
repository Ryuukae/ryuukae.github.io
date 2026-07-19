function toggleStickyScroll() {
    const header = document.querySelector('.header-container');
    const list = document.querySelector('.list-container');
    const sticky = list.offsetTop - header.offsetHeight;
    if (window.pageYOffset >= sticky) {
        header.style.position = 'static';
    } else {
        header.style.position = 'sticky';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const subheader = document.querySelector('.subheader-container');
    const scrollThreshold = 50; // pixels to scroll before collapsing

    window.addEventListener('scroll', function () {
        toggleStickyScroll();

        if (window.scrollY > scrollThreshold) {
            subheader.classList.add('collapsed');
        } else {
            subheader.classList.remove('collapsed');
        }
    });
})


