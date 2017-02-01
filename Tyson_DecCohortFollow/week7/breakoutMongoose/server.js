

var mongoose = require('mongoose')

// default mongodb port is 27017
// PROTOCOL://HOST_MACHINE{:NON_DEFAULT_PORT}/DB_NAME
//
mongoose.connect('mongodb://localhost/devTeam').then(function(err){
    if (err) {
        console.log('DB Error:', err)
    } else {
        console.log('Database connected')
    }
})
//create a schema for our coder objects

//('Coder') refers to the collection in the Mongo database.
//create a collectin in our database
var Coder = mongoose.model('Coder', {
    name: { type: String, required: true, unique: true }, //unique cannot have a coder with the same name.
    developer: { type: Boolean, required: true },
    speciality: String,
    abilityLevel: Number, //1-10
    language: String

})

//Typically this would be called from a controller file in response to a POST:/coder request


// CRUD
// Create, Read, Update, Delete


///////////////////////////////////
//Create
///////////////////////////////////

//newCoder = {name:'value', developer:'value', ...}
function createCoder(newCoder) {
    var dbCoder = new Coder(newCoder);
    console.log("New Coder:", newCoder);
    console.log("DB Coder:", dbCoder)
    var promise = dbCoder.save();
    
    promise.then(function(data){
     console.log("Data:", data)

    })
}
     
///////////////////////////////////
//Read
///////////////////////////////////

function getCoders() {
    Coder.find({}), function (err, coders) { //coders is a variable we set. It will bring us back an array of coders
        if (err) {
            console.log('No coders found')
        }
        return coders;
        // return getCoder({});
    }
}
//the query parameter will contain zero or more properties with values which will be the basis of our search
//var query = new RegEx('^'range+$,'i') // ^ - beginning of line, i - case insensitive
//Example: query={language: 'Java', abilityLevel:queryExp} //using a regex
//Example: query={language: 'Java', abilityLevel:/^[1-3]/i} //using a regex
//Example: query={language: 'Java', abilityLevel:{$lt:4}} // same thing using monmgoose's syntax - preferred
function getCoder(query) {
    Coder.find(query, function (err) {
        if (err) {
            console.log('Found no coders that meet the citeria')
        }
        return coders;
    })

}
///////////////////////////////////
//Update
///////////////////////////////////


///////////////////////////////////
//Delete
///////////////////////////////////

module.exports = {
    makeCoder: createCoder,
    findCoders: getCoders,
    findCoder: getCoder,
}
