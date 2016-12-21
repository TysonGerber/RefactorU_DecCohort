/*********************************
TripleFive exercise
 *******************************/


var tripleFive = function(){
    for(var i = 0; i < 5; i++){
        console.log('Five!');
    }


}
tripleFive();

//////////////////////////////////////////
//Same example as above
/////////////////////////////////////////

var output = '';
var tripleFive2 = function(){
   
    for(var i = 0; i < 3; i++){
        output += 'Five!';
    }
console.log(output);

}
tripleFive2();


/*********************************
 Examples
 *******************************/

function simpleLoop() {
    for (var i = 1; i <= 20; i++) {
        if(i % 2 === 0) console.log(i + " is even!");
    }
}
simpleLoop();



//Simple function 
// function lastLetter(s){

//  var msg = s.length
//  console.log(msg);
//  console.log(s);
// }

// lastLetter("Hello");



/*********************************
 Last Letter
 *******************************/



function lastLetter(s){
    var msg = s.substr(s.length -1);
   console.log(msg);
}
lastLetter('Hello There')
lastLetter('Hello')
lastLetter('Island')





/*********************************
 Square exercise
 *******************************/




function square(number1,number2){
    var n1 = number1 * number2;
    console.log(n1);
}
square(3,3);
square(5,5);



/*********************************
 Square exercise
 *******************************/




function square(number){
    
    console.log(number * number);
}
square(3);
square(5);





/*********************************
 Negate exercise
 *******************************/



function negate(number){
   
   if (number == Math.abs(number)){ 

      console.log(-Math.abs(number));

   } else
        console.log(Math.abs(number));
    }
    
negate(5);
negate(-8);


/*********************************
 Function Array exercise
 *******************************/


function toArray(one, two ,three) {
    console.log([one, + two, + three]);
    
    // console.log((Array.from(one)) + (Array.from(one)) + (Array.from(one)));
}


toArray(1,4,5);
toArray(8,9,10);

////////////////////////////////////////

var toArray2 = function(a,b,c){
    var myArr = [];
    myArr.push(a,b,c)
    return myArr;
}

toArray(1,4,5);
toArray(8,9,10);

////////////////////////////////////////

var toArray3 = function(a,b,c){
    var myArr = [];
    for(var i = 0; i <arguments.length; i++){
        myArr.push(arguments[i])
    }

    return myArr;
}


/*********************************
 Function startsWIthA exercise
 *******************************/

function startsWithA(name) {
if (name.charAt(0) === 'a') {
    console.log(name);
    }else {
    console.log('I am sorry, ' + name + 'does not start with an A.')
    } 
}
startsWithA("aardvark");
startsWithA("bear");
startsWithA("shark");
startsWithA("alligator");

////////////////////////////////////////////
var first = function(string){
    first = string[0].toUpperCase();
    if (first === 'A'){
        return true;
    }else {
        return false;
    }
}


/*********************************
 Function Excite exercise
 *******************************/



function excite(exclamation) {
    console.log(exclamation + "!!!");
    }

excite('yes');
excite('go');


function excite(exclamation) {
    return exclamation + "!!!";
    }

excite('yes');
excite('go');


/*********************************
 Function Sun exercise 2
 *******************************/


function sun(name){
    return name.includes('sun');
}
console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('hello'));



/*********************************
 Function Tiny exercise
 *******************************/


function tiny(num){
    if(num >=0 && num <=1){
    return true;
    } else {
        return false;
    }
}

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));
console.log(tiny(0));
console.log(tiny(1));
console.log(tiny(-0.5));






/*********************************
Time exercise
 *******************************/




function time(z){
    return ((z[0]*600) + (z[1]*60) + (z[3]*10) + (z[4]*1));
}
console.log(time("01:30"));
console.log(time("10:25"));


12:35 = 12 minutes 35 seconds. 

// How many seconds in ? 5 seconds
// How many seconds? = 30 (seconds as well)  
// How many seconds in a min? = 60 
// How many seconds in an hour? 600
