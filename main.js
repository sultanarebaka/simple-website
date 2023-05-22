

const colors = ["red", "yellow"];
const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

const randomNumber = () => {
	return Math.floor(Math.random() * colors.length);

};

btn.addEventListener("click", () => {
	const num = randomNumber();
	document.body.style.backgroundColor = colors[num];
    color.textContent = colors[num];

});




const colorsArray = ["red", "yellow"];
const show = document.querySelector("#change");

let button = document.querySelector(".button");
btn.addEventListener("click", function(){
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





















