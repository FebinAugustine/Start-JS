// this context

const user = {
  userName: "Jango",
  price: 200,

  welcomeMsg: function () {
    console.log(`Hi ${this.userName} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMsg();
// user.userName = "Bingo";
// user.welcomeMsg();

// Inside node environment the context will be an empty object {}
// But in browser "this" will be "window", which is a global object. engine is inside browser.
// Now the engines are standalone. some engines are node, dino, etc
// console.log(this);

function globalFun() {
  console.log(this);
}
// globalFun();

// Cannot use this inside functions like this
function globalFun2() {
  let userName = "Bingo";
  console.log(this.userName);
}
// globalFun2(); // will get undefined

//Arrow function
// Basic syntax: () => {}
const arrFun = () => {
  let userName = "Bingo";
  //   console.log(this.userName); // thiss will give undefined
  console.log(this); // thiss will give empty object {}
};
// arrFun();

// Implicit arrow function. return keyword is not needed
const arrImplicit = (num1, num2) => num1 + num2;
// Wrap defenition in normal braces you dont use return keyword.
// But wrap in Curly braces you must use return keyword
// const arrImplicit2 = (num1, num2) => (num1 + num2);

// retun an object
const arrImplicit2 = (num1, num2) => ({ user5: "bingo" });

// console.log(arrImplicit(1, 2));
console.log(arrImplicit2(7, 2));
