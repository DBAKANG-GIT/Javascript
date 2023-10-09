// Values and Variables
// let js = "David";
// if (js === "David") {
//   alert("Hello David");
// }

// let x = 40 + 8 - 3 + 2 / 4;
// // console.log(x);

// let person = "jonas";
// let PI = 3.1415;

// // Data Types
// let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// console.log("Initally it is " + typeof javaScriptIsFun);
// // console.log(typeof "Jonas");
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun); //Print type of data//

// javaScriptIsFun = 123;
// console.log("and then it becomes " + typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2010;
// console.log(typeof year);

// let age = 30;
// age = 31;

// const birthYear = 1999;
// const job = null;

// // Legacy way//
// var jobs = "Programmer";

const job = "Software Engineer";
const birthYear = 1999;
const year = 2023;
const name = "David";
const davidGreeting = `I'm ${name},
I am a ${job} 
and I am ${year - birthYear} years old.`;
// console.log(davidGreeting);

// Type Conversion
const inputYear = "1990";
// console.log(Number(inputYear) + 18);

// Type Coercion
//Javascript has automatic type coercion.

// Truth and Falsy Values
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean("a"));
console.log(Boolean(undefined));
// console.log(Boolean(Null));
// console.log(NAN);

const money = 0;

if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should get a job");
}

let response = Number(prompt("What is your age")); //Getting input from webpage

if (response === 24)
  alert(`You are ${response}!!!`); //sending response to webpage
else {
  alert(`Invalid Entry`);
}

const day = "Monday";

switch (day) {
  case "Monday":
    console.log(`This is ${day}`);
    break;
  case "Tuesday":
    console.log(`This is Tuesday`);
    break;
  case "Wednesday":
    console.log(`This is Wednesday`);
    break;
  default:
    console.log(`None of them are correct`);
    break;
}
