let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	thediv = document.createElement("div")
	thediv.style.backgroundColor = 'yellow'
	thediv.innerHTML = 'Hello World'
	document.body.append(thediv)
	
});