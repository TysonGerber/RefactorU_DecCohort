//////////////////////////////////////////////////////////////////////////////

                    //LOOP PRACTICE

//////////////////////////////////////////////////////////////////////////////


// print: 1,2,3,4,

for(var i = 0; i < 5; i++){
    console.log(i);
}


// print: 0, 100,200,300,400,500

for(var i = 0; i < 550; i+=100){
    console.log(i);
}

// print: 1,2,4,8,16,32,64

for (var i = 0; i<65; i+=2){
    if(i % 2 == 0){
        console.log(i)
    }else
    console.log('this didn\'t work')
}

//print 1,1,1,2,2,2,3,3,3
var arry = [];
for(var i = 1; i < 4; i++){
arry.push(i,i,i)

}
console.log(arry)
console.log(arry.toString())
console.log(arry.splice(','))


// var arry = [];
// for(var i = 1; i < 4; i++){
// arry.push(i,i,i)

// var arryRemove = arry.replace(/,/g, "");

// }
// console.log(arrRemove)
// console.log(arryRemove.toString())


//print 1 1 1 2 2 2 3 3 3
var arry = [];
for(var i = 1; i < 4; i++){
arry.push(i,i,i)

}
console.log(arry)
console.log(arry.toString().split(',').join(' '))

// print: 0,2,4,6,8,10

for(var i = 0; i < 11; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

// print 3,6,9,12,15

for(var i = 3; i < 16; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

// print 9,8,7,6,5,4,3,2,1,0

for(var i = 9; i >= 0; i--){
    console.log(i)
}

// print 0,1,2,3,0,1,2,3,0,1,2,3

var count = function(){
    var array = [];
    for(var i = 0; i < 3; i++){
       
        for(var i2 = 0; i2 < 4; i2++){
             array.push(i2)
        
        }
        
    }
    return array;


}   
console.log('count variable equals: ' + count())


// print 0,0,0,0,1,1,1,1,2,2,2,2

var count = function() {
    var array = [];
    for(var i = 0; i < 3; i++){
        for(var j= 0; j < 4; j++){
            array.push(i)
        }
    }
    return array;
}
console.log('count variable equals: ' + count())
// think nested loop if you have a pattern inside a pattern


//print 4,4,2,2,0,0


var evenNumbers = function(){
    var array = [];
    for(var j = 0; j < 5; j++){
        for(var i = 0; i < 5; i++){
        if (i % 2 == 0){ 
                array.push(i,i) 
    var arrayReverse = array.slice().sort(function(a,b){
        if(a < b) {return 1}
        else if (b < a) {return -1}
        else if (b === a) {return 0}
    })
        }         
            }
            console.log(array)
        return arrayReverse;
    }
}
console.log(evenNumbers())
