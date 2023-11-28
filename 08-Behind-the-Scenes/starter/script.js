'use strict';

console.log(this); // window

//Regular Function
const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  console.log(this); // undefined, when not in strict mode this points to window
}

calcAge(1991);  // 30

//Arrow Function
const calcAgeArrow =  (birthYear) => {
    console.log(2021 - birthYear);
    console.log(this); 
  }

  calcAgeArrow(1980)

const David = {
    year: 1999,
    calcAge: function () {
        console.log(this); // David Object
        console.log(2023 - this.year);
    }
}

David.calcAge()

const matilda = {
    year: 2017,

};

matilda.calcAge = David.calcAge;
matilda.calcAge()
