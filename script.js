"use strict";
const button = document.querySelector("button");

const body = document.querySelector("body");

const colors = ["red", "blue", "green", "black", "yellow", "pink", "purple", "gray", "powderblue", "orange"];

body.style.backgroundColor = "violet";

button.addEventListener('click', changeColor);


function changeColor() {
  let ranNum = Math.floor(Math.random()*10);
  body.style.backgroundColor = colors[ranNum];
}
