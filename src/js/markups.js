export function createPictureCartMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
      })
      .join("");
  };

  