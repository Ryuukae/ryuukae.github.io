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
    window.addEventListener('scroll', function () {
        toggleStickyScroll();
    });
})


