const btn = document.createElement("button");
btn.innerHTML = "Click Me For Hello World";
document.body.appendChild(btn);

btn.addEventListener("click", myClickHandler);

function myClickHandler(){
    alert('Hello World');
}