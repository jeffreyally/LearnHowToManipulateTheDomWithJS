 

listofspans = document.querySelectorAll(".fa.fa-trash")

listofspans.forEach((span)=>{
    span.addEventListener("click",() =>
        span.parentNode.parentNode.remove()
    )



})















//lifesaver on how to find FA icons: https://stackoverflow.com/questions/51351679/how-do-i-color-a-fontawesome-icon-with-javascript