var Users = require('../models/user.js')

module.exports = {
    getAllUsers: (req, res) => {
        Users.find({}, (err, docs) => {
            if (err) {
                console.log('Error getting users from database', err);
                res.send(err);
            } else {
                console.log('Got users from db:', docs)
                res.send(docs);
            }
        });
    },
    getUser: (req, res) => {
        Users.findOne({name: req.params.name}, (err, doc) => {
            if (err) {
                console.log('Error getting users from database', err);
                res.send(err);
            } else {
                console.log('Got user from db:', doc)
                res.send(docs);
            }
        });
    },
     createUser: (req, res) => {
         var newUser = new Users(req.body);

        newUser.save((err, doc) => {
            if (err) {
                console.log('Error saving user to database', err);
                res.send(err);
            } else {
                console.log('saved user to db:', doc)
                res.send(doc);
            }
        });
    }
}