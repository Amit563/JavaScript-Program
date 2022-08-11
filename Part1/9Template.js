// Template string

let age = 22;
let first = "Gautam";

let aboutMe = `My name is ${first} and my age is ${age}`;
console.log(aboutMe);


// Undifined

let amit;
console.log(typeof amit);


// NULL

let myVariable = null;
console.log("that is a bug :",typeof myVariable);
console.log(myVariable);


// BigInt

console.log(Number.MAX_SAFE_INTEGER);

let myNumber = BigInt(12);
let sameMyNumber = 123n;

console.log(myNumber + sameMyNumber);


// Boolean

let num1 = 6;
let num2 = 7;

console.log(num1 < num2);