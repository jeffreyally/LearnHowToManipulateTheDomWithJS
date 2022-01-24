 


//e.path[0].value


document.querySelector('#addToDo').addEventListener("change",(e)=>{
    
    newli = document.createElement('li')
    newli.innerHTML = '<span><i class="fa fa-trash"></i></span>' + e.path[0].value
    document.querySelector('ul').append(newli)
    listofspans = document.querySelectorAll(".fa.fa-trash")
    listofspans.forEach((span)=>{
    span.addEventListener("click",() =>
        span.parentNode.parentNode.remove()
    )
})
})











//lifesaver on how to find FA icons: https://stackoverflow.com/questions/51351679/how-do-i-color-a-fontawesome-icon-with-javascript