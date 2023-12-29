let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame === true) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
} else {
  end();
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Number was ${randomNumber}`);
      end();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Right Guess');
    end();
  } else if (guess > randomNumber) {
    displayMessage('Guess is too high');
  } else if (guess < randomNumber) {
    displayMessage('Guess is too low');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  remaining.innerHTML = `${10 - numGuess}`;
  numGuess = numGuess + 1;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function end() {
  userInput.value = '';
  userInput.setAttribute('disabled', true);
  const b = document.createElement("BUTTON")
  b.innerHTML = '<h2>Start New Game</h2>';
  startOver.appendChild(b);
  playGame = false;
  newGame();
}

function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess = 0
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${10 - numGuess}`;
  userInput.setAttribute('disabled', false);
  playGame=true
}
