// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import {createPictureCartMarkup} from './markups.js'

const divRef = document.querySelector(".gallery");
  
const cartMarkup = createPictureCartMarkup(galleryItems);
divRef.insertAdjacentHTML("beforeend", cartMarkup);


// function createPictureCartMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//       <a class="gallery__item" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}" />
//     </a>
//     `;
//     })
//     .join("");
// };

divRef.innerHTML = cartMarkup;
divRef.addEventListener("click", onPictureClick);

function onPictureClick(event) {

  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  
  
}
console.log(galleryItems);
