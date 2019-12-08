"use strict";

const ul = document.querySelector("#ingredients");

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

function createLiItem(ingredient) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
}

const liArray = ingredients.map(ingr => createLiItem(ingr));

const fragment = document.createDocumentFragment();
liArray.forEach(li => fragment.appendChild(li));
ul.appendChild(fragment);

console.log(ul);
