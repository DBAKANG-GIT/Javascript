"use strict";

// function describeCountry(country, population, capitalCity) {
//   const OUTPUT = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return OUTPUT;
// }
// const answers = [
//   describeCountry("Nigeria", 214, "Abuja"),
//   describeCountry("United Kingdom", 67.3, "London"),
//   describeCountry("Turkey", 84.78, "Ankara"),
//   describeCountry("Spain", 47.42, "Madrid"),
// ];

// console.log(answers);

// let text = "<ul>";
// answers.forEach(myFunction);
// text += "</ul>";

// // FUnction Declarations
// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }

// console.log(text);

// //Function Declaration
// function calculateAge(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calculateAge(1999);
// console.log(age1);

// // Function Expression
// // The function here is a value and is being held in a variable which now becomes the function name
// // const calcAge2 = function (birthYear) {
// //   return 2023 - birthYear;
// // };

// // // const age2 = calcAge2(2000);

// // // console.log(age1, age2);

// // // Arrow Functions
// // //let func = (arg1, arg2, ..., argN) => expression;
// // const calcAge3 = (birthYear) => 2023 - birthYear;
// // console.log(`The third age is ${calcAge3(2002)}`);

// // //Retirement Age Calculator

// // const yearsRemaining = (age, retirementAge) => retirementAge - age;
// // console.log(`The number of years left to retire is ${yearsRemaining(23, 53)}`);

const worldPopulation = 7900;
// Function Declaration//
// function percentageOfWorld1(country, population) {
//   return (population / worldPopulation) * 100;
// }

// Function Expression
// const calcPercentageOfWorld = function (population) {
//   return (population / worldPopulation) * 100;
// };

// Arrow Function//
const percentageOfWorld = (population) => (population / worldPopulation) * 100;

// Array of Countries//
const countries = [
  { name: "China", population: 1441 },
  { name: "Nigeria", population: 213 },
  { name: "USA", population: 331 },
  { name: "UK", population: 67.3 },
];

let describePopulation = (countryName) => {
  const country = countries.find((c) => c.name === countryName);
  if (country) {
    return `${country.name} has ${
      country.population
    } million people, so it's about ${percentageOfWorld(
      country.population
    ).toFixed(2)}% of the world population`;
  } else {
    return "Country not found";
  }
};

console.log(describePopulation("UK"));
console.log(describePopulation("Nigeria"));
console.log(describePopulation("China"));
console.log(describePopulation("USA"));
console.log(describePopulation("Jamaica"));

const populations = [
  { name: "China", population: 1441 },
  { name: "Nigeria", population: 213 },
  { name: "USA", population: 331 },
  { name: "UK", population: 67.3 },
];

console.log(`Are there 4 elements in the array: ${populations.length === 4}`);
const percentages = [];
populations.forEach((element) => {
  percentages.push(((element.population / worldPopulation) * 100).toFixed(2));
});

console.log(
  `Here are the percentage of each country in the given array: ${percentages}`
);
