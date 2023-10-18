// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Enter in degree in celsius: ")), //always returns a string
  };

  console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  console.log(kelvin);
  console.warn(kelvin); //yellow/amber color
  console.error(kelvin); //red color
  return kelvin;
};

measureKelvin();
