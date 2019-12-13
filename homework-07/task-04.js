"use strict";

const increment = document.querySelector(
  'button[data-action="increment"]'
);
const decrement = document.querySelector(
  'button[data-action="decrement"]'
);
let shownResult = document.querySelector("#value");

let counterValue = 0;

const countIncrement = event => {
  counterValue += 1;
  shownResult.textContent = counterValue;
};
const countDecrement = event => {
  counterValue -= 1;
  shownResult.textContent = counterValue;
};

increment.addEventListener("click", countIncrement);
decrement.addEventListener("click", countDecrement);

