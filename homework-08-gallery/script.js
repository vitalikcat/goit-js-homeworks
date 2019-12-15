"use strict";
// Импортировали массив обьектов с gallery-item.js в script.js
import galleryArray from "./gallery-items.js";

// Нашли елемент по селектору js-gallery, записался в переменную gallery
const gallery = document.querySelector(".js-gallery");

// Функция которая создает разметку из массива галереи
// Принимает массив-обьектов галереи, возвращает готовую разметку
const createGalleryItems = function(array) {
  return array.map(el => createGalleryItemMarkup(el)).join("");
};

// Функция которая создает один елемент из массива-обьектов галереи
// Используется в функции которая создат разметку для всей галереи
const createGalleryItemMarkup = function({ preview, original, description }) {
  const itemMarkup = `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
    </li>
    `;
  return itemMarkup;
};

// Вызов функции createGalleryMarkup() записан в переменную finishedGallery
const finishedGallery = createGalleryItems(galleryArray);
// Метод добавляет готовую разметку галереи в DOM елемент ul.js-gallery
gallery.insertAdjacentHTML("afterbegin", finishedGallery);

const container = document.querySelector(".lightbox");
const overlayImage = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__content");
const buttonClose = document.querySelector(
  'button[data-action="close-lightbox"]'
);

gallery.addEventListener("click", handleClickGallery);

function handleClickGallery(event) {
  event.preventDefault();

  const originalImageLink = event.target.dataset.source;
  console.log(originalImageLink);
  container.classList.add("is-open");
  overlayImage.src = originalImageLink;
}

buttonClose.addEventListener("click", handleClickButton);

function handleClickButton(event) {
  container.classList.remove("is-open");
  overlayImage.src = false;
}

overlay.addEventListener("click", handleClickOverlay);

function handleClickOverlay(event) {
  container.classList.remove("is-open");
  overlayImage.src = false;
}
