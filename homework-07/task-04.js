"use strict";

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
let shownResult = document.querySelector("#value");

let counterValue = 0;

const increment = event => {
  counterValue += 1;
  return (shownResult.textContent = counterValue);
};
const decrement = event => {
  counterValue -= 1;
  return (shownResult.textContent = counterValue);
};

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);
