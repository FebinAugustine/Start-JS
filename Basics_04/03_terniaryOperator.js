// +++++++ Falsy Values +++++++++++++++++++++

// false, 0,-0,BigInt, 0n,"", null, undefined, NaN

// +++++++ Truthy Values +++++++++++++++++++++

// "0", "false", " ", [], {}, function(){},

// Terniary Operator
// Condition ? true : false

const iceCreamPrice = 12;
iceCreamPrice <= 12
  ? console.log("price less than 12")
  : console.log("price greater than 12");

// Nullish Coalescing Operator ??: null undefined

let val1;

val1 = 5 ?? 10;
console.log(val1); // prints first value
val1 = null ?? 15;
console.log(val1); // prints second value because of first value null
val1 = undefined ?? 17;
console.log(val1); // prints second value because of first value undefined
val1 = null ?? 20 ?? 42;
console.log(val1); // prints the next value with value
