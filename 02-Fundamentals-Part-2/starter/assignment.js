"use strict";

// // // // function describeCountry(country, population, capitalCity) {
// // // //   const OUTPUT = `${country} has ${population} million people and its capital city is ${capitalCity}`;
// // // //   return OUTPUT;
// // // // }
// // // // const answers = [
// // // //   describeCountry("Nigeria", 214, "Abuja"),
// // // //   describeCountry("United Kingdom", 67.3, "London"),
// // // //   describeCountry("Turkey", 84.78, "Ankara"),
// // // //   describeCountry("Spain", 47.42, "Madrid"),
// // // // ];

// // // // console.log(answers);

// // // // let text = "<ul>";
// // // // answers.forEach(myFunction);
// // // // text += "</ul>";

// // // // // FUnction Declarations
// // // // function myFunction(value) {
// // // //   text += "<li>" + value + "</li>";
// // // // }

// // // // console.log(text);

// // // // //Function Declaration
// // // // function calculateAge(birthYear) {
// // // //   return 2023 - birthYear;
// // // // }

// // // // const age1 = calculateAge(1999);
// // // // console.log(age1);

// // // // // Function Expression
// // // // // The function here is a value and is being held in a variable which now becomes the function name
// // // // // const calcAge2 = function (birthYear) {
// // // // //   return 2023 - birthYear;
// // // // // };

// // // // // // const age2 = calcAge2(2000);

// // // // // // console.log(age1, age2);

// // // // // // Arrow Functions
// // // // // //let func = (arg1, arg2, ..., argN) => expression;
// // // // // const calcAge3 = (birthYear) => 2023 - birthYear;
// // // // // console.log(`The third age is ${calcAge3(2002)}`);

// // // // // //Retirement Age Calculator

// // // // // const yearsRemaining = (age, retirementAge) => retirementAge - age;
// // // // // console.log(`The number of years left to retire is ${yearsRemaining(23, 53)}`);

// // // // Function Declaration//
// // // // function percentageOfWorld1(country, population) {
// // // //   return (population / worldPopulation) * 100;
// // // // }
// // // // // // Arrow Function//
// const percentageOfWorld = (population) => (population / worldPopulation) * 100;

const worldPopulation = 7900;
//Function Expression
const calcPercentageOfWorld = function (population) {
  return (population / worldPopulation) * 100;
};

// Array of Countries//
const countries = [
  { name: "China", population: 1441 },
  { name: "Nigeria", population: 213 },
  { name: "USA", population: 331 },
  { name: "UK", population: 67.3 },
];

const percentages3 = [];

// for (const element of countries) {
//   percentages2.push(((element.population / worldPopulation) * 100).toFixed(2));
// }

let i = 0;
while (i < countries.length) {
  percentages3.push(calcPercentageOfWorld(countries[i].population));
  i++;
}
console.log(percentages3);

// // // // let describePopulation = (countryName) => {
// // // //   const country = countries.find((c) => c.name === countryName);
// // // //   if (country) {
// // // //     return `${country.name} has ${
// // // //       country.population
// // // //     } million people, so it's about ${percentageOfWorld(
// // // //       country.population
// // // //     ).toFixed(2)}% of the world population`;
// // // //   } else {
// // // //     return "Country not found";
// // // //   }
// // // // };

// // // // console.log(describePopulation("UK"));
// // // // console.log(describePopulation("Nigeria"));
// // // // console.log(describePopulation("China"));
// // // // console.log(describePopulation("USA"));
// // // // console.log(describePopulation("Jamaica"));

// // // // const populations = [
// // // //   { name: "China", population: 1441 },
// // // //   { name: "Nigeria", population: 213 },
// // // //   { name: "USA", population: 331 },
// // // //   { name: "UK", population: 67.3 },
// // // // ];

// // // // console.log(`Are there 4 elements in the array: ${populations.length === 4}`);
// const percentages = [];
// countries.forEach((element) => {
//   percentages.push(((element.population / worldPopulation) * 100).toFixed(2));
// });

