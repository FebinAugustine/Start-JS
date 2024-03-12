// Switch cases
// Basic syntax
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

const day = 8;

switch (day) {
  case 1:
    console.log("Sunday");
    break; // use break to come out of the flow
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;

  default:
    console.log("DAY not defined");
    break;
}
