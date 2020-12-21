'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // No number input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }

    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 💥';

        // Reveals secret number
        document.querySelector('.number').textContent = secretNumber;
    }

    // When guess is too high
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High';
    }

    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low';
    }

});
