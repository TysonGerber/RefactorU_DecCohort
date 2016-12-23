//phone number
var userInput = prompt('What is your phone number?')


if (userInput.charAt(3) === '-' && userInput.charAt(7) === '-' && userInput.charAt(11)) {
    var userString = userInput.toString();
    alert(+ userString + 'is correct')
} else {
    console.log('try inputing your phone number with dashes and with the area code.')
}



// Phone Number
var userInput = prompt('What is your phone number? Use xxx-xxx-xxxx format')


if (userInput.charAt(3) === '-' && userInput.charAt(7) === '-' && (userInput.length === 11)) {
    var phoneCheck = user.Input.split('-')
} else if ((phoneCheck[0] >= 0) && (phoneCheck[0] <= 9)) {

    // var userString = userInput.toString();
    // alert(+ userString + 'is correct')
} else if ((phoneCheck[1] >= 0) && (phoneCheck[1] <= 9)) {

} else if ((phoneCheck[2] >= 0) && (phoneCheck[2] <= 9)) {
    console.log('Your number is: ' + phoneCheck)
} else {
    console.log('try inputing your phone number with dashes and with the area code.')
}







// birthday
var birthDate = prompt('enter your birthday in mm/dd/yy')

if (birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' && birthDate.lenght === 8) {
    var birthArr = birthDate.split('/');
    if ((birthArr[0] >= 1) && (birthArr[0] <= 12)) {
        console.log('day is correct');
        //alert('Your birthday is ' + birthDate)
    } else if ((birthArr[1] >= 1) && (birthArr[1] <= 31)) {
        console.log('month is correct');

    } else if ((birthArr[2] >= 1) && (birthArr[2] <= 99)) {
        console.log('year is correct');
        alert('Your birthday you enter is ' + birthArr);
    } else {
        console.log('make sure your entering your birthday in this format: mm/dd/yy')
    }
}


// State Abbreviated 2 words
////// WHAT I HAD THAT WASN'T WORKING///////////////////////
var state = prompt('Enter your state abreviated ex: CO');
if (state.length === 2) {
    console.log('length correct')
    for (var i = 0; i < state.length; i++) {
        var stateUpper = state[i].toUpperCase();

    }
    console.log('uppercase: ' + stateUpper)
}
state('CO')

////////////////CORRECT WAYS//////////////////////////////

var state = prompt('Enter your state abreviated ex: CO');

if (state.length === 2) {
    var stateUpper = ''
    for (var i = 0; i < state.length; i++) {
        stateUpper += state[i].toUpperCase();

    }
    console.log('uppercase: ' + stateUpper)
}




state = prompt('Enter your state abreviated ex: CO');

if (state.length === 2) {
    var stateUpper = state.toUpperCase()
    console.log('uppercase: ' + stateUpper)

}

// var married = prompt('Are you married yes or no?')

// var marriedStatus = function(){
//     if (married === 'yes' || married === 'YES') {
//         return married
//     } else if (married === 'no' || married === 'NO') {
//         return married
//     } else{
//         console.log('please choose yes or no')
//     }
// }
// console.log(marriedStatus())

var married = prompt('Are you married?')

var marriedStatus = married.toUpperCase()

var marriedResults = function(){
    if (marriedStatus === 'YES' || marriedStatus === 'NO'){
        return marriedStatus
    }else {
        return console.log('Please answer yes or no')
    }
}
console.log(marriedResults())