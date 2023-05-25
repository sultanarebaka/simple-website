const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

var colour = ["red", "yellow"];



function showlastvalue(){
document.querySelector('#color');
button.addEventListener("click", ()=> {
 if (localStorage.setItem("lastvalue", "red")){
  showcol == "red";
 } 
 else (localstorage.setItem("lastvalue", "yellow"))

{ showcol = "yellow";
 
  showlastvalue();
 
}

}
});



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
