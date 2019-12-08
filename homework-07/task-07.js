"use strict";

const tagSpan = document.querySelector("span#text");
const tagInput = document.querySelector("input#font-size-control");

const handleInput = event => {
  const size = String(tagInput.value);
  tagSpan.style.fontSize = size + "px";
};

tagInput.addEventListener("input", handleInput);
