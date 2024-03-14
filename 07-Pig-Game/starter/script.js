"use strict";
//Selecting Elements

const names = "David";

if (names === "David") {
  console.log(`{names} is a ${job}`);
  const job = "software engineer";
}

// const score0El = document.querySelector("#score--0");
// const score1El = document.querySelector("#score--1");
// const current0El = document.querySelector("#current--0");
// const current1El = document.querySelector("#current--1");
// const diceElement = document.querySelector(".dice");
// const btnNewElement = document.querySelector(".btn--new");
// const btnRollElement = document.querySelector(".btn--roll");
// const btnHoldElement = document.querySelector(".btn--hold");
// const player0El = document.querySelector(".player--0");
// const player1El = document.querySelector(".player--1");

// let scores, currentScore, activePlayer, playing; //state variable
// init();

// function init() {
//   // Reset styles and text content
//   scores = [0, 0];
//   currentScore = 0;
//   playing = true; //state variable
//   //Setting both scores to 0 initially
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   activePlayer = 0;
//   diceElement.classList.add("hidden");

//   player0El.classList.remove("player--winner");
//   player1El.classList.remove("player--winner");

//   player0El.classList.add("player--active");
//   player1El.classList.remove("player--active");
// }

// function switchPlayer() {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;

//   player0El.classList.toggle("player--active");
//   player1El.classList.toggle("player--active");
// }

// function endGame() {
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add("player--winner");
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove("player--active");
//   diceElement.classList.add("hidden");

//   playing = false;
// }

// // Add event listeners
// btnRollElement.addEventListener("click", function () {
//   if (playing) {
//     //Generate Random Number between 1 and 6
//     const dice = Math.floor(Math.random() * 6 + 1);
//     console.log(`Random Dice Number ${dice}`);
//     //display dice
//     diceElement.src = `dice-${dice}.png`;
//     diceElement.classList.remove("hidden");

//     //Check if rolled 1, if so switch to next player else add to score
//     if (dice === 1) {
//       //switch player
//       switchPlayer();
//     } else {
//       currentScore = currentScore + dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     }
//   }
// });

// // Add event listeners
// btnHoldElement.addEventListener("click", function () {
//   if (playing) {
//     //add current score to active player score
//     scores[activePlayer] = scores[activePlayer] + currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] >= 100) {
//       endGame();
//     } else switchPlayer();
//   }
// });

// btnNewElement.addEventListener("click", init);
