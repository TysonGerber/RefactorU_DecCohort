/******************************************************/
//SOLUTION for getName
var person = {
    name: 'Luisa',
    age: 25,
}

function getName(object){
 return object.name
};
 
console.log(getName(person))


//searches the words
// var js= ['javascript', 'is', 'awesome']
// var what = ['what', 'happened', 'to', 'my', 'function']

// function totalLetters(strings){
//     return strings.length
// }

// console.log(totalLetters(js));

//search individual letters and counting the spaces

// var js= ['javascript', 'is', 'awesome']
// var what = ['what', 'happened', 'to', 'my', 'function']

// var jsletters = js.toString().split('').slice(' ')
// var whatletters = what.toString().split('').slice(' ')
// function totalLetters(strings){
//     return strings.length 
// }

// console.log(totalLetters(jsletters));
// console.log(totalLetters(whatletters));

//search individual letters without spaces

/******************************************************/
//SOLUTION for totalLetters

var js= ['javascript', 'is', 'awesome']
var what = ['what', 'happened', 'to', 'my', 'function']

function totalLetters(jsArray){

   return jsArray.join('').length
}

console.log(totalLetters(js));
console.log(totalLetters(what));

// Problem given a paragraph of text. Fit it in a 25 character wide column. You can't cut a word in half.



/******************************************************/
//SOLUTION FOR keyValue problem
var cityInfo = {
    city: 'Denver',
    state: 'Colorado'
}

function keyValue2(key,value){
 var object = {}
object[key]=value

//object['city']='Denver'
}
console.log(keyValue2('city', 'Denver'))



// HERE ARE THE SOLUTIONS I TRIED TO GET THE SOLUTION:

// function keyValue(a,b){
   
// var object = {
//     a : b
// }
// return object;
    
// }
// console.log(keyValue('city', 'Denver'));


//2nd attempt

//shows value of 2?
// var object2 = [{}];

// function keyValue2(a){

// return object2.push(a)

// }
// console.log(keyValue2('city'))


/******************************************************/
//SOLUTION FOR NegativeIndex
 var array1 = ['a','b','c','d','e']
 var number1 = -2;
 
function negativeIndex(array, number){

var end = array.length 

var getIndex = end + number;

return array[getIndex]

}


console.log(negativeIndex(array1, number1));

console.log(negativeIndex(['jerry','sarah','sally'], -1));


//OR




function negativeIndex(array, number){

var end = array.length 

var getIndex = end + number;

return array[getIndex]

}


console.log(negativeIndex(['a','b','c','d','e'], -2));



/******************************************************/
//SOLUTION #1 FOR NegativeIndex


function removeM(word){
  var wordChange =  word.replace('m', '')
  return wordChange
}
console.log(removeM('family'))
console.log(removeM('memory'))

/******************************************************/
//SOLUTION #2 FOR NegativeIndex

function removeM(word){
    for(var i = 0; i<word.length; i++){
       str = word.replace('m', '');
    }
    return str
}
console.log(removeM('family'))


// I want to figure out why this isn't working.
function removeM(word){
    for(var i = 0; i<word.length; i++){
        console.log(word[i])
        if(word[i] === 'm') {
          return ' '
        }
    }
}
console.log(removeM('family'))



/******************************************************/
//SOLUTION FOR PrintObject

function printObject(argument){

    console.log(argument)
   var object = {};
 

// console.log('key:' +key + 'value:'+ value +)
}


printObject({ a : 10, b : 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops'})



console.log(hi[0])

var x= ['a']

x.push('b')

console.log(x)




var words = 'Hello Tyson this is your test to see if you can figure out Steve\'s problem. He has a text field that can only fit 25 words in a column but there are more characters than space. So figure out how to break it in an even column.'


// 1st at figure out 25 characters
// 2nd make sure you don't break words so back track to a space by words.'

function count(letters){

letters.split(' ').length
for(var i = 0; i > length; i++){

}
   
console.log(letters)
}

count(words);
