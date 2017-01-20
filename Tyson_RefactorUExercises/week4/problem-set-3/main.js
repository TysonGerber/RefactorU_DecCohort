//PALINDROME PROBLEM #1


var palindrome = function (string) {
  var array = string.split('')
  var reverse = array.reverse()
  var wordReverse = reverse.join('')

  if (wordReverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome('racecar'))
console.log(palindrome('hi'))
console.log(palindrome('123456'))


//PALINDROME PROBLEM #1 SECOND EXAMPLE
var palindrome = function (string) {
  return string = string.split('').reverse().join('')
}
console.log(palindrome('racecar'))
console.log(palindrome('hi'))
console.log(palindrome('123456'))



//DASHINSERT PROBLEM #2 

function odd(str) {
  var array = str.split('')
  // console.log(array)

  var arrayNum = []
  for (var i = 0; i < array.length; i++) {
    //  var num = parseInt(array[i])
    arrayNum.push(parseInt(array[i]))

  }
  //  console.log(arrayNum)
  var emptyString = ''
  var newNum = arrayNum
  for (var i = 0; i < newNum.length; i++) {
    //  console.log(newNum[i],newNum[i+1])
    if ((newNum[i] % 2 == 1) && (newNum[i + 1] % 2 == 1)) {
      //console.log(newNum[i], '-', newNum[i+1])
      emptyString += newNum[i].toString() + '-'
    } else {
      emptyString += newNum[i]
    }

  }

  return emptyString
}

console.log(odd('454793'))


//DASHINSERT PROBLEM #2 SECOND EXAMPLE

var dashInsert = function (num) {
  var numStr = num.toString().split('');
  console.log(numStr);

  for (var i = 0; i < numStr.length - 1; i++) {
    console.log(numStr[i]);
    if ((numStr[i] % 2 != 0) && (numStr[i + 1] % 2 != 0)) {
      numStr.splice(i + 1, 0, "-");
      i++
    }
  }
  return numStr.join('')
}

// console.log(dashInsert(1234538))

function isOdd(num) { return num % 2; }
console.log("1 is " + isOdd(1));
console.log("2 is " + isOdd(2));
console.log("3 is " + isOdd(3));
console.log("4 is " + isOdd(4));

function isEven(n) {
  return n % 2 == 0;
}
isEven(5)
isEven(4)



// function cesarCipher(str, num) {
//   var array = [];

// for(var i = 0; i <str.length; i++){
// //str.charCodeAt goes from letter to number
//  if(str[i].charCodeAt() >= 65){

//     var changeLetter = array.push(str[i].charCodeAt()+num)
//  }else if(str[i] == str[i].toUpperCase && str[i].charCodeAt() > 90){
//  console.log(str[i])
//  }else{
//      array.push(str[i].charCodeAt())
//  }
// }
// return array

// }
// console.log(cesarCipher('C',2))



// function cesarCipher(str, num){
//   var array = str.split('')
//   console.log(array)
//   var unicode = []
//   var newLetter = []
//   for(var i = 0; i < array.length; i ++){
//   unicode.push(array[i].charCodeAt()+num)
//   }
//   console.log(unicode)

//   // for(var i = 0; i < unicode.length; i++){

//   // newLetter.push(String.fromCharCode(unicode[i]))
//   //  var alpha = newLetter.join('')
//   // }
// unicode.forEach(String.fromCharCode)
// //console.log(alpha)

// }

// console.log(cesarCipher('"Caesar Cipher"',2));




//new


function cesarCipher(str, num) {
  var array = str.split('')

  var unicode = []
  var newUnicode = []
  var alpha = []
  for (var i = 0; i < array.length; i++) {
    unicode.push(array[i].charCodeAt())
  }
  console.log(unicode)

  for (var i = 0; i < unicode.length; i++) {
    if (unicode[i] >= 65 && unicode[i] <= 90) {
      newUnicode.push(((unicode[i] - 64 + num) % 26) + 64)

    } else if (unicode[i] >= 97 && unicode[i] <= 122) {
      newUnicode.push(((unicode[i] - 96 + num) % 26) + 96)
    } else {
      newUnicode.push(unicode[i])
    }
        console.log(newUnicode)
  }

    for (var i = 0; i < newUnicode.length; i++) {
      alpha.push(String.fromCharCode(newUnicode[i]))
    }

  
  // sArray = []
  // return sArray.push(newUnicode.forEach(function(data){String.fromCharCode(data)}))
  console.log(alpha)
  var alphaStr = alpha.join('')
  console.log(alphaStr)
}


console.log(cesarCipher('"Caesar Cipher"', 2));








// console.log('a'.charCodeAt[0])

//      console.log(str.charCodeAt())






console.log(String.fromCharCode(65 + 2))
