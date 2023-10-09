// //LECTURE: Values and Variables

// Creating Variables
const COUNTRY = "Singapore";
const CONTINENT = "Asia";
let population = 5; //in millions

// // Creating Array
// const countryDetails = [COUNTRY, CONTINENT, population];
// for (i = 0; i <= countryDetails.length; i++) {
//   console.log(countryDetails[i]);
// }

// Data Types
let isIsland = false;
const language = "Mandarin";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof COUNTRY);
console.log(typeof language);

// Basic Operators
eachHalf = population / 2;
population = population++;
console.log(population);

let finlandPopulation = 6000000;
if (finlandPopulation > population) {
  console.log("Finland has more residents");
} else {
  console.log(`${COUNTRY} has more residents`);
}

averagePopulation = 33;
if (averagePopulation > population) {
  console.log("My Country has less people than the average country");
} else {
  console.log("My Country has more people than the average country");
}

let description =
  COUNTRY +
  " is in " +
  CONTINENT +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description);

// Template Literals//
description = `${COUNTRY} is in ${CONTINENT},
and its ${population} million people speak ${language}.`;

console.log(description);

if (population > averagePopulation) {
  console.log(`${COUNTRY}'s population is above average`);
} else {
  console.log(
    `${COUNTRY}'s population is ${
      (averagePopulation - population) / 2
    } million below average`
  );
}

// Equality Operators
// const numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );

// if (numNeighbors === 1) console.log("Only 1 border!'");
// else if (numNeighbors > 1) console.log("More than 1 border");
// else console.log("No borders");

// Logical Operators//
if (language === "English" && population <= 50 && !isIsland)
  console.log(`You should live in ${COUNTRY}`);
else console.log(`${COUNTRY} does not meet your criteria :(`);

// Switch Statement
switch (language) {
  case "Chinese":
    console.log(`MOST number of native speakers!`);
    break;
  case "Mandarin":
    console.log(`MOST number of native speakers!`);
    break;
  case "Spanish":
    console.log(`2nd place in number of native speakers`);
    break;
  case "English":
    console.log(`3rd place`);
    break;
  case "Hindi":
    console.log(`'Number 4`);
    break;
  case "Arabic":
    console.log(`'5th most spoken language`);
    break;
  default:
    console.log(`'Great language too :D`);
    break;
}

// Ternary Operator//
population > 33
  ? console.log(`${COUNTRY}'s population is above average`)
  : console.log(`${COUNTRY}'s population is below average`);

console.log(
  `${COUNTRY}'s population is ${population > 33 ? "above" : "below"} average`
);
