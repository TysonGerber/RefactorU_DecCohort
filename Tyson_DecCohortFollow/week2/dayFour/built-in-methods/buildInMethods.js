/*************************************************************
  
                BUILT IN METHODS 
 
 *************************************************************/

///////MAP METHOD////////////

//.map() example #1
var words = ['hi', 'bye', 'whatever']

var capitalWords= words.map(function(element){
    return element.toUpperCase()
})

console.log(capitalWords)

//.map() example #2
var numbers = [1,2,3]

var numberMulitiplied = numbers.map(function(element){
    return element * 10;
})
console.log(numberMulitiplied)


//.map() example #3

var capitalizeWords = function(element){
    return element.toUpperCase()
}

var addExcitement = function(element){
    return element + '!!!!'
}

var words = ['hi', 'bye', 'whatever']
// this code is more readable because I use verbs for my functions and plural nouns for arrays.
var cappedExcitedWords = words.map(capitalizeWords).map(addExcitement)

console.log(cappedExcitedWords)



///////// PUSH METHOD////////////


//.pop() 
var foods = ['bannanas', 'apples', 'potatoes', 'chicken']
console.log(foods[foods.length-1])// log the last item of the array, but don't change it.


var theLastItemFromTheFoodArray = foods.pop()//.pop() example #1 // removes last item and also returns it.
console.log(theLastItemFromTheFoodArray) //should log 'chicken'
console.log(foods)

//.push() 

foods.push('chicken') // adds chicken back to the end of the array.

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-==-=--==-=-=-=-=--=')


///////// SHIFT & UNSHIFT METHOD////////////

var firstItemOfTheArray = foods.shift()
console.log(foods)
console.log(firstItemOfTheArray)
foods.unshift('bannanas')
console.log(foods)


///////// REVERSE METHOD////////////

//******* READ ME: manipulates the original array and returns the new array. ******/
//this is a destructive function.
var numbers = [1,2,3,4,5]
numbers.reverse()
console.log(numbers)
console.log(reversedNumbers)
var numbersChange = numbers // this does not actually copy the array, it creates a second name that refers to the same array.

///////// SLICE METHOD////////////

//this is a shallow copy. meaning that we can change things in the array. However, if there are objects in the array then it will effect the original objects as well. (in this case var numbers)
console.log(numbers.slice(2,4)) // returns a new array with what you would like to keep
console.log(numbers.slice().reverse())// the slice method lets us quickly copy this array so that we don't have to modify the original numbers array.
 
console.log(numbers)

// numbers is just a reference to the array.



///////// JOIN METHOD////////////
//.join()

//you an an array and you want to turn it into a string you use join.
var words = ['This', 'is', 'a', 'sentence.']
var sentence = words.join(' ')
console.log(sentence)

///////// SPLIT METHOD////////////

//split tells you where you want to split the string
//.split()
var words = ['This', 'is', 'a', 'sentence.']
var sentence = words.join(' ')
console.log(sentence) //turns each array element into a string
var wordsAgain = sentence.split(' ') //turns string into an array
console.log(wordsAgain)


///////// IndexOf METHOD////////////


//tells you where in the array that thing you want is at in the array
//.indexOf()

var letters = ['a','b','c','d',]
var positionOfC = letters.indexOf('c')
console.log(postionOfC)
var wheresF = letters.indexOf('f')
console.log(wheresF)



//
var myArray = [];
myArray[2] = 10
myArray[5] = 20

for (var i = 0; i < myArray.length; i++){
    console.log[i]
}


///////// forEach METHOD//////////// is like a forloop for arrays // simpliar example of map


/* differences between MAP and forEach*/

/******* MAP ********/
// map you loop over the array apply the callback function to each element of the array. then returns some value at the end of the call back. map returns a new array containing the values returned from the call back.


/******* forEach ********/

//forEach you loop over the array apply the callback function to each element of the array

//tells you where in the array that thing you want is at in the array
//.forEach()

var words2 = ['']
words.forEach(function(element){
    console.log(element)
})




///////// FILTER METHOD////////////   Loops through an array pass a call back function

var dogs = ['cody','fluffy','snickers',]

//.filter()

var s_dogs = dogs.filter(function(element){
if (element[0] === 's') {
    return true;
} else if (element[0] !== 's'){
    return false;

}
})
console.log(s_dogs)



///////// SORT METHOD////////////   DIDN'T FIGURE THIS ONE OUT

var numbers2 = [1,2,10,9,11,22,14]
//normally, we pass a callbak function into sort to describe how we want to sort.

//without a callback function that sorts the method perfoms an alphabetical sort

console.log(numbers.slice().sort())//slice returns a copy of a new array and then sorting it. Not the original numbers array.

//.sort()

/*
    3 possible cases when sorting: 
        a should be before b? return a positive numbers
        b should be before a? return a negative numbers
        don't care? return 0
*/
console.log(numbers.slice().sort(function(a,b){
    if(a >b) {return 1}
    else if (b > a){return -1}
    else if (b === a) {return 0}
}))



///////// FIND METHOD////////////   DIDN'T FIGURE THIS ONE OUT



//.find()

// var players = ['player1', 'player2', 'Detheus', 'player4',]
// var findPlayers = players.find('aye')
// console.log(findPlayers)






///OBJECTS  are unordered. meaning name, age, and job might not console.log the same way it is in your object. In chrome it will, however in other browsers it might not.
// 

var alice = {
    name: 'alice',
    age: 16,
    job: 'dog walker',
}

for (var key in alice){   // object we are looping over is alice. we are going to be looping every key in alice's obj. property refers to in this case the name: 'alice' the key/value pairs. we are looping through the key's.
console.log(detailAboutAlice)
}



// lockers (they don't have labels) if I asked you to get my text book for me? you start at the first locker and keep going until you find it. Well if you have 1,000 lockers it might take a while. Same as in programming 

// if alice had 1,000 key:value pairs it would take a long time to loop through more efficent is if you know the name of the property do alice.name
var alice = {
    name: 'alice',
    age: 16,
    job: 'dog walker',
}

console.log(alice.name)


var hello = 'hello'

for(var i = 0; i<hello.length; i++){
    console.log(hello[i])
}

//test by putting into the console.

console.log(JSON.stringify({name: 'alice'}))
console.log(JSON.parse('{"name": "alice"}'))
console.log(JSON.stringify(4))//turns it into a string.
console.log(JSON.stringify([1,2,3]))//again turns it into a string.



//this is a shallow copy. meaning that we can change things in the array. However, if there are objects in the array then it will effect the original objects as well. (in this case var numbers)
var alice = {name:'alice'}
var bob   = {name: 'bob' }

var people = [alice, bob]
var backwardsPeople = [bob, alice]

console.log(people)
console.log(backwardsPeople)
people[0].age = 30
console.log(people)
console.log(backwardsPeople)


// same thing when you return the obj your returning the original carlos modify's the original obj itself
var carlos = {name: 'carlos'}

var capitalizeName = function(obj){
    obj.name = obj.name.toUpperCase()
    return obj
}

var capCarlos = capitalizeName(carlos)
console.log(carlos)


var tyson = {name: 'tyson'}

var capitalizeName = function(obj){
    // return {
    //     name: obj.name.toUpperCase()
    // }

    var newObj ={
        name: obj.name.toUpperCase()
    }
    return newObj
}

newObj = capitalizeName(tyson)
capitalizeName(tyson)
console.log(tyson)
