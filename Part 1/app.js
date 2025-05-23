// Concat string and number
/*
let a = 12;
let b = "13";
console.log(typeof (a + b));
*/

// Concat and Sum
/*
let a = 10;
let b = 20;
console.log("The sum of a and b is: " + (a + b));
*/

// Type coercion
/*
console.log("1" + 1); // 11
console.log("1" - 1); // 0
console.log("1" * 1); // 1
console.log("1" / 1); // 1
*/

// Accept and print answer
/*
let age = Number(prompt("Enter your age: "));
console.log("Your age is: " + age);
console.log(typeof age);
*/

// Type Casting or Type Conversion
/*
let a = 10;
a = String(a);
console.log(typeof a); // string
a = Number(a);
console.log(typeof a); // number
a = Boolean(a);
console.log(typeof a); // boolean
console.log(a); // true
let b = "hello";
b = Number(b);
console.log(typeof b); // number
console.log(b); // NaN
*/

// Swapping variables
/*
// Metod 1: Using a temporary variable
let a = 10;
let b = 20;
console.log("Before swapping: a = " + a + ", b = " + b);
let c = a;
a = b;
b = c;
console.log("After swapping: a = " + a + ", b = " + b);

// Metod 2: Using destructuring assignment
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a = " + a + ", b = " + b);

// Metod 3: Using array destructuring
[a, b] = [b, a];
console.log("After swapping: a = " + a + ", b = " + b);

// Metod 4: Using bitwise XOR operator
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("After swapping: a = " + a + ", b = " + b);
*/

// Arthematic Operators
/*
let a = 12;
let b = 22;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(Math.floor(a / b)); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation
*/

// Relational Operators
/*
let a = 12;
let b = 22;
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a === b); // Strict equal to
console.log(a !== b); // Strict not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
*/

// Logical Operators
/*
console.log(10 > 6 && 10 < 20); // AND
console.log(10 > 6 || 10 < 20); // OR
console.log(!(10 > 6)); // NOT
*/

// Unary Operators
/*
let a = 10;
console.log(a++); // Postfix increment
console.log(++a); // Prefix increment
console.log(a--); // Postfix decrement
console.log(--a); // Prefix decrement
console.log(a); // Final value of a
*/

// Math Functions
/*
console.log(Math.round(10.5));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.8));
console.log(Math.trunc(10.98)); //Remove decimal Values
console.log(Math.pow(4, 2));
console.log(Math.sqrt(18));
console.log(Math.cbrt(27));
console.log(Math.abs(-10));
console.log(Math.min(10, 20, 30));
console.log(Math.max(10, 20, 30));
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.trunc(Math.random() * 9000 + 1000)); // Random number between 1000 and 9999
let a = 89.98776;
console.log(Number(a.toFixed(2))); // 89.99
*/


