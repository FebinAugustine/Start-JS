// Functions Define once call it anywhere anytime

function printBingo() {
  console.log("B");
  console.log("i");
  console.log("n");
  console.log("g");
  console.log("o");
}
// Part just before parantheise is called function "reference".
// If you add paranthesis just after funtcion name then that is "execution".
// printBingo();

// More functions
// In the function what is in the paranthesis is called "Parameter".
// there could be multiple parameters.
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// result will be Not a Number(NaN)
// addTwoNumbers();

// when we call a function what we right in the paranthesis are called "Arguments".
// addTwoNumbers(4, 5);

// How to return?
function addTwoNumbers2(num1, num2) {
  let result = num1 + num2;
  return result;

  // Another way to return. No need to declare a new variable to store the result. Saves space.
  // return num1 + num2

  //Anything after return will not work
  console.log("will not execute");
}

addTwoNumbers2(2, 6);
// This will print nothing. Function worked and returned a value. To see we have to store the result.
const res = addTwoNumbers2(2, 11); // Now we stored the return in a variable
//console.log(res); // now this print the result in the console

function loggedInMsg(username) {
  return `${username} Just logged in.`;
}
//console.log(loggedInMsg()); // If not argument is passed the the result will be "Undefined" and not "Null".

function loggedInMsg(username) {
  //Check Undefined
  if (username === undefined) {
    //if(!username) this is also right and mosty used.
    console.log("Please Enter a Username");
    return; // Function stops here.
  }
  return `${username} Just logged in.`;
}
// console.log(loggedInMsg());
// console.log(loggedInMsg("Bingo"));

// Give a default value.
function loggedInMsg2(username = "Jango") {
  //Check Undefined. Has default value no chance of running this code block
  if (!username) {
    console.log("Please Enter a Username");
    return; // Function stops here.
  }
  return `${username} Just logged in.`;
}
// console.log(loggedInMsg2());
//console.log(loggedInMsg2("Bingo")); //Override the default value

// Rest Operator for accepting ,ultiple arguments into a single parameter.
function cartPrice(...total) {
  return total;
}
// console.log(cartPrice(145, 200, 247));

// Pass object in a function
// create object
const user = {
  username: "Bingo",
  price: "188",
};

function passingObject(anyObject) {
  console.log(`User is ${anyObject.username} and price is ${anyObject.price}`);
}

passingObject(user);
// Note: Type checking is a must

// Passing array
const newArray = [1, 2, 3];

function returnIndexValue(getArray) {
  return getArray[1];
}

console.log(returnIndexValue(newArray));
