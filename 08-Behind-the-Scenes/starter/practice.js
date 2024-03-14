'use strict';

// Mutating a Primitive Value

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';

console.log(lastName, oldLastName);

//Lets do the same with a reference object

const David = {
  country: 'Nigeria',
  age: 24,
};

console.log(David.age);

const newDavid = David;
newDavid.age = 25;

console.log(David);
