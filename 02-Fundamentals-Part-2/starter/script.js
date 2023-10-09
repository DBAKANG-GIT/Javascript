"use strict";

/* Write your code below. Good luck! 🙂 */
// // //let func = (arg1, arg2, ..., argN) => expression;

let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (scoreDolphins, scoreKoalas) => {
  if (scoreDolphins === scoreKoalas) {
    console.log(`It's a tie (${scoreDolphins} vs. ${scoreKoalas})`);
  } else {
    console.log(
      `${
        scoreDolphins > scoreKoalas
          ? `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`
          : `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`
      }`
    );
  }
};

checkWinner(scoreDolphins, scoreKoalas);
