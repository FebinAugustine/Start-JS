// for of looops
const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  //   console.log(`${i}`);
}

const char = "bingo";

for (const iterator of char) {
  //   console.log(`${iterator}`);
}

// Map
// unique value

let map = new Map();

map.set("IN", "India");
map.set("FR", "France");
map.set("IT", "Italy");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

// Maps are not iteratable using for in loop
// objects are not iteratable with for of loop

// for in loop used on object

const myObj = {
  js: "Java Script",
  cpp: "C++",
};

for (const key in myObj) {
  console.log(`${key} is shrtcut for ${myObj[key]}`);
}

// for in loop on array
const myArr = ["b", "i", "n", "g", "o"];

for (const key in myArr) {
  console.log("Key is: ", key);
  console.log("Value is: ", myArr[key]);
}
