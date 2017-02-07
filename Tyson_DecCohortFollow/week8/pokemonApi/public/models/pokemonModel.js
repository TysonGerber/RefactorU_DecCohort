var mongoose = require('mongoose')
//going to create
var pokeSchema = mongoose.Schema({
        name: {type: String, unique: true},
        sprite: String,
        weight: Number,
        height: Number,
        experience: Number,
        salary: Number,
        jobTitle: String
})

module.exports = mongoose.model('PokeApplicant', pokeSchema) //description of what we are going to put into your database