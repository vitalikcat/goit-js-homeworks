"use strict";

const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

const handleInput = event => {
  const inputText = event.currentTarget.value;
  const condition = inputText === '' ? span.textContent = 'незнакомец' : span.textContent = inputText;
}

input.addEventListener("input", handleInput);
