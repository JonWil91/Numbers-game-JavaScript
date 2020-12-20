'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    
    // Reveals secret number
    document.querySelector('.number').textContent = secretNumber;
});
