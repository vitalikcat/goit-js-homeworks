"use strict";

const input = document.querySelector("input#validation-input");

const handleBlur = event => {
  input.classList.add("invalid");

  if (input.value.length >= input.dataset.length) {
    input.classList.replace("invalid", "valid");
  }
};

input.addEventListener("blur", handleBlur);
