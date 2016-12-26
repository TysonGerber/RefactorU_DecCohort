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
noSwearingInput.addEventListener('keyup', function (event) {
    console.log(event.target.value)
    console.log('event')

    //event.preventDefault()
    var wordArray = event.target.value
    for (var i = 0; i < wordArray.length; i++) {
        if (bannedWords.indexOf(wordArray) != -1) {
            event.target.value = ''
        }
    }

})


document.addEventListener('keydown', function (event) {
    if (event.key === '') {
        // event.preventDefault()
    }
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        // event.preventDefault()
    }
})

//whatever the value in the input and the key code is going to complete it then stop it




noSwearingInput.addEventListener('keyup', function (event) {

    var wordArray = event.target.value
    for (var i = 0; i < wordArray.length; i++) {
        if (bannedWords.indexOf(wordArray) != -1) {
            event.target.value = ''
        }
    }

})


document.addEventListener('keydown', function (event) {
    if (event.key === '') {
        // event.preventDefault()
    }
})


document.addEventListener('keydown', function (event) {
    if (event.key === 'k') {
        // event.preventDefault()
    }
})




noSwearingInput.addEventListener('keyup', function (event) {
    console.log(event.target.value)
    console.log('event')

    //event.preventDefault()
    var wordArray = event.target.value
    for (var i = 0; i < wordArray.length; i++) {
        if (bannedWords.indexOf(wordArray) != -1) {
            event.target.value = ''
        }
    }

})


var wordArray = prompt('type in hello')

var test = function () {

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray === 'hello') {
            return 'hi'
        } else {
            return 'this didn\'t work'
        }
    }
}

test('hello')


var bannedWords = prompt('type in hello')
    var 
var funnyWords = function () {
    for (var i = 0; i < bannedWords.length; i++) {
       
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
