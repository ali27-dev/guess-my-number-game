'use strict';

// console.log(document.querySelector('.message').textContent);

// // document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// document.querySelector('.guess').value;
// // document.querySelector('.again').textContent = '';🎉📉💥

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let gusse = Number(document.querySelector('.guess').value);
  console.log(gusse, typeof gusse);
  // when there is no input
  if (!gusse) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
    // when player wins
  } else if (gusse === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // when gusse is too high
  } else if (gusse > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose the game ';
    }
    // when gusse is too low
  } else if (gusse < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game ';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  let score = 20;

  let gusse = Number((document.querySelector('.guess').value = ''));
  console.log(gusse, typeof gusse);

  document.querySelector('.message').textContent = 'Start guessing.....';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score--;
  document.querySelector('.score').textContent = '20';
  // document.querySelector('.gusse').textContent = '';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

// GOOD LUCK 😀*/
