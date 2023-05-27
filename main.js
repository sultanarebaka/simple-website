const btn = document.querySelector("#btn");
const color = document.querySelector("#color");

var colour = ["red", "yellow"];

let lastvalue = [colur];

function lastvalue(){
  document.body.style.backgroundColor = lastvalue;

  }

button.addEventListener("click", ()=> {
  let saveItem = JSON.parse(localStorage.getItem('color'));
  localStorage.setItem('color', JSON.lastvalue());
  saveItem = JSON.parse(localStorage.getItem('color'));

colorName.textContent = saveItem;

}
);



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
