'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';

    // When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🍾🍾 Correct guess';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When player's number is  higher than guess
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👸🏼 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👅 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When player's number is lower than guess
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👅 You lost the game';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = ' ';
});
