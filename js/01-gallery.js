import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery')

let instance = null

gallery.addEventListener('click', (e) => {
    e.preventDefault()

    instance = basicLightbox.create(`
        <img src=${e.target.dataset.source}>
    `)

    instance.show()
})

gallery.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && instance.visible()) {
        instance.close()
    }
})

const imagesHTML = galleryItems.map(item => `
    <div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </div>
`).join('')

gallery.insertAdjacentHTML('afterbegin', imagesHTML)
