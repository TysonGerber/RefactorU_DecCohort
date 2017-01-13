// Object oriented programming

// what is 'this'? it's a variable, but its value changes dynamically
// normally, 'this' refers to the object that the function is attached to. the "host object"
// if the function is not attached to any particular object, then 'this' refers to the global object (in browsers, this is the window)

var whoAmI = function(){
    console.log(this.name)
}
// whoAmI()

var alice = {
    name : 'alice',
    whoAmI : whoAmI
}

//'this' is context sensitive. Just like the pronoun 'I' depends on who says it.
// alice.whoAmI()
alice.whoAmI()

var outer = {
    name: 'outer',
       whoAmI : whoAmI,
       inner : {
           name: 'inner',
           whoAmI: whoAmI
       }
}
outer.whoAmI()
outer.inner.whoAmI()
//////////////////////

 
//OOP (object oriented programming)lets us define CLASSES which is a like a blueprint (or a factory) for making objects
// individual objects that are created from that blueprint are called INSTANCES of that CLASS
//The process of making instances is called INSTANTIATION.

var Cat = function(name, species, angerLevel, meow, looks){
     // since we will invoke this function with 'new', this will be an empty object, which is automatically returned
    // var this = {}. 'this' no longer cares what object this function is attached to
    this.name = name
    this.species = species
    this.angerLevel = angerLevel
    this.meow = meow
    this.looks = looks
   // this technically works, but it's not efficient if we have 1000's of cats
    // this.yell = function(){
    //     console.log(this.name + " says " + meow + ".")
    // }
        
    // return this
}

// In Javascript every function has a prototype. it is an object that is attached to that function that shares behaviors of that instance of that class.
var felix = new Cat('felix', 'cartoon', 4,'me-ow', 'tuxedo')

// console.log(Cat.prototype)
console.log(felix)

// invoking this function with the 'new' keyword makes this function behave like a constructor function.
Cat.prototype.yell=function(){
    console.log(this.name + 'says: ' + this.meow + '.')
}
//Cat.prototype.yell()  // you would never call a method directly off the prototype (You would never do this)
// console.log(felix)
felix.yell()



// console.log(object)
//These are the same thing
// var myObj = new Object()
// var myObj = {}

// inheritence and objected oriented programming

// EVERY FUNCTION HAS A PROTOTYPE and PROTOTYPE is an object that every function has.

//explain oop what would you say or key points? how would you explain oop
//Private and Static Methods. (most people don't try to make private methods. )


















