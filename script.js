'use strict';

// cmnd ctrl space - emoji

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // If guess it outside of 1 - 20 parameters
    if (guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = 'Number must be between 1 and 20';
    }

    // When player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 💥';

        // Reveals secret number
        document.querySelector('.number').textContent = secretNumber;

        // Change background colour
        document.querySelector('body').style.backgroundColor = '#60b347';

        // Widens secret number box
        document.querySelector('.number').style.width = '20rem';

        // Update highscore if it is beaten
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // Promt player to play again
        document.querySelector('.again').classList.add('again-post-game')

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

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#fafafa';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.number').textContent = '?';
})

