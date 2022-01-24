let listofcountries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

for(country of listofcountries){
    
    var option = document.createElement("option");  
    option.text = country;
    option.setAttribute("class", country);
    document.querySelector('#mySelect').add(option);
}

document.querySelector('#mySelect').addEventListener("change",(e)=>{
    dropdownOfCountries = document.querySelector('#mySelect')
    alert(`${dropdownOfCountries[dropdownOfCountries.selectedIndex].innerHTML}`)
    
})
//This link was a lifesaver: https://www.w3schools.com/jsref/coll_select_options.asp
//This can be done in one line like so...alert(`${document.querySelector('#mySelect')[document.querySelector('#mySelect').selectedIndex].innerHTML}`)
//But for readability tomorrow in class I seperated it into two
//lines assigning the #mySelect to the variable dropdownOfCountries
//The key part is here: [dropdownOfCountries.selectedIndex]
//the above evaluates to the INDEX of the country you click on then ".innerHTML" gives you the name without the surrounding HTML