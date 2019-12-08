"use strict";

const liItems = document.querySelectorAll(".item");
console.log(`В списке ${liItems.length} категории`);

console.log(`Категория: ${liItems[0].firstElementChild.textContent}`);
console.log(
  `Количество элементов ${liItems[0].lastElementChild.children.length}`
);

console.log(`Категория: ${liItems[1].firstElementChild.textContent}`);
console.log(
  `Количество элементов ${liItems[1].lastElementChild.children.length}`
);

console.log(`Категория: ${liItems[2].firstElementChild.textContent}`);
console.log(
  `Количество элементов ${liItems[2].lastElementChild.children.length}`
);
