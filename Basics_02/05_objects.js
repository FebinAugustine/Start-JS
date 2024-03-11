// Object Destructuring
const regUser = {
  name: "user1",
  course: "DBMS",
  instructor: "Bingo",
};

// console.log(regUser.course);

//Easy access for multiple time access
const { instructor } = regUser;
console.log(instructor);

//Easy access for multiple time access
const { instructor: inst } = regUser;
console.log(inst);

// APIs
// earlier returns are in xml, but now its in JSON format.
// How we get JSON data. Either as an object or array of objects

// {
//     "name": "user1",
//     "course": "DBMS",
//     "instructor": "Bingo",
// }

// [{}, {}, {}];
