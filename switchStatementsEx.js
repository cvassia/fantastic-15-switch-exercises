// Switch Statements
// Please log all your answers to the console. Remember to add defaults to your switch statements.

// 1. Color Analyzer
// Create a function that takes a string in its parameters. Console log a different statement for each color (red, blue, green, yellow).
// Example: analyzeColor("Red") -> "Red is a primary color".

let color = "orange";
let whatIsTheColor;

switch (color) {
  case "red":
    whatIsTheColor = "Red is the best color";
    break;
  case "green":
    whatIsTheColor = "Green is a secondary color";
    break;
  case "blue":
    whatIsTheColor = "Blue is a primary color";
    break;
  case "yellow":
    whatIsTheColor =
      "Yellow is the color between orange and green on the spectrum of visible light";
    break;
  default:
    whatIsTheColor = "That's a nice color";
}

console.log(whatIsTheColor);

// 2. Grading
// Create a function that takes a grade in its parameters. Console log comments depending on the grade.
// Example: grade("A") -> "Good job!", grade("F") -> "Failed"

let grade = "F";
let result;

switch (grade) {
  case "A":
    result = "Very good job!";
    break;
  case "B":
    result = "Good Job";
    break;
  case "C":
    result = "You could study a little more";
    break;
  case "D":
    result = "Concentrate on studying";
    break;
  case "E":
    result = "Stop watching TV";
    break;
  case "F":
    result = "We have to talk";
}
console.log(result);

// 3. What month is it?
// Create a function using the new Date().getMonth() method and switch case in order to return the month of the year. Return "It's the month of May!"

let WhatIsTheMonth = new Date().getMonth() + 1;
let month;

switch (WhatIsTheMonth) {
  case 1:
    month = "It's the month of January!";
    break;
  case 2:
    month = "It's the month of February!";
    break;
  case 3:
    month = "It's the month of March!";
    break;
  case 4:
    month = "It's the month of April!";
    break;
  case 5:
    month = "It's the month of May!";
    break;
  case 6:
    month = "It's the month of June!";
    break;
  case 7:
    month = "It's the month of July!";
    break;
  case 8:
    month = "It's the month of August!";
    break;
  case 9:
    month = "It's the month of September!";
    break;
  case 10:
    month = "It's the month of October!";
    break;
  case 11:
    month = "It's the month of November!";
    break;
  case 12:
    month = "It's the month of December!";
    break;
}

console.log(month);

// 4. Fruits
// Create a function that takes a string in its parameters. Console log a different statement for each fruit (e.g. banana, orange, strawberry, apple)// Example: fruits("Orange") -> Great choice! An orange is full of vitamin C!"

let fruit = "strawberry";

switch (fruit) {
  case "banana":
    fruit = "Banana is a very sweet fruit";
    break;
  case "apple":
    fruit = "An apple a day keeps the doctor away";
    break;
  case "strawberry":
    fruit = "Strawberry fields for ever";
    break;
  case "orange":
    fruit = "You can use orange to cook delicious cakes";
  default:
    fruit = "That's a very tasty fruit";
}

console.log(fruit);
