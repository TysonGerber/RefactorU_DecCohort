var numArray = [1,2,3,4,5]

function addThemAll(numbers){
   var sum = 0
for(var i=0; i<numbers.length; i++){
    sum += numbers[i]
  
}
 return sum / numbers.length; 
}

console.log(addThemAll(numArray));


