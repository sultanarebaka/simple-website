const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

var colour = ["red", "yellow"];

let lastvalue = "";
localStorage.setItem("lastvalue", lastvalue);


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




