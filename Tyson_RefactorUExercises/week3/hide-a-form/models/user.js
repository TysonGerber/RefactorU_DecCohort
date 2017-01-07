var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
fname: {type: String, required: true},
lname: {type: String, required: true},
    bio: {type: String, required: true},
    favoriteBooks: String,
    favoriteJSLibraries: String,

});

var User = mongoose.model('User', userSchema);

module.exports = User;