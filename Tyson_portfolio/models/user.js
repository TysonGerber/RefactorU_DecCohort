var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: String,
    message: String,
})

var User = mongoose.model('User', userSchema);

module.exports = User;