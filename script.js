"use strict";

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const numberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("🚫 No Number");

    // When player wins the game
  } else if (guess === secretNumber) {
    displayMessage("🍾🍾 Correct guess");
    displayNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberWidth("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "👸🏼 Too high" : "⬇️ Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "👅 You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  displayNumber("?");
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  numberWidth("15rem");
  document.querySelector(".score").textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = " ";
});
