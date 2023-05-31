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
let lastvalue = [colour]; 
Button.addEventListener("click", () => {
if (localStorage.setItem("lastvalue","red")){
document.getElementById("span").innerHTML = localStorage.getItem("lastvalue");
}

 else
 (localstorage.setitem("lastvalue", "yellow"))
document.getElementById("span").innerHTML = localStorage.getItem("lastvalue");

});

console.log(lastvalue[colour]);