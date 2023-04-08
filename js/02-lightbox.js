import { galleryItems } from './gallery-items.js'
// Change code below this line
const galleryMarkup = galleryItems
.map(
item =>
`<li class="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-caption="${item.description}" /> </a> </li>`
)
.join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
captions: true,
captionDelay: 250,
});

console.log(galleryItems);