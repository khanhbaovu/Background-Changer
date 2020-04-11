
let colors = ["red", "blue", "green", "black", "yellow", "pink", "purple", "gray", "powderblue", "orange"];

function changeColor() {
  let ranNum = Math.floor(Math.random()*10);
  document.body.style.backgroundColor = colors[ranNum];
}
