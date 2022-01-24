
let list = document.querySelector('#parentLi')

//list.removeChild(list.childNodes[3]) removes the 2nd LI
list.removeChild(list.children[1])
//I think list.children gives you back an array with just the elements
//while list.childNodes gives you back blank text elements
//on the even indexes(0,2,4 e.t.c...) while the odd indexes have 
//the Lis