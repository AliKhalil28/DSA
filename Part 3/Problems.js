// For Loop Quetions

// Q1 -> Sum of n natural numbers & Fictorial
/*
let num = Number(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    let sum = 0;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      sum += i;
      fact *= i;
    }
    console.log("The sum of N Numbers is :", sum);
    console.log("The factorial of N Numbers is :", fact);
  } else {
    console.log("Should be positive and more than 0");
  }
}
*/

// Q2 -> Factors of a number
/*
let num = Number(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        console.log(i);
      }
    }
    console.log(num);
  } else {
    console.log("Should be positive and more than 0");
  }
}
*/

// Q3 -> Find Prime numbers
/*
let num = Number(prompt("Enter a number: "));
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    console.log(isPrime(num));
    // With Function
    // let isPrime = true;
    // for (let i = 2; i <= Math.floor(num / 2); i++) {
    //   if (n % i === 0) {
    //     isPrime = false;
    //     break;
    //   }
    // }
    // console.log(isPrime);
  } else {
    console.log("Should be positive and more than 0");
  }
}
*/

// While Loop
// Q4 -> Sum of digits
/*
let num = Number(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    let sum = 0;
    while (num > 0) {
      rem = num % 10;
      sum += rem;
      num = Math.floor(num / 10);
    }
    console.log(sum);
  } else {
    console.log("Should be positive and more than 0");
  }
}
*/

// Q5 -> Reverse a number
/*
let num = Number(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    let rev = 0;
    while (num > 0) {
      let rem = num % 10;
      rev = rev * 10 + rem;
      num = Math.floor(num / 10);
    }
    console.log(rev);
  } else {
    console.log("Should be positive and more than 0");
  }
}
  */

// Q5 -> Strong Number
/*
let num = Number(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid Input");
} else {
  if (num > 0) {
    let sum = 0;
    let copyNum = num;
    while (num > 0) {
      let rem = num % 10;
      let fact = 1;
      for (let i = 1; i <= rem; i++) {
        fact *= i;
      }
      sum += fact;
      num = Math.floor(num / 10);
    }
    if (copyNum === sum) {
      console.log("It is strong");
    } else {
      console.log("It is not strong");
    }
  } else {
    console.log("Should be positive and more than 0");
  }
}
*/

// Q6 -> Repeat Hello
/*
do {
  var prom = prompt("Enter a number to repeat hello -- (0 for exit)");
  if (prom === "0") break;
  let num = Number(prom);
  let result = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result += "Hello ";
    }
    console.log(result);
  }
  console.log(prom);
} while (prom !== "0");
*/

// Q7 -> Guess a number 1 - 100
/*
let random = Math.floor(Math.random() * 100) + 1;
console.log(random);
let userNum = -1;
let attempt = 1;
while (userNum !== random) {
  userNum = Number(prompt("Guess a number between 0-100"));
  if (isNaN(userNum) || userNum < 1 || userNum > 100) {
    console.log("Please Enter a number between 1-100");
    continue;
  }
  if (userNum > random) {
    console.log("Your number is too high");
  } else if (userNum < random) {
    console.log("Your number is too low");
  } else {
    console.log(
      `Congrats 🎉 You Guess the correct number: ${random} in ${attempt} attempts`
    );
  }
  attempt++;
}
*/

// Q8 -> Calculator
/*
do {
  let num1 = Number(prompt("Enter first number: (0 for exit)"));
  if (num1 === 0) break;
  let num2 = Number(prompt("Enter second number: "));
  let operation = prompt("Enter operation: +, -, X, / or exit for quit");

  if (operation === "exit") break;

  let result;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      console.log("Error: Cannot divide by zero");
      continue; // Skip to the next iteration
    }
    result = num1 / num2;
  } else {
    console.log("Invalid operation! Please use +, -, *, or /");
    continue; // Skip to the next iteration
  }

  console.log(`${num1} ${operation} ${num2} = ${result}`);
} while (true);
*/
