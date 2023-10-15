"use strict";

/* Write your code below. Good luck! 🙂 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
  tips = [],
  totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//let myFunction = (a, b) => a * b;
const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum = sum + element;
  });
  return sum / bills.length;
};

for (const bill of bills) {
  const tip = calcTip(bill);
  tips.push(tip);
  totals.push(tip + bill);
}

console.log(`This is the bills: ${bills}`);
console.log(`This is the tips: ${tips}`);
console.log(`This is the totals: ${totals}`);
console.log(`This is the average amount: ${calcAverage(totals)}`);
