
var Contacts = require('../models/contacts.js')



module.exports = {


    checkUserMiddleware: (req, res, next) => {
        // we can send html directly as a string
        console.log('hit our api security test')
        console.log(req)
        if (req.query.user) {
            next();
        } else {
            res.send('Entry Denied')
        }

    },

    getData1: (req, res, next) => {
        // we can send html directly as a string
        res.json(Contacts.getContact(0))
    },

    getData2: (req, res, next) => {
        // we can send html directly as a string
        res.json(Contacts.getContact(1))
    }

}

//Starts at SERVER -->      ROUTES -->        API -->        CONTACTS
