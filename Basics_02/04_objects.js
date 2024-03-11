// Creating a Singleton object. Returns empty object like in object literals.
// will have only one instance
const fbUser = new Object();
// console.log(fbUser);

// Add elements into fbUser
fbUser.name = "fb user";
fbUser.email = "fbuser@fb.com";
// console.log(fbUser);

// Nesting in objects and accessing it
const regUser = {
  name: "user1",
  subjects: {
    allSubjects: {
      subject1: "History",
      subject2: "Science",
    },
  },
};
// console.log(regUser);
// console.log(regUser["subjects"].allSubjects.subject1);

//Merging objects. allign elements one after another.
let obj1 = { 1: "a", 2: "b" };
let obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// Garantee the array object return. {} = not a compulsory
const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// merging using spread operator
const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

// Mostly used. Gets an array of objects from db
const users = [
  {
    name: "user1",
    age: 22,
  },
  {
    name: "user2",
    age: 22,
  },
  {
    name: "user3",
    age: 22,
  },
];
//access the object elements
// console.log(users[2].name);

// Access the keys of an object. Come into use most often
// enables to loop through specifically
// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser));
// array inside array
// console.log(Object.entries(fbUser));

// To query/check whether an item is there
console.log(fbUser.hasOwnProperty("name"));
