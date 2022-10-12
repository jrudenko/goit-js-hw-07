import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
// galleryContainer.addEventListener('click', onGalleryContainerClick);



function createGalleryItemMarkup(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>
      </div>`;
    })
    .join('');
}



const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});

