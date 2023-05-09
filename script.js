'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number')
// );
// document.querySelector('.number').textContent = 36;
// document.querySelector('.score').textContent = 26;
// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(displayMassage('please enter a number'));
  } else if (guess === secrectNumber) {
    displayMassage('You Won The Game');
    document.querySelector('.number').textContent = secrectNumber;
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMassage(guess > secrectNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  displayMassage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

// else if (guess > secrectNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'too high';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
// } else if (guess < secrectNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'too low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you have lost the game';
//     document.querySelector('.score').textContent = 0;
//   }
