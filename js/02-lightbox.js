import { galleryItems } from './gallery-items.js';
// Change code below this line

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

document.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox('.gallery a', {
        captionsData: '${description}',
        captionDelay: 250
    });
});