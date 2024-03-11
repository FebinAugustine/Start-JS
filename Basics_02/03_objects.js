// Object declaration has two ways: Literal and Construtor
// another concept is Singleton. Any declaration made through constructor that will be a constructor.
// Literal will have multiple instances and not a singleton

// Singleton declaration through constructors.
// Object.create

// Object Literals
const jsUser = {}; //empty object

// Unlike in array we can access the object elements thrugh keys
let NewObject = {
  name: "bingo",
  age: 24,
  location: "Kochi",
  isLoggedIn: false,
  projects: ["pro1", "pro2"],
};

// To acces the object. Not so prefered way.
// console.log(NewObject.name);

// Another way to access object elements
// console.log(NewObject["name"]);

const mySymA = Symbol("Key 1");
const mySymB = Symbol("Key 3");

let SymbolObj = {
  mySymA: "Key 2",
  [mySymB]: "Key 4",
  name: "Bingo",
};

// console.log(SymbolObj.mySymA);
// console.log(typeof SymbolObj.mySymA);
//Correct way to access an object element
// console.log(SymbolObj[mySymB]);

// Acces symbol
// console.log(typeof SymbolObj[mySymB]);
// console.log(typeof mySymB);

// Change the value of an element
// console.log(SymbolObj.name);
SymbolObj.name = "Change Bingo";
// console.log(SymbolObj.name);

// Freze an element in object
// Object.freeze(SymbolObj);
// console.log("After Freeze Applied no changes will get effect");
SymbolObj.name = "Change again";
// console.log(SymbolObj.name);
// console.log(SymbolObj);

// Add function in to object
SymbolObj.greeting = function () {
  console.log("Inside newl added function");
};

// console.log(SymbolObj.greeting);
// console.log(SymbolObj);
// console.log(SymbolObj.greeting());

// Get access to an element in same object
SymbolObj.greeting2 = function () {
  console.log(`Hello greetings two: ${this.name}`);
};
console.log(SymbolObj.greeting2());
