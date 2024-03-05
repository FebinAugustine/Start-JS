/*
LEARN DATES
*/

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

const myNewDate = new Date(2024, 3, 25);
// console.log(myNewDate.toString());

// YYYY/MM/DD
const myNewDate2 = new Date("2023-01-24");
// console.log(myNewDate2.toLocaleString());

// DD/MM/YYYY
const myNewDate3 = new Date("05-03-2024");
// console.log(myNewDate3.toLocaleString());

// TIME STAMP
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp / 1000));
