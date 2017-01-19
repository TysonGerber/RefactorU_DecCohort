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

//push()

//shift()
//unshift()

//reverse() reverses the order of the elements

//slice() takes selects a part of an array that you choose and returns just that section. slice (2,5)

//sort() give it a function, -1 0 or 1 how you want to sort your array.

//splice() (rarely used) you tell it where to insert into the array. fruits.splice(2, 0 , "lemon", kiwi)

