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
