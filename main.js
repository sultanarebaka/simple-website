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

// store color 
function ChangeColor() { 
  var colour = document.getElementById('span').value;
  localStorage.setItem('storedValue', document.body.style.backgroundColor = colour);
}

//  store , update color and background color
if(localStorage.storedValue) {
  document.getElementById('span').value = localStorage.storedValue;
  document.body.style.backgroundColor      = localStorage.storedValue;
}