let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	newli = document.createElement('li')
	newli.innerHTML = 'Fourth element'
	document.querySelector('#myList').append(newli)
});
