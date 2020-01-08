"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const start = document.querySelector('button[data-action="start"]');
const stop = document.querySelector('button[data-action="stop"]');

const colorTimer = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const body = document.querySelector("body");
      const randomColor = colors[`${randomIntegerFromInterval(0, 5)}`];
      const bodyColor = (body.style.backgroundColor = randomColor);

      console.log(bodyColor);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    console.log("Stopped");
    this.isActive = false;
  }
};

start.addEventListener("click", colorTimer.start.bind(colorTimer));
stop.addEventListener("click", colorTimer.stop.bind(colorTimer));
