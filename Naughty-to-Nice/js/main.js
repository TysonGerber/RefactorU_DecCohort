var noSwearingInput = document.querySelector('.no-swearing') //querySelectorAll is an arry while query Selector is actually grabbing the objects.
//the event listener takes a callback function. I define this function, but I never call it myself. The browser will call it for me when this event happens, and pass in an event object with relevant information


//Words we want to ban from being entered


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
    'hell',
]



//adding an event listener that when a key is lifted it records what letter was entered and shown in the console

noSwearingInput.addEventListener('keyup', function (event) {
    console.log(event.target.value)
    console.log('event')

    var wordArray = event.target.value     // the wordArray is assigned or gets the event letters that are entered
    for (var i = 0; i < wordArray.length; i++) { // we then want to loop through each word in that array
        if (bannedWords.indexOf(wordArray) != -1) { // search through the banned words and it looks for the 1st time it sees one if it does then it returns an empty string if not then the value is returned -1.
            event.target.value = ''
        }
    }

})
















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
    'hell',
]

var wordArray = bannedWords.toString() //string

// loop through each letter and see if it matches any swear word in the list
var convert = wordArray.split('').slice('') //turn string into an array
console.log(convert)

var array = [];
for(var i = 0; i < convert.length; i++){ //loop through each letter 
    console.log(convert[i]) 
    if (convert[i] === 'hell'){
        array.push('heck')
        
    }else{
      
    }

}