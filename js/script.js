'use strict';

// Generate a Random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Initial Score
let score = 20;
// Initial High Score
let highScore = 0;
// DRY
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

// =========================================================================================================
// ==================== Start: Create a function whenever the checked button is clicked ====================
// =========================================================================================================

document.querySelector('.check').addEventListener('click', function() {

  // Capture the value of the input and convert it to number
  const guess = Number(document.querySelector('.guess').value);

  // ==============================================================
  // ==================== Start Game Scenarios ====================
  // ==============================================================

  // ==================== 1 - No number is inserted ====================
  if (!guess) {                  
    displayMessage('🚫 No Number!');
  }
  // ==================== 2- The guess is correct ====================
  else if (guess === secretNumber) { 
    displayMessage(' 🎉 Correct Number');
    numberElement.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    // Updating High Score
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore;
    }

  }
  // ==================== 3- The guess is not equal to the secret number ====================
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💔 You Lost The Game');
      scoreElement.textContent = 0;
    }
  }
  // ==============================================================
  // ==================== End Game Scenarios ======================
  // ==============================================================
});
// =========================================================================================================
// ==================== End: Create a function whenever the checked button is clicked ======================
// =========================================================================================================


// ===============================================================================
// ==================== Start: Again button => Reset the game ====================
// ===============================================================================
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  scoreElement.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start Guessing ...');
  numberElement.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
  document.querySelector('.guess').value = '';
})
// =============================================================================
// ==================== End: Again button => Reset the game ====================
// =============================================================================

const newFeature = function() {
  console.log('New Function!');
}

newFeature();