var doFirstThing = function(){
    setTimeout(function(){
        console.log('did the first thing')
        doSecondThing()
    }, 2000

    )}
 
 

    var doSecondThing = function(){
    setTimeout(function(){
        console.log('did the second thing')
        
    },1000

    )}
    doFirstThing()
 
