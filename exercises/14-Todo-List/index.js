listofspans = document.querySelectorAll(".fa.fa-trash")
listofspans.forEach((span)=>{
span.addEventListener("click",() =>
    span.parentNode.parentNode.remove()
)
})


document.querySelector('#addToDo').addEventListener("change",(e)=>{
    
    newli = document.createElement('li')
    newli.innerHTML = '<span><i class="fa fa-trash"></i></span>' +' '+ e.path[0].value
    document.querySelector('ul').append(newli)
    listofspans = document.querySelectorAll(".fa.fa-trash")
    listofspans.forEach((span)=>{
    span.addEventListener("click",() =>
        span.parentNode.parentNode.remove()
    )
})
  
})

