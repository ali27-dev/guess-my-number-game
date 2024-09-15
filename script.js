'use strict';

// console.log(document.querySelector('.message').textContent);

// // document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// document.querySelector('.guess').value;
// // document.querySelector('.again').textContent = '';🎉📉💥

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const gusse = Number(document.querySelector('.guess').value);
  console.log(gusse, typeof gusse);

  if (!gusse) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (gusse === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (gusse > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.').textContent = score;
  } else if (gusse < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--;
    document.querySelector('.').textContent = score;
  }
});
