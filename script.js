//***Creating an button element dynamically
let btn = document.createElement("button");
//***Accessing the body
let body = document.querySelector("body");
//***Place in the html's <body> as a child
body.appendChild(btn);
//***Add the className of .btn to <button>
btn.className = "btn";
//***Creating an <h4> element dynamically
let h4 = document.createElement("h4");
//***Placing the <h4> as the body's child
body.appendChild(h4);
//***Adding the text to the <h4> tag
h4.textContent = "This is pure DOM manipulation";
//***Acessing the button
// let btnAccess = document.querySelector("button");
btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 16777215).toString(16);
  btn.style.backgroundColor = "#" + randomNumber;
});