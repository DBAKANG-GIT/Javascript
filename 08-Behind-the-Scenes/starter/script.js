'use strict';

// console.log(this); // window

// //Regular Function
// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this); // undefined, when not in strict mode this points to window
// };

// calcAge(1991); // 30

// //Arrow Function
// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1980);

// var firstName = 'Basil';

// const David = {
//   firstName: 'David',
//   year: 1999,

//   //Regular Function
//   calcAge: function () {
//     console.log(this); // David Object
//     console.log(2023 - this.year);

//     const isMillenial = function () {
//       console.log(this.year >= 1981 && this.yea <= 1996);
//     };
//     isMillenial();
//   },

//   //Arrow Function

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// David.calcAge();

// David.greet();

// //var creates properties in the global object
// //let and const create properties in the block scope

// // const matilda = {
// //   year: 2017,
// // };

// // matilda.calcAge = David.calcAge;
// // matilda.calcAge();

// // let i = '1';

// //Arrow Function vs Regular Functions

//Primitives vs Objects
//Primitves-Numbers, String, Boolean

let age = 30;

let oldAge = age;
age = 32;

console.log('age', age);
console.log('oldAge', oldAge);

const me = {
  age: 25,
  name: 'David',
};

const friend = me;
friend.age = 29;

console.log('me', me);
console.log('friend', friend);
