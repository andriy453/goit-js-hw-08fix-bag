import { galleryItems } from "./gallery-items.js";
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.map((e) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = e.original;
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = e.preview;
  galleryImage.setAttribute("title", e.description);
  galleryImage.alt = e.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

