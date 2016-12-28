var nameParagraph = document.querySelector('.name')
console.log('Name Input:', nameParagraph)

nameParagraph.addEventListener('click', function(event){
    nameParagraph.classList.add('hide')
    
} )


nameParagraph.addEventListener('click', function(event){
    nameParagraph.classList.remove('hide')
    var currentName = nameParagraph.innerHTML
    
    var nameParagraph = document.querySelector('#nameInput')
    nameInput.value = currentName
    
console.log('Name Paragraph:', nameParagraph)

} )