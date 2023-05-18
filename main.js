const colors = ["yellow"];
const show = document.querySelector("#change");

const btn = document.querySelector(".btn");
btn.addEventListener("click", function myFunction(){
	let start = "#";
	for(let i=0; i<1; i++){
		start += colors[getRandom()];
	
	
	}

	show.textContent = start ;
	document.body.style.background = start;
});
function getRandom(){
	return Math.floor(Math.random() *colors.length)
};



var color = ["#FEFF86"];
var i = 0;
document.querySelector("button").addEventListener("click", 
function(){
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i];
});



