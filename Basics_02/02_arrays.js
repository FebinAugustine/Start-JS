//Arrays accept any type of data. It does not have to be numbers or strings.
// below it accepts another array
const marvelCharacter = ["char1", "char2", "char3"];
const dcCharacter = ["char1", "char2", "char3", "char4"];

// Added array is considered as a single element.
// marvelCharacter.push(dcCharacter);
// console.log(marvelCharacter);

// To access the 4th element of the added array which is the 3rd element in the original array.
// console.log(marvelCharacter[3][3]);

// Another way to add an array to another array.
// First store the array in new variable.
// Concatinate returns new array.
const addDc = marvelCharacter.concat(dcCharacter);
// console.log(addDc);

// Spread Operator.
// Another way of merging two arrays. Items of each array will be individualised and create a new array.
// Prefferd more
const spraedArr = [...marvelCharacter, ...dcCharacter];
// console.log(spraedArr);

// Merging multiple nested array into one array we use "flat(howDeep)"
const nestArr = [1, 2, [7, 8, 9], [4, 5, [20, 25]]];
// console.log(nestArr);
let flatArr = nestArr.flat(Infinity);
// console.log(flatArr);

// Query if something is an array
// console.log(Array.isArray("bingo"));
// Convert the return into an array
// console.log(Array.from("jango"));

// When it comes to objects from() returns empty array unless specified.
// console.log(Array.from({ name: "jango" }));

// Create an array from multiple varaiables or any.
let mark1 = 50;
let mark2 = 55;
let mark3 = 58;
console.log(Array.of(mark1, mark2, mark3));
