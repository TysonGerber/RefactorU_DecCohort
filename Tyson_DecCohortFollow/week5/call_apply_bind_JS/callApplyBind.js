//********************Built in Methods for Functions.****************************//

//*******************************CALL***********************************************

var alice = {
    name: 'alice',
    lazyGreeting: function(){
        //console.log(this)//refers to the OBJECT alice (var alice)
       // console.log(this.name)// refers to the name property
        var localFunc = function(){ // bacause this function is not attached to an object we lose the functionality to this.
            console.log(this.name)
        }  
        // localFunc 
        localFunc()    
    }
}
alice.lazyGreeting()




// Scope inheritance
// var outer = function(){
//     var foo = 10
//     var mid = function(){
//         var inner = function(){
//             console.log(foo)
//         }
//        inner()
//     }
//     mid()
// }
// outer()

// KNOW ABOUT CALL, APPLY, AND BIND.

// call is a method that all functions have. (the call method is used to invoke the function)
//the call method can be used to invoke a function with a forced value for this.


var sayHello = function(){
    console.log(this.name)
}
//sayHello() //undefined

// var alice = {
//     name: 'alice',
//     sayHello: sayHello // on the left the sayHello is referring to the name of property and the one on the right is referring to the function above.
// }



var alice = {
    name: 'alice'
}

sayHello.call(alice)


//call takes at least one argument (this) 

//numbered indices and length.

var logStringNumberThis = function(a, b){
    console.log(a)
     console.log(b)
      console.log(this)
}

// this first argument passed to call is our value fo this. the latter arguments
logStringNumberThis.call('foo', 'hello', 10) // foo is the value of this. The 1st argument will be 'hello', 2nd will be 10


var foo = function() {
    console.log('foo')
}
//our functin foo doesn't care about it's 'this value, so using call like this has no meaningful effects.
foo.call('whatever')


//*******************************APPLY***********************************************

var numbers = [1,10,9,5,13,24,67]

//console.log(Math.max(2,7,13,20,4));; // Math.max takes a comma separate  list not an arry. how can we feed our numbesrs array into Math.max?

// apply is identical to call, except it only takes 2 arguments.
// first arugment is a forced value for this, and the second argument is an array that contains the arguments to the original function
//console.log(Math.max.apply(null,[1,10,9,5,13,24,67]))
console.log(Math.max.apply(null, numbers))
 // the anser to the question of 'when do I use call vs apply?' has little to do with 'this', and more to do with what's the most convenient way to pass arguments into the original function: comma separated list (call) or an array (apply)?

// get comfortable with recruiters and ask if they can go through technical interviews.


//*******************************BIND***********************************************

//bind does not invoke the original function immediately
//instead, bind returns a new function, with a forced value for this.


var sayHello = function(excited){
    if(excited){ var ending = '!'}
    else{var ending = '.'}
    console.log(this.name + ending)
}

var alice = {
    name: 'alice'
}

var bob = {
    name: 'Bob'
}


// sayHello()
var bobSaysHi = sayHello.bind(bob)
//console.log(bobSaysHi)  //console.logs the function
console.log(bobSaysHi())

var carlos = {
    name: 'carlos'
}
var carlosIsHappyToMeetYou = sayHello.bind(carlos, true)

carlosIsHappyToMeetYou()







var alice = {
    name: 'alice',
    lazyGreeting: function(){
        var localFunc = function(){ 
            console.log(this.name)
             }.bind(this)  
  
        localFunc()    
    }
}
alice.lazyGreeting()


// do a lot of junior dev.
