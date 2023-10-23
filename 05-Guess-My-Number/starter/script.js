"use strict";

// Get initial data from DOM
let score = Number(document.querySelector(".score").textContent);
let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(`This is the secret Number: ${secretNumber}`);
console.log(`This is the score: ${score}`);
let highScore = 0;

// Define utility functions
function reduceScore() {
  score--;
  document.querySelector(".score").textContent = score;
}

function lostGame() {
  document.querySelector(".message").textContent = "💥 You lost the game";
  document.querySelector(".score").textContent = "0";
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function wonGame(guess) {
  highScore = score > highScore ? score : highScore;
  console.log(`This is the highscore ${highScore}`);
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".number").textContent = guess;
  document.querySelector(".message").textContent = "🎊 Correct Number!";
  // Changing Styles
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
}

// Add event listeners
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNumber) {
    wonGame(guess);
  } else if (guess !== secretNumber) {
    const message = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    if (score > 1) {
      displayMessage(message);
      reduceScore();
    } else {
      lostGame();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // Reset game data
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(`This is the secret Number: ${secretNumber}`);

  // Reset styles and text content
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
