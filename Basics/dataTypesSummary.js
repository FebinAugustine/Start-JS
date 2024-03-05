// Primitive Type

/*
7 Types:
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

// Java Script is a dynamically typed language.
const score = 100;
const score2 = 98.5;
const isLoggedin = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const newId = Symbol("123");
console.log(id == newId);

// Type n at the of the big numbers to auto convert to BigInt.
const bigNum = 12456789547851455225n;

// Reference Type (Non Primitive)

/**
Array
Objects
Functions 
*/

const fruits = [apple, orange, mango, banana];

let userObj = {
  name: "amnu",
  age: 12,
  city: "chennai",
};

const hello = function helloWorld() {
  console.log("Hello world");
};

//+++++++++++++++++++++++++++++++++++++++++++++++++
// Primitive data types go into Stack memmory
// And non premitive go into Heap memmory
// In Stack memmory you will get a copy
// And in Heap memmory you will get a reference
