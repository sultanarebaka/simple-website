const btn = document.querySelector("#btn");
const color = document.querySelector("#color");



function changeColor() {
  document.body.style.backgroundColor = col;
  color.textContent = col;
}

btn.addEventListener("click", () => {
  if (col == "red") {
    col = "yellow";
    

  } else {
    col = "red";

    
    changeColor();
  }
});



var colour = ["red", "yellow"];
Button.addEventListener("click", () => {
if (localStorage.setItem("color","red")){
document.getElementById("span").innerHTML = localStorage.getItem("color");
}

 else
 (localstorage.setitem("color", "yellow")){
document.getElementById("span").innerHTML = localStorage.getItem("color");
}
});