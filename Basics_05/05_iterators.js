// to return something use filter. Conditional filtering is done

const nums = [1, 2, 3, 4, 5, 6, 7];

//store in a variable
const newNums = nums.filter((nums) => {
  return nums > 3;
});

// console.log(newNums);

const books = [
  {
    name: "bk1",
    publishDate: 1985,
    genere: "science",
  },
  {
    name: "bk2",
    publishDate: 1935,
    genere: "maths",
  },
  {
    name: "bk3",
    publishDate: 2000,
    genere: "science",
  },
  {
    name: "bk4",
    publishDate: 1945,
    genere: "history",
  },
];

const userBk = books.filter((item) => item.publishDate > 1975);
// console.log(userBk);

// +++++++ map +++++++++
// unlike in filter map return without conditions

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newNums1 = nums1.map((num) => {
  return num + 2;
});
// console.log(newNums1);

// you can chain multiple functions
let newNums2 = nums1
  .map((nums) => nums * 10)
  .map((nums) => nums + 2)
  .filter((nums) => nums > 50);

// console.log(newNums2);

// Reducer
let myPrice = nums1.reduce((acc, currVal) => {
  console.log(acc, currVal);
  return acc + currVal;
}, 0);

console.log(myPrice);
