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












































