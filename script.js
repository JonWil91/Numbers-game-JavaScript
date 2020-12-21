'use strict';

// cmnd ctrl space - emoji

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

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

        // Change background colour
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    // When guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lose'
            document.querySelector('.score').textContent = 0;
        }
    }

    // When guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lose'
            document.querySelector('.score').textContent = 0;
        }
    }
});
