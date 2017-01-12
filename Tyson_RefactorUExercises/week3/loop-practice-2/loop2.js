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



var js= ['javascript', 'is', 'awesome']
var what = ['what', 'happened', 'to', 'my', 'function']

var jsletters = js.toString().split(',')
function totalLetters(letters){
    for(var i=0; i<js.length; i++){
      return  jsletters.length
    }
} 
console.log(totalLetters(js))