// console.log(
//   `Here are the percentage of each country in the given array: ${percentages}`
// );

// // // neighbors.push("Utopia");
// // // const removedCountry = neighbors.pop();
// // // if (neighbors.includes("Germany")) {
// // //   console.log("'Probably not a central European country :D");
// // // }

// // // neighbors[neighbors.indexOf("Benin")] = "Benin Republic";
// // // console.log(neighbors);

// // // // // //let func = (arg1, arg2, ..., argN) => expression;
// // // const bills = [125, 555, 44];
// // // const tips = [];
// // // let totals = [];

// // // for (const element of bills) {
// // //   let tip =
// // //     element >= 50 && element <= 300
// // //       ? (15 / 100) * element
// // //       : (20 / 100) * element;
// // //   tips.push(tip);
// // // }

// // // totals = bills.map((bill, index) => bill + tips[index]);

// // // console.log(`This is the tip array: ${tips}`);
// // // console.log(`This is the bill array: ${bills}`);
// // // console.log(`This is the total array: ${totals}`);

// // const myCountry = {
// //   name: "Nigeria",
// //   capital: "Abuja",
// //   language: "English",
// //   population: "214",
// //   neighbors: ["Benin", "Niger", "Chad", "Cameroon"],
// //   noOfStates: 36,
// //   getName: function () {
// //     return `${this.name}`;
// //   },

// //   setName: function (name) {
// //     return (this.name = name);
// //   },

// //   setLanguage: function (language) {
// //     return (this.language = language);
// //   },
// //   describe: function () {
// //     return `The name of my country is ${this.name} and the capital city is ${this.capital}. The main language spoken is ${this.language} and the population of my country is ${this.population} million and there are ${this.noOfStates} states in total`;
// //   },
// //   checkIsland: function () {
// //     this.isIsland = this.neighbors.length === 0;
// //   },
// // };

// // // console.log(myCountry.name); //dot notion - when we do not need to compute the property name
// // // console.log(myCountry["capital"]);

// // // const NameEnding = ".";
// // // console.log(myCountry["name"] + NameEnding); //when we need to compute the property name

// // // const interestedIn = prompt(
// // //   "What do you want to know about Nigeria, choose between Name, Capital, language and Population? "
// // // );

// // // console.log(interestedIn);

// // // if (myCountry[interestedIn]) console.log(myCountry[interestedIn]);
// // // else console.log("Wrong Request");

// // // myCountry.setLanguage("Pidgin");
// // // console.log(myCountry["language"]);
// // // myCountry

// // // Challenge //
// // //The name of my country is Nigeria and the capital is Abuja. The main language spoken is English and the population of my country is 214 mmillion//

// // // console.log(
// // //   `The name of my country is ${myCountry.name} and the capital city is ${myCountry.capital}. The main language spoken is ${myCountry.language} and the population of my country is ${myCountry.population} million and there are ${myCountry.noOfStates} states in total`
// // // );

// // // myCountry.population = Number(myCountry.population) + 2;
// // // console.log(
// // //   `Increasing the population by 2 would be ${myCountry.population} million`
// // // );
// // // myCountry.population = Number(myCountry.population) + 2;
// // // console.log(
// // //   `Increasing the population by 2 would be ${myCountry.population} million`
// // // );
// // console.log(myCountry.describe());
// // myCountry.checkIsland();
// // console.log(
// // //   `${myCountry.name} is ${myCountry.isIsland ? "an" : "not an"} island.`
// // // );

// // for (let index = 1; index <= 50; index++) {
// //   console.log(`Voter Number: ${index} is currently voting`);
// // }

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let x = 0; x < listOfNeighbors.length; x++) {
//   for (let y = 0; y < listOfNeighbors[x].length; y++) {
//     console.log(`neighbor: ${listOfNeighbors[x][y]} `);
//   }
// }
