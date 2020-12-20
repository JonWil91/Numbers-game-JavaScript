'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
// Reveals secret number
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});
