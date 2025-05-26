// Undestanding Conditionals
// Ternary Operator
/*
112 > 13 ? console.log("This is true") : console.log("This is false");
console.log(112 > 13 ? "This is true" : "This is false");
*/

// Nested Ternary Operator
/*
let num = 0;
console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");
*/

// Switch Case
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log(invalid);
}

// Fall Through -- Switch
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// Multiple Cases same output
switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("Weekday");
    break;
  case 4:
  case 5:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// Questions Prombles
// Validate a Voter
/*
let age = Number(prompt("Enter your age: "));
if (isNaN(age)) {
  console.log("Please enter a valid number for age.");
} else if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}
*/

// Shop discount -- Range
/*
let amount = Number(prompt("Enter the amount of your purchase: "));
let discount = 0;
if (isNaN(amount)) {
  console.log("Please enter a valid number for the amount.");
} else if (amount > 0 && amount <= 5000) {
  discount = 0;
} else if (amount > 5000 && amount <= 7000) {
  discount = 5;
} else if (amount > 7000 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 20;
}
const discountAmount = Math.floor((amount * discount) / 100);
console.log(
  `Your total amount after ${discount}% discount is: ` +
    (amount - discountAmount)
);
*/

// Bijli Bill
/*
let units = Number(prompt("Enter the number of units consumed: "));
let bill = 0;
if (units > 400) {
  bill = (units - 400) * 45;
  units = 400;
}
if (units > 200 && units <= 400) {
  bill += (units - 200) * 35;
  units = 200;
}
if (units > 100 && units <= 200) {
  bill += (units - 100) * 18;
  units = 100;
}
bill += units * 8.7;
console.log(`Your total bill is: ${bill.toFixed(0)}`);
*/

// Currency Domination
/*
let amount = Number(prompt("Enter the amount in PKR: "));
if (amount >= 5000) {
  console.log(Math.floor(amount / 5000) + " notes of 5000");
  amount %= 5000;
}
if (amount >= 1000) {
  console.log(Math.floor(amount / 1000) + " notes of 1000");
  amount %= 1000;
}
if (amount >= 500) {
  console.log(Math.floor(amount / 500) + " notes of 500");
  amount %= 500;
}
if (amount >= 200) {
  console.log(Math.floor(amount / 200) + " notes of 200");
  amount %= 200;
}
if (amount >= 100) {
  console.log(Math.floor(amount / 100) + " notes of 100");
  amount %= 100;
}
if (amount >= 75) {
  console.log(Math.floor(amount / 75) + " notes of 75");
  amount %= 75;
}
if (amount >= 50) {
  console.log(Math.floor(amount / 50) + " notes of 50");
  amount %= 50;
}
if (amount >= 20) {
  console.log(Math.floor(amount / 20) + " notes of 20");
  amount %= 20;
}
if (amount >= 10) {
  console.log(Math.floor(amount / 10) + " notes of 10");
  amount %= 10;
}
if (amount >= 5) {
  console.log(Math.floor(amount / 5) + " coins of 5");
  amount %= 5;
}
if (amount >= 2) {
  console.log(Math.floor(amount / 2) + " coins of 2");
  amount %= 2;
}
if (amount === 1) {
  console.log(Math.floor(amount / 1) + " coins of 1");
}
*/
