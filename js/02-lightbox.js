import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery')

const imagesHTML = galleryItems.map(item => `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
`).join('')

gallery.insertAdjacentHTML('afterbegin', imagesHTML)

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });
