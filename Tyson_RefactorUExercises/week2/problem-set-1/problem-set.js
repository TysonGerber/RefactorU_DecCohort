/* Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. 
You can assume that words in the input string will be separated by only one space.
*/




function titleCase(str) {
     words = str.toLowerCase().split(' ');

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












































