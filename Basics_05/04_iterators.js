// for each
// higher order function
// callback function will not have name

const myArr = ["js", "cpp", "java"];

myArr.forEach(function (item) {
  //   console.log("items");
});

//for each using Arrow function
myArr.forEach((item) => {
  //   console.log(item);
});

// for each has three parameters which you can use.
myArr.forEach((item, index, arr) => {
  //   console.log(item, index, arr);
});

// For each with array of objects
const myCoding = [
  {
    name: "Java",
    file: "Java",
  },
  {
    name: "JavaScript",
    file: "JS",
  },
  {
    name: "Python",
    file: "PY",
  },
];

myCoding.forEach((item) => {
  console.log(item.name);
});

// for each does not return anything so you cannot store it in a variable.
