'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageString = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    messageString('No Number inputted');
  } else if (guess === 0 || guess > 20 || guess < 0) {
    messageString('Please Input number between 1 and 20');
  } else if (guess !== number) {
    if (score > 1) {
      messageString(guess > number ? 'Too High' : 'Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageString('You Lost Game');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === number) {
    messageString('Correct Number');
    document.querySelector('.number').textContent = number;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  }

  {
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageString('Start guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  const guess = Number((document.querySelector('.guess').value = null));
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highscore;
});
