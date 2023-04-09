import { galleryItems } from './gallery-items.js';


// Change code below this line
const galleryMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
      <a class="gallery__link" href="#" data-src="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
        </a>
      </li>`
  )
  .join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionsDelay: 250,
  });
  

console.log(galleryItems);
