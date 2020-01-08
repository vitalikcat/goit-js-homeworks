"use strict";

class CountdownTimer {
  constructor({ selector = "", targetDate = "" }) {
    this.timer = document.querySelector(selector);
    this.currentTime = new Date();
    this.time = targetDate - this.currentTime;

    this.refs = {
      spanDays: this.timer.querySelector('span[data-value="days"]'),
      spanHours: this.timer.querySelector('span[data-value="hours"]'),
      spanMinutes: this.timer.querySelector('span[data-value="mins"]'),
      spanSeconds: this.timer.querySelector('span[data-value="secs"]')
    };
    this.start();
  }

  start() {
    this.updateTextContent(this.time);
    setInterval(() => {
      this.time = this.time - 1000;
      this.updateTextContent(this.time);
    }, 1000);
  }

  updateTextContent(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.spanDays.textContent = days;
    this.refs.spanHours.textContent = hours;
    this.refs.spanMinutes.textContent = minutes;
    this.refs.spanSeconds.textContent = seconds;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 11, 2020")
});
