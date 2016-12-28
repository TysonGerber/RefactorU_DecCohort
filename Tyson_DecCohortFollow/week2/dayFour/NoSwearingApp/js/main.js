var noSwearingInput = document.querySelector('.no-swearing') //querySelectorAll is an arry while querySelector is actually grabbing the objects.
//the event listener takes a callback function. I define this function, but I never call it myself. The browser will call it for me when this event happens, and pass in an event object with relevant information
var bannedWords = [
    'fuck',
    'shit',
    'damn',
    'bitch',
    'pussy',
    'asshole',
    'cock',
    'dick',
    'slut',
    'piss',
    'fag',
    'cunt',
    'ass',
    'arsehole',
    'bloody',
    'motherfucker',
    'penis',
    'cocksucker',
    'boobs',
    'boobies',
    'breasts',
    'nipples',
    


] 
noSwearingInput.addEventListener('keyup', function(event){
    console.log(event.target.value)
    console.log('event')

    //event.preventDefault()
    var wordArray = event.target.value
    for(var i = 0; i < wordArray.length; i++){
        if(bannedWords.indexOf(wordArray) != -1){
            event.target.value = ''
        }
    }

})


document.addEventListener('keydown', function(event){
    if(event.key === ''){
    // event.preventDefault()
    }
})


document.addEventListener('keydown', function(event){
    if(event.key === 'k'){
    // event.preventDefault()
    }
})

//whatever the value in the input and the key code is going to complete it then stop it




noSwearingInput.addEventListener('keyup', function(event){
    
    fuc
    var wordArray = event.target.value
    for(var i = 0; i < wordArray.length; i++){
        if(bannedWords.indexOf(wordArray) != -1){
            event.target.value = ''
        }
    }

})


document.addEventListener('keydown', function(event){
    if(event.key === ''){
    // event.preventDefault()
    }
})


document.addEventListener('keydown', function(event){
    if(event.key === 'k'){
    // event.preventDefault()
    }
})