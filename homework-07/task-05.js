"use strict";

const tagInput = document.querySelector("input#name-input");
const tagSpan = document.querySelector("span#name-output");

const handleInput = event => {
  const inputText = event.currentTarget.value;
  tagSpan.textContent = inputText;

  if (inputText === "") {
    tagSpan.textContent = "незнакомец";
  }
};

tagInput.addEventListener("input", handleInput);
