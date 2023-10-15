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
// const friends = ["Ashley", "Justice", "Esther"];
// console.log(friends);

// const jobs = [];
// jobs[0] = "Sales Expert";
// jobs[1] = "Software Engineer";
// jobs[2] = "Medical Expert";

// console.log(jobs);

// // The array can hold different values
// const years = new Array(1999, 1999, "2002", false);
// console.log(years);
// console.log(years.length);
// console.log(years.pop());
// console.log(years);

// friends.push("Jenilee");
// console.log(friends);

/*
length - returns size of array
toString() - converts an array to a string of (comma separated) array values.
pop() - method removes the last element from an array and returns that element to the calling function  
push() - method adds a new element to an array (at the end), 
shift() - method removes the first array element and "shifts" all other elements to a lower index.
unshift - adds elements to the first position in the array
.includes(value) => returns true if the element is in the array

*/

const friends = ["Ashley", "Divine", "Marvin"];
friends.push("Jay");
console.log(friends);
const lengthOfArray = friends.push("Ore");
console.log(lengthOfArray);

friends.unshift("Justice");
console.log(friends);

// Remove Elements
friends.pop(); //Remove last position
console.log();

console.log(
  `This Divine's position in the array: ${friends.indexOf("Divine")}`
);

console.log(`Does the array contain Justice? : ${friends.includes("David")}`);

// ES6 introduced .includes which returns true if the value or element is in the array

friends.push("Joshua");

const davidArray = [
  // For Mpre Structured Data
  "David",
  "Akang",
  2023 - 1999,
  "Software Engineer",
  ["Justice", "Esther", "Deborah"],
  function () {
    return this[0];
  },
];

const david = {
  // For More unstructured data
  firstName: "David",
  lastName: "Akang",
  birthYear: 1999,
  jobTitle: "Software Engineer",
  friends: ["Justice", "Esther", "Deborah"],
  getFirstName: function () {
    return this.firstName;
  },
  getSummary: function () {
    return `${this.firstName} ${this.lastName} was born in ${
      this.birthYear
    }, his job title is a ${
      this.jobTitle
    } and he has the following friends: ${this.friends.toString()}
    Legally is he allowed to drink on a nightout? ${
      2023 - this.birthYear > 18 ? "Yes he is" : "No he is too young"
    }`;
  },
  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   // This refers to the current object that is invoking the function
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    // This refers to the current object that is invoking the function
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
//let func = (arg1, arg2, ..., argN) => expression;

console.log(david.friends);
console.log(david.getFirstName());
david.calcAge();
console.log(david.age);
console.log(david.getSummary());
