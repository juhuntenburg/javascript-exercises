const convertToCelsius = (tempF) => Math.round(
  (tempF - 32) * 5/9 * 10
) / 10

const convertToFahrenheit = (tempC) => Math.round(
  (tempC * 9/5 + 32) * 10
) / 10

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};