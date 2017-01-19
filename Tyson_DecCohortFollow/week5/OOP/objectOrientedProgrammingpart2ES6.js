//ES6 Syntax 
//ECMAscript6 modern browsers and Nodejs (only andriod users that haven't updated their phones won't have access to this)

class Cat{
    constructor(name, species, angerLevel, meow, looks){
        
        this.name = name
        this.species = species
        this.angerLevel = angerLevel
        this.meow = meow
        this.looks = looks
    }

    saymeow(){
      console.log(this.name + 'says:' + this.meow + '.')
    }
}

var felix = new Cat('felix', 'cartoon', 4,'me-ow', 'tuxedo')

felix.saymeow();