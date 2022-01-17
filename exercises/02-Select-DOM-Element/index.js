firsth1 = document.querySelector('#theTitle')
firsth1.addEventListener("contextmenu", myFunction)

function myFunction(){

    alert('Right click alert')
    
}
var newParagraphElem = document.createElement("p");
newParagraphElem.innerHTML = '<strong>Right click the h1</strong>';
document.body.append(newParagraphElem);





