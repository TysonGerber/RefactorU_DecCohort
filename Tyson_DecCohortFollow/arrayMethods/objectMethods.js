
for (var key in object) {
    console.log(key+' is '+object[key])
}

//*******************EXAMPLE 1***************************/
var printMe = 'hello'


var object = function(obj){
    var tiger = obj;
 for(var stripes in tiger){
console.log(stripes + ' is '+ tiger[stripes])
 }
}
object(printMe)


//*******************EXAMPLE 2***************************/
var printMe = [
     10,
     20,
     30,
     'a',
     'b',
     'c'

]

var object = function(obj){
    var tiger = obj;
 for(var stripes in tiger){
console.log(stripes + ' is '+ tiger[stripes])
 }
}
console.log(object(printMe))


//*******************EXAMPLE 3***************************/
var printMe = {
    a: 10,
    b: 20,
    c: 30,

}

var object = function(obj){
    var tiger = obj;
 for(var stripes in tiger){
console.log(stripes + ' is '+ tiger[stripes])
 }
}
console.log(object(printMe))

//*******************EXAMPLE 4***************************/

for(var stripes in tiger)

TIGER:

stripes:  tiger[stripes]
    A:    10
    B:    20
    C:    30