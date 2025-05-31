// Output on terminal node function
// process.stdout.write("hello ");
// process.stdout.write("world");

// Input on terminal
/*
let prompt = require("prompt-sync")();
let userInput = prompt("Please enter a number: ");
process.stdout.write(userInput);
*/

// Square pattern
let prompt = require("prompt-sync")();
let n = Number(prompt("Please enter a number: "));

// Square pattern
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
  */

// Right angle Triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// Right angle Triangle with counting
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
  */

// Right angle Triangle with alphabatic
/*
for (let i = 1; i <= n; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++;
  }
  console.log();
}
  */

// Inverted Right angle Triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = n; j >= i; j--) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// Mirror Right angle Triangle
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
*/

// X Pattern
/*
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || i + j == n + 1) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}*/

// V Pattern
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i == j || i + j == 2 * n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log();
}
