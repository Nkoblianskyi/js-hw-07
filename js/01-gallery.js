import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryLists = document.querySelector('.gallery');
//creation of gallery list

const galleryCreation = galleryItems.map(({ preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </li>`
}).join('');

galleryLists.insertAdjacentHTML('beforeend', galleryCreation);

//creation modal window

galleryLists.addEventListener ('click', (event) => {
    if(event.target.closest('.gallery__link')) {
        event.preventDefault();

        const largeImgUrl = event.target.closest('.gallery__item').querySelector('img').dataset.source;
        const instance = basicLightbox.create(`<img src="${largeImgUrl}" width="800" height="800">`);
    instance.show();
    }
});


//close modal window
document.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
    if(event.code === 'Escape') {
        instance.close();
    }
};