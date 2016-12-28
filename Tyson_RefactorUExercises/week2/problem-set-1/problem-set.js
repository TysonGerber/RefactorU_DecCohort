/*******************************************************
 * 
 * EXERCISE 1
 * 
 ******************************************************/
 

/* Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. 
You can assume that words in the input string will be separated by only one space.
*/

// var str = prompt('write a sentence')

function letterCapitalize(string){
  var letterCap = string.toLowerCase().slice()
    // console.log(letterCap)
  var capFirst = letterCap.split(' ')
    // console.log(capFirst)
var array = [];
for (var i = 0; i < capFirst.length; i++){
    // console.log(capFirst[i][0].toUpperCase())
    var firstCap = capFirst[i][0].toUpperCase() + capFirst[i].substring(1)
     
      array.push(firstCap)
}
    // for(var i = 0; i < capFirst.length; i++){
    //   capFirst.join(' ')
    //   console.log(capFirst)
    // }
     console.log(array.join(' '))
}
letterCapitalize('thIs iS My seNTence')


/*******************************************************
 * 
 * EXERCISE 2
 * 
 ******************************************************/
 



/* Write a function called wordCount which takes a single string parameter and 
returns the number of words the string contains (ie. "Never eat shredded wheat"
 would return 4). You can assume that words in the input string will be separated 
 by only one space.
*/

function wordCount(string) {
  var stringCopy = string.slice()
  var stringArray = stringCopy.split(' ')
  console.log(stringArray.length)

}
wordCount('Never eat shredded wheat')


/*******************************************************
 * 
 * BONUS EXERCISE
 * 
 ******************************************************/
 



/* Bonus: Write a function called primeTime that takes a single number parameter and returns true if the parameter is
 a prime number, otherwise false. The range will be between 1 and 216.
*/


function primeTime(number){
if(number <= 216 && number >= 1){ 
  console.log(number) 
  console.log(true);
}else{
  console.log(false);
}

}
primeTime(2)
primeTime('hello')

/*******************************************************
 * 
 * MY BONUS EXERCISE
 * 
 ******************************************************/
 
//Loop throught the string and when you find the word bad replace it with the word good
function changeWord(string){
  var copyString = string.toLowerCase().slice()
  var arrayString = copyString.split(' ')
  for (var i = 0; i < arrayString.length; i++){
    if(arrayString[i] == 'bad'){
      arrayString[i] = 'good' 
    }
    
    console.log(arrayString)
  }
}
changeWord('this is bad')





































function titleCase(str) {
     words = str.toLowerCase().split(' '); //split on empty string will split on each letter and then on the for loop will loop through each letter. // split with space will split it between the spacea then runs throught the for loop.

     for(var i = 0; i < words.length; i++) {
          var letters = words[i][0].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
}
titleCase("I'm a little tea pot");




// THIS ONLY CAPITALIZES THE FIRST LETTER IN THE WHOLE STRING.
function letterCapitalize(cap){
    for(var i = 0; i < cap.length; i++){
      return cap.charAt(0).toUpperCase() +cap.slice(1)
    }
}
letterCapitalize('capitalize every first letter of every word in this sentence.')












































