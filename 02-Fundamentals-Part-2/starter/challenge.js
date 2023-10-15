"use strict";
// Challenge 3

/* Write your code below. Good luck! 🙂 */

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  calcFullName: function () {
    this.fullName = `${this.firstName} ${this.lastName}`;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
  calcFullName: function () {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  },
};
john.calcBMI();
john.calcFullName();
mark.calcBMI();
mark.calcFullName();
const output = `${john.bmi > mark.bmi ? john.fullName : mark.fullName}'s BMI (${
  john.bmi > mark.bmi ? john.bmi : mark.bmi
}) is higher than ${
  john.bmi > mark.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi})`
    : `${john.fullName}'s BMI (${john.bmi})`
}! `;

console.log(output);
