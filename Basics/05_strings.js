const name = "Bingo";
const marks = 85;
console.log(name + marks + " good");
// above is not the good way to write code

// String interpolation
console.log(`Hello my name is ${name} and my mark is ${marks}`);

// Another way of declaring String.
// Here You can access individual characters of a string
const newway = new String("Jango");

console.log(newway[1]);
// You can use different methods.
console.log(newway.__proto__);
console.log(newway.length);
console.log(newway.toUpperCase());
console.log(newway.charAt(3));
console.log(newway.indexOf("n"));

const newWay = newway.substring(0, 2);
console.log(newWay);

// in slice you can use negative values
const newWaySlice = newway.slice(-7, 2);
console.log(newWaySlice);

// Cut down extra spaces
const extraSpace = "    manu.    ";
console.log(extraSpace);
console.log(extraSpace.trim());

// Replace
const url = "https://myname.com/lastname%20lastname";
console.log(url.replace("%20", "-"));

// Does some thing is included
console.log(url.includes("myname"));
console.log(url.includes("bingo"));

// Get strings seperated based on a seperator.
// And it will be in a n array
const sepr = "my name is bingo";
console.log(sepr.split(" "));
