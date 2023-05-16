var color = ["#749F82"];
var i = 0;
document.querySelector("button").addEventListener("click", 
function(){
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})

const colors = ["red","blue"];
const show = document.querySelector("#change");
