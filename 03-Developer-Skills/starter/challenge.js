"use strict";
//let myFunction = (a, b) => a * b;

const printFunction = (arr, startingDate) => {
  for (const element of arr) {
    console.log(`... ${element}°C in ${startingDate} days .`);
    startingDate++;
  }
};

printFunction([17, 21, 23], 1);
printFunction([12, 5, -5, 0, 4], 1);
