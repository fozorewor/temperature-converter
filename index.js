// Converting to celsius
// C = (F − 32) × 5/9 (-32°F becomes 0°C)
function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

//  Describes the temperature based on Celsius value
function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);
  let description;
  
  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else {
    description = "very hot";
  }

  return `${fahrenheit}°F is ${celsius.toFixed(1)}°C, which feels ${description}.`;
}

// Ask user for temperature in Fahrenheit
let fahrenheit = prompt("Enter a temperature in Fahrenheit:");

// Convert input to a number
fahrenheit = Number(fahrenheit);

// Get description
let result = describeTemperature(fahrenheit);

// Show result
alert(result);
