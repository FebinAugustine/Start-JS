// for loop

// for (let index = 0; index <= 5; index++) {
//   const element = index;
//   if (element == 2) {
//     console.log("2 is the number");
//   }
//   console.log(element);
// }

// console.log(element); // element cannot be accessed outside the scope

// let arr = ["ar1", "ar2", "ar3"];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }

// Break
// comes out of the loop
// for (let index = 0; index <= 5; index++) {
//   const element = index;
//   if (element == 3) {
//     console.log("3 is the number");
//     break;
//   }
//   console.log(element);
// }

// Continue
// skip that particular item
for (let index = 0; index <= 5; index++) {
  const element = index;
  if (element == 3) {
    console.log("3 skipped");
    continue;
  }
  console.log(element);
}
