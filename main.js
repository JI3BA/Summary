let offset = 0
<<<<<<< HEAD
=======

>>>>>>> 08326fe68a8da22bdf24ad16e5a2df01582efbff
const galleryList = document.querySelectorAll('.gallery .gallery__list .gallery__image')
const sliderGallery = document.querySelector('.gallery .gallery__list');
const prevBtn = document.querySelector('.btn__prev')
const nextBtn = document.querySelector('.btn__next')
let width

<<<<<<< HEAD
function checkWindowSize() {
=======
// nextBtn.addEventListener('click', () => {
//     const widthImage = document.querySelector('.gallery__image').offsetWidth
//     offset += widthImage
//     if(offset > 3600){
//         offset = 0
//     }
//     galleryList.style.left = -offset + 'px'
// })

// prevBtn.addEventListener('click', () => {
//     const widthImage = document.querySelector('.gallery__image').offsetWidth
//     offset -= widthImage
//     if(offset < 0){
//         offset = 3600
//     }
//     galleryList.style.left = -offset + 'px'
// })

function init() {
>>>>>>> 08326fe68a8da22bdf24ad16e5a2df01582efbff
    width = document.querySelector('.gallery').offsetWidth;
    sliderGallery.style.width = width * galleryList.length + 'px';

    galleryList.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto'
    });

    scrollGallery();
}

<<<<<<< HEAD
checkWindowSize();
=======
init();
>>>>>>> 08326fe68a8da22bdf24ad16e5a2df01582efbff

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

<<<<<<< HEAD
window.addEventListener('resize', checkWindowSize);
=======
window.addEventListener('resize', init);
>>>>>>> 08326fe68a8da22bdf24ad16e5a2df01582efbff

function scrollGallery() {
    sliderGallery.style.transform = 'translate(-' + offset * width + 'px)';
}