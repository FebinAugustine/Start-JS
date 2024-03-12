// Immediately Invoked Function Expressions

function iifeFun() {
  console.log("DB Connected");
}

// To invoke the above function immediately the wrap it in braces(your_function).
// We use iife to escape from global scope polution
(function iifeFun() {
  console.log("DB Connected");
})();

// iife with arrow fun. dont forget to end the above fun with semicolon other wise the below code will not run
(() => {
  console.log("DB Connected Arrow");
})();
