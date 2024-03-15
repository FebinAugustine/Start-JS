document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".submitBtn");

  btn.addEventListener("click", (e) => {
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector("#calResult");

    if (!height && !weight) {
      console.log("Please enter height an d weight");
      result.innerHTML = "Please enter height and weight";
    } else if (!height) {
      result.innerHTML = "Please enter height";
    } else if (!weight) {
      result.innerHTML = "Please enter weight";
    } else {
      const bmi = Math.round(weight / ((height * height) / 10000).toFixed(2));

      result.innerHTML = `The Result is: <span style="color: orange">${bmi}</span>`;
    }
  });
});

// if using form then get the form element.
// then add event listener to the form
// use the even type submit instead of click
// then inside call back write "e.preventDefault();"
