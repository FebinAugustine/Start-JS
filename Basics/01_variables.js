// Declare unchangeable variables using const keyword
const accountId = 1234;

// Declare changeable varibles using let or var keyword
let accountEmail = "me@google.com";

/*
Prefer not to use var
Because of issue in block scope and fuhnctioal scope.
*/
var accountPassword = "1234567";

// Another way of declaring variable. But not that much in use
accountCity = "Dublin";

//Undifined variable
let accountState;

//accountId = 214 //Once declared changing const variable is not allowed.

accountEmail = "meagain@google.com";
accountPassword = "789456";
accountCity = "California";

// Print a single variable
console.log(accountId);

// print multiple variables in a single table.
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
