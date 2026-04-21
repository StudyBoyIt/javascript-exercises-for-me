const convertToCelsius = function(fahren) {
  let calc = (fahren - 32) / 1.8
  let rounded = Number((calc).toFixed(1))
  return rounded
};

const convertToFahrenheit = function(celsius) {
  let calc = (celsius * 1.8) + 32
  let rounded = Number((calc).toFixed(1))
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
