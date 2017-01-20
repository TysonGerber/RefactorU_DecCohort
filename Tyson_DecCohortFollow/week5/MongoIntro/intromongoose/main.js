var mongoose = require('mongoose')


//connection string format
//protocol://<domain>/<database>
//mongodb://localhost/databaseName
mongoose.connect('mongodb://localhost/contacts',(err)=>{
    if(err) {
        console.log('Error connecting to mongoose', err)
    }else{
        console.log('Mongoose connected!')
    }
})

///Schema database class. fname: 'joe' lname 'phone'
// model is another name for schema or template for a collection
//this is analagous to a Class in JavaScript
var Person = mongoose.model('contactInfo', {
    fname: {type:String,required:true},
    lname: String,
    phone: {type:String, unique: true},
    age: Number,
    isMarried: Boolean,
    created: {type: Number, default:() => Date.now()}
})

function createPerson(attributes){
    var person = new Person(attributes);
    console.log(person);
    person.save();//saves this person object to the database
  }

//this is analagous to find()
function getPeople(query){
    // this will use the query passed in, but if no query is passed in we're going to instead pass an empty object which will find all documents in the contactInfo (Person) collection
   Person.find(query || {}, (err, people)=>{
        if (err){
            console.log("couldn't find person", err);
        }else{
           console.log(people)
        }
    })
}
console.log('and then...')
// var listOfPeople = getPeople();
// console.log(listOfPeople)



createPerson({
    fname: 'jne',
    lname: 'stred',
    phone: '222-666-1111',
    isMarried: true,
  })

getPeople();