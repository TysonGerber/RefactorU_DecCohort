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

function loopLetters() {
// loop through each letter and see if it matches any swear word in the list
var loopLetters = wordArray.toLowerCase().split('').slice('') //turn string into an array
// console.log(loopLetters)

var array = [];
for(var i = 0; i < loopLetters.length; i++){ //loop through each letter 
    // console.log(loopLetters[i]) 
        if (bannedWords === 'fuck') {
            return 'Fork'
        } else if (bannedWords === 'shit') {
            return 'Sheep'
        } else if (bannedWords === 'damn') {
            return 'Dooooooooom!!!'
        } else if (bannedWords === 'bitch') {
            return 'Bajazzafrical'
        } else if (bannedWords === 'pussy') {
            return 'Pedestroid'
        } else if (bannedWords === 'asshole') {
            return 'Aye-yup'
        } else if (bannedWords === 'cock') {
            return 'Cankles'
        } else if (bannedWords === 'dick') {
            return 'Discombobafryer'
        } else if (bannedWords === 'slut') {
            return 'Shaboosh'
        } else if (bannedWords === 'piss') {
            return 'Pipshe'
        } else if (bannedWords === 'fag') {
            return 'Floop'
        } else if (bannedWords === 'cunt') {
            return 'Cambria'
        } else if (bannedWords === 'ass') {
            return 'acoria'
        } else if (bannedWords === 'arsehole') {
            return 'agouti'
        } else if (bannedWords === 'bloody') {
            return 'Blunderbuss'
        } else if (bannedWords === 'motherfucker') {
            return 'Mugwump'
        } else if (bannedWords === 'penis') {
            return 'Pettifogger (you have to try harder :)'
        } else if (bannedWords === 'cocksucker') {
            return 'Collywobbles'
        } else if (bannedWords === 'boobs') {
           console.log('Batrachomyomachy')
        } else if (bannedWords === 'boobies') {
            return 'belliferous'
        } else if (bannedWords === 'breasts') {
            return 'Bumbershoot'
        } else if (bannedWords === 'nipples') {
            return 'Namby-pamby'
        } else
            console.log('unknown bad word')
    }

}
funnyWords();
    var convert = loopLetters
   array.push(convert)
      
    }

   console.log(array)
}
loopLetters();