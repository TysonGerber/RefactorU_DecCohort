# Built-in Methods

,,,

arrays: push, pop, split, indexOf, forEach, map, filter, sort
strings: split, subString, 
numbers: ??? toString
objects: ???

How much do we care about the thing we just popped off?

var myStuff = [1,2,3]
myStuff.pop()
var lastItem = myStuff.pop()

//map example
var words = ['hi', 'bye', 'whatever']

var capitalWords= words.map(function(element){
    return element.toUpperCase()
})