"use strict";

/* Write your code below. Good luck! 🙂 */
// // //let func = (arg1, arg2, ..., argN) => expression;

// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (scoreDolphins, scoreKoalas) => {
//   if (scoreDolphins === scoreKoalas) {
//     console.log(`It's a tie (${scoreDolphins} vs. ${scoreKoalas})`);
//   } else {
//     console.log(
//       `${
//         scoreDolphins > scoreKoalas
//           ? `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`
//           : `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`
//       }`
//     );
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// Arrays
const friends = ["Ashley", "Justice", "Esther"];
console.log(friends);

const jobs = [];
jobs[0] = "Sales Expert";
jobs[1] = "Software Engineer";
jobs[2] = "Medical Expert";

console.log(jobs);

// The array can hold different values
const years = new Array(1999, 1999, "2002", false);
console.log(years);
console.log(years.length);
console.log(years.pop());
console.log(years);

friends.push("Jenilee");
console.log(friends);
