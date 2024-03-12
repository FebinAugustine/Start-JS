let a = 20;
const b = 14;
var c = 25;

// console.log(a);
// console.log(b);
// console.log(c);

// Curly braces{} with function or if else or loops is called scope
{
}

// if (true) {
//   let d = 20;
//   const e = 14;
//   var f = 25;
// }
// let and const cannot be accessed from outside the scope
// console.log(d);
// console.log(e);
// but var can be accessed from outside the scope. var is consider as a global variable not bound to scopes.
// This might cause problems so mostly avoid using var. Two types of Scope : Block scope and Global scope.
// console.log(f);

// Nested SCopes
function one() {
  const userName = "Bingo";

  function two() {
    const user2 = "Jango";
    console.log(userName); // this will work because child can access parent scope.
  }
  console.log(user2); // This will not work as user2 is inside child scope and we calling it from parrent scope.

  two();
}

// one();

// Differnt way to declare function
// three(); // this will not work as fun call must be done after defining.
const three = function () {
  console.log("fun 3");
};

// Here function call must have to be after function definition
// three();

// But if you are creating function like this then you can call fun from any where
four();
function four() {
  console.log("fun 4");
}
