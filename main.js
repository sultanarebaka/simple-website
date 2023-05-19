

const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
  //  change background color
  document.body.style.backgroundColor = "blue";
  
});
var color = ["red"];
var i = 0;
document.querySelector("button").addEventListener("click", 
function(){
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i];
});

const colorsArray = ["blue", "red" ];
const show = document.querySelector("#change");
document.querySelector("#change").textContent = colorsArray["blue", "red"];


btn.addEventListener("click", function(){
	let start = "#";
	for(let i=0; i<1; ++i){
		start += colors[getRandom()];
	
	
	}

	show.textContent = start ;
	document.body.style.background = start;
});
function getRandom(){
	return Math.floor(Math.random() *colors.length)
};


























