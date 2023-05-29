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

// save color 
function color() { 
  var colour = document.getElementById('span').value;
  localStorage.setItem('saveColor');
   document.body.style.backgroundColor = colour;
}

//  save, update and background color
if(localStorage.saveColor) {
  document.getElementById('span').value;
  document.body.style.backgroundColor      = localStorage.saveColor;
  document.body.style.backgroundColor = "red";
}
else (localstorage.savecolor) 
document.getElementById('span').value;
  document.body.style.backgroundColor      = localStorage.saveColor;
  document.body.style.backgroundColor = "yellow";

