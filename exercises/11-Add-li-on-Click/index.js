LisInUL = 3
let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	console.log(LisInUL +=1);
	newli = document.createElement('li');
	newli.innerHTML = LisInUL+'th element';
	console.log(String(LisInUL).endsWith('2'))
	LisInUL > 20 && String(LisInUL).endsWith('1') ? newli.innerHTML = LisInUL +'st element':'false';
	LisInUL > 21 && String(LisInUL).endsWith('2') ? newli.innerHTML = LisInUL +'nd element':'false';
	LisInUL > 22 && String(LisInUL).endsWith('3') ? newli.innerHTML = LisInUL +'rd element':'false';
	

	document.querySelector('#myList').append(newli)
	
});
 //good up until 100 I think