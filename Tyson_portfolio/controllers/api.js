var Users = require('../models/user.js');

module.exports = {
    getAllUsers: (req, res) => {
       Users.find({},(err, docs)=>{
           if(err){
               console.log("Error getting users from database", err)
           }else{
               console.log('got users from database:', docs);
               res.send(docs);
           }
       })
    },
     getUser: (req, res) => {
       Users.findOne({email: req.params.email},(err, doc)=>{
           if(err){
               console.log("Error getting users from database", err)
           }else{
               console.log('got users from database:', doc);
               res.send(doc);
           }
       })
    },

       createUser: (req, res) => {
                console.log(req.body)
           var newUser = new Users(req.body);
       newUser.save((err, doc)=>{
           if(err){
               console.log("Error saving user database", err)
           }else{
               console.log('Saved user to database:', doc);
               res.send(doc);
          
           }
       })
    },
    
};