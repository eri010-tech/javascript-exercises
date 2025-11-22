/* Odin Project's answer: 
const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
}; */

// below is my answer, which I prefer because it requires less steps :) 
const convertToCelsius = function(fahrenheit) {
  let celsiusConversion = (fahrenheit - 32) / 1.8;
  let conversionAnswer = Math.round(celsiusConversion * 10) / 10; 
  return conversionAnswer; 
};

const convertToFahrenheit = function(celsius) {
  let fahrenheitConversion = (celsius * 1.8) + 32; 
  let conversionAnswer = Math.round(fahrenheitConversion * 10) / 10; 
  return conversionAnswer; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
