let offset = 0
const galleryList = document.querySelectorAll('.gallery .gallery__list .gallery__image')
const sliderGallery = document.querySelector('.gallery .gallery__list');
const prevBtn = document.querySelector('.btn__prev')
const nextBtn = document.querySelector('.btn__next')
let width

function checkWindowSize() {
    width = document.querySelector('.gallery').offsetWidth;
    sliderGallery.style.width = width * galleryList.length + 'px';

    galleryList.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto'
    });

    scrollGallery();
}

checkWindowSize();

nextBtn.addEventListener('click', () => {
    offset++;

    if (offset >= galleryList.length) {
        offset = 0;
    }

    scrollGallery();
});

prevBtn.addEventListener('click', () => {
    offset--;

    if (offset < 0) {
        offset = galleryList.length - 1;
    }
    
    scrollGallery();
});

window.addEventListener('resize', checkWindowSize);

function scrollGallery() {
    sliderGallery.style.transform = 'translate(-' + offset * width + 'px)';
}