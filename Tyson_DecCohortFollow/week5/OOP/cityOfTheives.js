//1st thing create a constructor function

var Burglar = function(name){
    this.name = name
    this.dead = false // we put it here because we are assuming our burglar is not dead
    this.stuff = ['crowbar', 'lockpicks', 'ski-mask', 'dagger','gloves']
}

// we have to use the 'new' keyword for our Burglar function to act as a constructor
var jeff = new Burglar ('jeff')

// because we only steal from the end of the stuff array, and only add to the end of the stuff array,
//the stuff array functions as a stack.
Burglar.prototype.steal = function(victim){
    if(victim.stuff.length > 0){
        this.stuff.push(victim.stuff.pop()) //pop removes the last item off the array that it was on, also returns the item that it removes.
        console.log(this.name + 'now has ' + this.stuff.join(',')+ '.')
            console.log(victim.name + 'now has ' + victim.stuff.join(',')+ '.')
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-')
    }
    else{
        victim.dead= true
        console.log('hasta la vista' +victim.name)
          console.log('=-=-=-=-=-=-=-=-=-=-=-=-')
    }
}
// var jeff = new Burglar ('jeff')
// var steve = new Burglar ('steve')

// steve.steal(jeff)
// steve.steal(jeff)
// jeff.steal(steve)

var cityOfThieves = []

for( var i = 0; i < 10; i++ ){
// our individual thieves don't have variable names. We can only refer to them by their array indicies
    cityOfThieves.push(new Burglar('person' + i))
    
}

// console.log(cityOfThieves)


randomTheft = function(){
    //javascript idiom. Many developers don't know what the individual pieces do, but they understand how they work together.
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]
     var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]

     // lte's make sure we actually have 2 distint objects, so we're not stealing from ourselves
     if(burglar != victim){
         burglar.steal(victim)
     }
}
// setInterval takes 2 arguments: a callback function that descrives what we want to do, and a number of millseconds that describe how often we want to do it.
var theftIntervalId = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(burglar){
        if( burglar.dead) {return false}
        else if(!burglar.dead) {return true}
    //    return !thief.dead
    })
    if(cityOfThieves.length > 1){
        randomTheft()
    }
    else{
        console.log(cityOfThieves[0].name + 'say There can only be one.')
        clearInterval(theftIntervalId)
    }
}, 10)