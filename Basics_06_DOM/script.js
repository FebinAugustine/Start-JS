document.addEventListener("DOMContentLoaded", function () {
  //Access an HTML element
  let byId = document.getElementById("heading");
  let byClassName = document.getElementsByClassName("title");
  let byTag = document.getElementsByTagName("p");

  console.log(byId);
  console.log(byClassName);
  console.log(byTag);

  // Using some methods to get the values
  let id = byId.id;
  console.log(id);
  let className = byId.className;
  console.log(className);

  // get attributes. pass the key you will get the value
  let attr = byId.getAttribute("id");
  console.log(attr);

  //Set attribute. First give the key then the value
  let setAttr = byId.setAttribute("id", "newHeading");
  let id2 = byId.id;
  console.log(id2);

  // Access style
  byId.style.backgroundColor = "green";
  byId.style.padding = "15px";
  byId.style.borderRadius = "20px";

  // InnerText, innerHTML, textContent
  // innerText gives what is visible
  // textContent gives all the text even that is hidden
  // innerHTML gives the whole text along with the html tags inside.

  // Using Query selector
  // when selecting tag gives first tag
  let qs = document.querySelector("p");
  let qsId = document.querySelector("#p1");
  let qsCn = document.querySelector(".heading");
  let input = document.querySelector("input[type='password']");
  console.log(input);

  // selecting a ul list
  let ul = document.querySelector("ul");
  console.log(ul);

  // Query selector all
  let myLi = document.querySelectorAll("li");
  console.log(myLi);

  // Node list and HTML collections are not pure Array.
  // we can use for each but not map
  myLi[1].style.color = "yellow";
  myLi.forEach((i) => {
    i.style.backgroundColor = "green";
    i.style.borderRadius = "10px";
    i.style.marginBottom = "10px";
  });

  // Html collection. To Array conversion
  let myliItem = document.getElementsByClassName("liItem");
  console.log(myliItem);

  let myArr = Array.from(myliItem);
  console.log(myArr);
  myArr.forEach((li) => {
    li.style.backgroundColor = "orange";
    li.style.color = "black";
    li.style.padding = "5px";
  });

  // Accessing Div and its children div

  const parent = document.querySelector(".week");
  console.log(parent);
  console.log(parent.children);
  console.log(parent.children[2].innerHTML);

  //Applying for loop
  for (let index = 0; index < parent.children.length; index++) {
    console.log(parent.children[index].innerHTML);
  }

  //Applying Styles
  parent.children[2].style.backgroundColor = "orange";
  parent.children[2].style.padding = "10px";
  parent.children[2].style.color = "black";

  // Accessing the first and last child and next sibling element
  console.log(parent.lastElementChild.innerHTML);
  console.log(parent.firstElementChild);
  console.log(parent.children[1].nextElementSibling);

  // Node selection
  console.log(parent.childNodes);

  // Create an element
  // div creation
  const div = document.createElement("div");
  console.log(div);
  div.className = "created";
  div.id = Math.round(Math.random() * 100 + 1);
  // Set additional attribute
  div.setAttribute("title", "createdTitle");
  div.style.backgroundColor = "green";
  div.style.color = "black";
  div.padding = "15px";
  // two ways of adding text into a div
  //   div.innerText = "Hello Bingo";
  let innerTxt = document.createTextNode("Hello Jango");
  div.appendChild(innerTxt);

  // Attach this newly created div into the body
  document.body.appendChild(div);

  // Add li item to ul
  // Create a function to add li
  function addLi(langName) {
    const li = document.createElement("li");
    li.innerText = `${langName}`;
    document.querySelector(".addLi").appendChild(li);
  }

  // call the function to append and show
  addLi("Python");

  // Optimised way of the above. Avoiding traversing
  function addOptiLi(lang) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${lang}`));
    document.querySelector(".addLi").appendChild(li);
  }
  addOptiLi("C++");

  // Edit options in ul li in optimised way
  const secondLang = document.querySelector(".addLi");
  const liItem = secondLang.querySelector("li:nth-child(3)");
  const newLi = document.createElement("li");
  newLi.textContent = "Kotlin";
  liItem.replaceWith(newLi);

  // Remove
  const remLast = document.querySelector("li:last-child");
  remLast.remove();
});
