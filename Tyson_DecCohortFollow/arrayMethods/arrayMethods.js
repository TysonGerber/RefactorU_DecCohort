// Everything is an object. array, strings.

//array property you will use is length

function example1() {
    var example = ['bye', 'hello', 'tyson', 'say']
    console.log(example)
    for (var i = 0; i < example.length; i++) {
        var word = example[i]
        console.log(word + ' is ' + word.length + ' characters long.')

        for (var j = 0; j < word.length; j++) {
            var letter = word[j]
            console.log(letter)

        }
    }
    return true
}
example1()

// i = 0  j=0
//     0   1
//     0   2
//     1   0
//     1   1
//     1   2

//filter() loops an creates a subset of the 1st array. of elements that meet a certain condition  W3 schools example
// filter() is good for creating a subset of an array.
var ages = [32, 33, 16, 40]

//named function
function checkAge(age) {
    // return age >= 18
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

if (checkAge(13)) {
    console.log("allowed in the bar")
}

var adults = ages.filter(checkAge)

//annonymous function
var adults = ages.filter(function (age) {
    return age >= 18
})



//vanilla javascript how to do a filter without using the .filter() method
var ages = [32, 33, 16, 40]
var adults = [];

for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        adults.push(ages[i])
    }
}
console.log(adults)



// functions are the only ones that use return/ return can only do one time.
// (typically) don't want to return in the middle of the loop.

//forEach()//MDN example
var ages = [32, 33, 16, 40]

ages.forEach(function (el) {
    console.log(el)
})


for (var i = 0; i < ages.length; i++) {
    console.log(ages) //just prints out the array 4 times (NOT WHAT YOU WANT!!!)
    console.log(ages[i]) // each element in the array
}

//indexOf()

var ages = [32, 33, 16, 40]

var index = ages.indexOf(16)

console.log(index)



//join() takes an array and turns the array in to a strings
var fun = function () {
    var ages = [32, 33, 16, 40]

    var string = ages.join(' ')
    console.log(string)
    var array = string.split(' ')
    return array
}

console.log(fun());


//map() kind of like a loop runs a function on each element on the array. MDN example

var myAges = [32, 33, 16, 40]

var func = function (ages) {
    var twiceAsOld = ages.map(function (age) {
        return age * 2
    })
    return twiceAsOld
}
console.log(func(myAges))


//pop()

var myAges = [32, 33, 16, 40]

 var midlife =  myAges.pop()
console.log(midlife)
//push()

var retirement = 65;

     myAges.push(retirement)

     console.log(myAges)

//shift()

// same as pop but shifts the 1st element of the array which would be 32

//unshift()
// same as push add to the front of the array

//reverse() reverses the order of the elements

var reverse = [1,2,3,4,5]

var num = reverse.slice().reverse()

console.log(num)

//slice() takes selects a part of an array that you choose and returns just that section. slice (2,5)

var slicing = ['Tyson', 'Steve', 'Rob', 'Martha']

var newSlice= slicing.slice(1,3)

console.log(newSlice)

//Martha Steve Rob Tyson

var slicing = ['Tyson', 'Steve', 'Rob', 'Martha']

 var slice = slicing.slice() //Martha taken off    Tyson Steve Rob  Pop = Martha
var Martha = slice.pop()
var Tyson= slice.shift()
slice.push(Tyson)
slice.unshift(Martha)

console.log(slice)
 
  //Tyson taken off Steve Rob Martha Shift = Tyson


//sort() give it a function, -1 0 or 1 how you want to sort your array.

var num = [1, 10, 2, 15, 6]
var alpha = ['b','a','g','d']

var newNum = num.slice()

var numericSort= function(a,b) {
    if(+a < +b){
        return -1 
    }else if (+a == +b){
        return 0
    }else if (+a > +b){
        return +1
    }

}

// = IS AN ASSIGMENT
// == IS AN COMPARISON

alpha.sort() //alphabetically by default
console.log(num.sort(numericSort))  //1,10,15,2,6
console.log(alpha) //a,b,d,g



// EXAMPLE #2 SORT()


var num = [1, 10, 2, 15, 6]
var alpha = ['b','a','g','d']

var newNum = num.slice()

var numericSort2= function(a,b) {

    return a-b 
}
            // 1-10 = -9 // make the 1 before the 10 
            // 1-1 = 0   // don't change them
            // 10-1 = -9 // make the 10 before the 1
            // if(+a < +b){
            //     return -1 
            // }else if (+a == +b){
            //     return 0
            // }else if (+a > +b){
            //     return +1
            // }


    // 
console.log(num.sort(numericSort2))

//splice() (rarely used) you tell it where to insert into the array. fruits.splice(2, 0 , "lemon", kiwi)

var myFish = ['angel', 'clown', 'mandarin', 'trout' ]

myFish.splice(3,0,'goldfish')

console.log(myFish) //[ 'angel', 'clown', 'mandarin', 'goldfish', 'trout' ]

myFish.splice(2,1)

console.log(myFish) //[ 'angel', 'clown', 'goldfish', 'trout' ]




//EXAMPLE 2
var myFish = ['angel', 'clown', 'mandarin', 'trout' ]


   var angel = myFish.splice(0,1) //angel off
    console.log(myFish) //angel
    myFish.splice(3,0,angel[0]) //angel on the end
    console.log(myFish)
   var trout = myFish.splice(2,1) //takes trout off
    console.log(myFish)
    myFish.splice(0,0,trout[0])// put trout at front
    console.log(myFish)
    