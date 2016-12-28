var noSwearingInput = document.querySelector('.no-swearing') //querySelectorAll is an arry while querySelector is actually grabbing the objects.
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
]



//adding an event listener that when a key is lifted it records what letter was entered and shown in the console

noSwearingInput.addEventListener('keyup', function (event) {
    // console.log(event.target.value)
    console.log('event')

    var wordArray = event.target.value     // the wordArray is assigned or gets the event letters that are entered

    var copyString = wordArray.toLowerCase().slice()
    var arrayString = copyString.split(' ')
    for (var i = 0; i < arrayString.length; i++) {// we then want to loop through each word in that array

        arrayString[i] = Change(arrayString[i]) 

        

    }
    event.target.value = arrayString.join(' ')
    console.log(event.target.value)

})

/////////////////If you type in one of the swear words, then it matches and changes that certain swear word into a clean word.


var Change = function (word) {

        if (word == 'fuck') {
            return 'fork'
        } else if (word == 'shit') {
            return 'sheep'
        } else if (word == 'damn') {
            return 'dooooooooom!!!'
        } else if (word == 'bitch') {
            return 'bajazzafrical'
        } else if (word == 'pussy') {
            return 'pedestroid'
        } else if (word == 'asshole') {
            return 'aye-yup'
        } else if (word == 'cock') {
            return 'cankles'
        } else if (word == 'dick') {
            return 'discombobafryer'
        } else if (word == 'slut') {
            return 'shaboosh'
        } else if (word == 'piss') {
            return 'pipshe'
        } else if (word == 'fag') {
            return 'floop'
        } else if (word == 'cunt') {
            return 'cambria'
        } else if (word == 'ass') {
            return 'acoria'
        } else if (word == 'arsehole') {
            return 'agouti'
        } else if (word == 'bloody') {
            return 'blunderbuss'
        } else if (word == 'motherfucker') {
            return 'mugwump'
        } else if (word == 'penis') {
            return 'pettifogger (you have to try harder :)'
        } else if (word == 'cocksucker') {
            return 'collywobbles'
        } else if (word == 'boobs') {
            return (word == 'batrachomyomachy')
        } else if (word == 'boobies') {
            return 'belliferous'
        } else if (word == 'breasts') {
            return 'bumbershoot'
        } else if (word == 'nipples') {
            return 'namby-pamby'
        } else if (word == 'hell') {
            return 'help'
        } else if (word == 'twat') {
            return 'twitter'
        }else if (word == 'boococky') {
            return 'YOU ARE A SICK BASTARD!'
        }else if (bannedWords === 'tit') {
            return 'ticks'
        }else if (bannedWords === 'suck') {
            return 'super'
        }else
            return word 
}
// loop through each letter and see if it matches any swear word in the list