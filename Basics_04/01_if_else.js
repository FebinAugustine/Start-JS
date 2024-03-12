// if

// if (true) {
//   console.log("Yes i will run");
// }

// if (false) {
//   console.log("Sorry will not run untill i am true");
// }

// const isLoggedIn = true;
// if (isLoggedIn) {
//   console.log("You are logged in..");
// }

// <=, >=, !=, ==, === Conditions which you can use
// === this will strictly check the type also.
// if (3 != 2) {
//   console.log("3 not equal to 2");
// }

// if else
// const temp = 50;
// if (temp < 41) {
//   console.log("Temperature less than 41");
// } else {
//   console.log("Temperature greater than 41");
// }

// Implict
// if (2 == 2) console.log("2 equal to 2");

// if else if
// if (temp < 41) {
//   console.log("Temperature less than 41");
// } else if (temp < 50) {
//   console.log("Temperature less than 50");
// } else {
//   console.log("Temperature greater than 50");
// }

// multiple condition checking
const isLoggedIn1 = false;
const paid = true;

// Check any ofthem is true
if (isLoggedIn1 || paid) {
  console.log("logged in or paid");
}

// Check both are true
if (isLoggedIn1 && paid) {
  console.log("Loggedin and paid");
}
