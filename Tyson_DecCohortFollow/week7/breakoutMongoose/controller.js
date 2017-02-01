var Coders = require('./coders.js')



var reqBodyObject ={
    name: 'Bob',
    developer: true,
    speciality: 'Getting Rich',
    abilityLevel: 9.5,
    language: 'Javascript'

}

if(Coders.makeCoder(reqBodyObject)){
    console.log("New coder created")

}else{
    console.log('new coder not created')
}


