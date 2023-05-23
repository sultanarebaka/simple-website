const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

let col = localStorage.setItem("lastvalue", lastvalue);


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

