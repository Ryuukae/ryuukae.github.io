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

function toggleDetails(element) {
    const repoImage = element.querySelector('.repo-image-container');
    const arrow = element.querySelector('.repo-arrow');

    if (!repoImage.classList.contains('open')) {
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
        repoImage.classList.add('open');
        const maxHeight = repoImage.scrollHeight; // Get numerical value
        console.log("repoImage.scrollHeight:", maxHeight);
        repoImage.style.maxHeight = maxHeight + 'px';
    } else {
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
        repoImage.classList.remove('open');
        repoImage.style.maxHeight = '0';
    }
}


