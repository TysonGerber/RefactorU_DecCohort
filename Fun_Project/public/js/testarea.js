// Getting the average number of something.
var numArray = [1,2,3,4,5]

function addThemAll(numbers){
   var sum = 0
for(var i=0; i<numbers.length; i++){
    sum += numbers[i]
  
}
 return sum / numbers.length; 
}

console.log(addThemAll(numArray));


function add(a,b){
return  a + b
}

add(3,4);
add(4,5)




// function inside of function and scope 
// var outer = function(){
//     var foo =10
//     var inner = function(){
//         console.log(foo)
//     }
// }
// return inner

// var doStuff = outer()

// doStuff();