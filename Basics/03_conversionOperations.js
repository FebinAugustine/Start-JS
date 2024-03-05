/*
LEARNIN TYPE CONVERSIONS
*/

let score = 33;
console.log(typeof score);

let age = "33";
console.log(typeof age);

let bingo = Number(age);
console.log(typeof bingo);

let mixed = "12js";
let jango = Number(mixed);
console.log(typeof jango);
console.log(jango);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

/*
BOOLEAN CONVERSION
*/

let isLoggedin = 1;
let convertIsLoggedin = Boolean(isLoggedin);
console.log(convertIsLoggedin);
// 1 => true; 0 => false;
//"" => false
// "hello" => true

/*
STRING CONVERSION
*/
let ageNo = 15;
let convertAge = String(ageNo);
console.log(ageNo);
console.log(typeof convertAge);
