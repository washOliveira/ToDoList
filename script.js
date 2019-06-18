const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
		
function inputLength(){
	return input.value.length;
}

function createListElement(){
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

function addLineThrough(e){
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", addLineThrough);

// --------------------------------------------

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);