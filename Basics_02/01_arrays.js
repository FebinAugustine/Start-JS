// Arrays

const myArr = [0, 1, 2, 3, true, "Name"];
// Multiple items in single variable
// What is inside square brackets are called elements.
// Elements does not have to be of same type.
// Arrays are resizable
// Zero based indexing
// Same reference on shallow copies

const characters = ["char1", "char2", "char3"];
//console.log(characters);
// Another example

//Another way of creatng an array
const newArr = new Array(1, 2, 3, 4, 5);
//console.log(newArr[3]);

// Methods asssociated with Arrays

// add another item to the array we use push
const newArr2 = new Array(1, 2, 3, 4, 5);
// newArr2.push(7);
//console.log(newArr2);

// remove the last element from the array we use pop
//newArr2.pop();
// console.log(newArr2);

// Add an element to the 0 index of the array and shift the position of all other elements.
//newArr2.unshift(8);
//console.log(newArr2);

// Remove the first element we use shift
//newArr2.shift();
//console.log(newArr2);

// Boolean queries that returns true or false
//console.log(newArr2.includes(10));

// Get the index of an item
//console.log(newArr2.indexOf(4));

// Add an array to another we use join. This changes the type of array to string
const joinArray = newArr2.join();
// console.log(newArr2);
// console.log(joinArray);
// console.log(typeof joinArray);

// Slice does not in clude the last index in the range and does not modifies the original array.
// console.log("A", newArr2);
const newArr3 = newArr2.slice(1, 3);
// console.log(newArr3);
// console.log("B", newArr2);

// Along with including the range in full Splice modifies the original array
// console.log("A", newArr2);
const newArr4 = newArr2.splice(1, 3);
// console.log(newArr4);
// console.log("C", newArr2);
