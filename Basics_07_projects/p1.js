document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".buttons");
  console.log(btns);
  const body = document.querySelector("body");
  btns[0].style.backgroundColor = "green";
  btns[1].style.backgroundColor = "red";
  btns[2].style.backgroundColor = "blue";

  // Events

  btns.forEach((button) => {
    console.log(button);
    button.style.padding = "20px";
    button.style.borderRadius = "10px";
    button.style.margin = "5px";

    button.addEventListener("click", function (e) {
      console.log(e.target);
      if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;
      } else if (e.target.id === "red") {
        body.style.backgroundColor = e.target.id;
      } else {
        body.style.backgroundColor = e.target.id;
      }
    });
  });
});
