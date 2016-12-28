
var classroom = ['Rob', 'Tyson', 'Sean', 'Charlie', 'Anthony', 'Monali', 'Richard', 'Alex', 'Jeremy'] 

var sortClass = classroom.sort(function(a,b){
return a.length < b.length;
})

console.log(classroom)
console.log(classroom.sort()) 
console.log(classroom.sort())



var scores = [1, 10, 21, 2]; 
scores.sort(); // [1, 10, 2, 21]
// Watch out that 10 comes before 2,
// because '10' comes before '2' in Unicode code point order.

scores.sort()


var kungFury = ['tiger', 'mantis', 'panda', 'crane', 'turtle']

var capName = function(el,  index){
    //return el.substring[0,1]
    // el.charAt(0)
    return el[0].toUpperCase() + el.substring(1)      
    }

    var capNameArr = kungArray.map(capName)


    //////////////////////////////////////////////////////////////

    Impure 

    var i = 0;
    var counter = function(){
        console.log(i)
    }
    counter();
    console.log(i)

    Pure
    
    var i = 0;
    var counter = function(i){
        console.log
    }
    counter(i);
    console.log(i);

    var i = 0;
    car counter = function(i){
        var s = i +1;
        console.log(s);
    }
    counter(i)
    console.log(i);

   // .splice() makes a copy
   // .clone() makes a copy as well.
   // .map(//takes a call back function) 

    try to assign to a string address.a
    var hi = hello;
    var[0]

    javascript will be noth