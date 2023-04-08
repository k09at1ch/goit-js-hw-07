import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryMarkup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
        </a>
      </li>`,
  )
  .join('');
const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" alt="${e.target.alt}" />
    `);
    instance.show();
  }
});
console.log(galleryItems);
