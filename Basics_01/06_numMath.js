/*
LEARN NUMBER
*/

const number = 747;
console.log(number);

// Specifically defines the type
const newNumber = new Number(number);
// console.log(newNumber);

// Convert to string and get additional string methods
// console.log(newNumber.toString().length);

// Kind of float. Precesion values
// console.log(newNumber.toFixed(2));

const precesionNum = 12.8966;
// console.log(precesionNum.toPrecision(3));
const precesionNum2 = 124.8966;
// console.log(precesionNum2.toPrecision(3));

// Conert to local value
const bigNum = 1000000;
// console.log(bigNum.toLocaleString());
// console.log(bigNum.toLocaleString("en-IN"));

// ++++++++++++ MATHS +++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-12));
// console.log(Math.round(-12.56));
// console.log(Math.ceil(15.2));
// console.log(Math.floor(15.6));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 30;
const max = 50;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
