"use strict";

// const liItems = document.querySelectorAll(".item");
// console.log(`В списке ${liItems.length} категории`);

// console.log(`Категория: ${liItems[0].firstElementChild.textContent}`);
// console.log(
//   `Количество элементов ${liItems[0].lastElementChild.children.length}`
// );

// console.log(`Категория: ${liItems[1].firstElementChild.textContent}`);
// console.log(
//   `Количество элементов ${liItems[1].lastElementChild.children.length}`
// );

// console.log(`Категория: ${liItems[2].firstElementChild.textContent}`);
// console.log(
//   `Количество элементов ${liItems[2].lastElementChild.children.length}`
// );

const categories = document.querySelector('#categories');

const res = categories.children.length;
console.log(`В списке ${res} категории.`);

const str = [...categories.children]
.map(e => `${e.children[0].textContent}: ${e.children[1].children.length}`)
.join('\n');
console.log(str);


console.log(categories);