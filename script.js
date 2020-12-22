'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // If guess is outside of 1 - 20 parameters
    if (guess > 20 || guess < 1) {
        displayMessage('Number must be between 1 and 20 ❗️');
    }

    // When player wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number! 💥');

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

    // When guess is wrong
    else if (guess != secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                displayMessage('Too High! 📈');
            } else {
                displayMessage('Too Low! 📉');
            }
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game! 😭');
            document.querySelector('.again').classList.add('.again-post-game');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#f5f5dc';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.again').classList.remove('again-post-game')
})