const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

var colour = ["red", "yellow"];

let colour = "lastvalue";
let col = localStorage.setItem("lastvalue", "colour");
document.getElementById("color").innerHTML = localStorage.getItem("lastvalue");

function lastvalue(){
 document.body.style.backgroundColor = "lastvalue";
}

function changeColor() {
  document.body.style.backgroundColor = col;
  color.textContent = col;
}

btn.addEventListener("click", () => {
  if (col == "red") {
    col = "yellow";
    changeColor();
  } else {
    col = "red";
    changeColor();
  }
});

