var express = require('express')
var router = require('./routes/index.js')

var app = express();


var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/pokejobs', function(err){
  
   if(err){ console.log('DB connection error', err)

   }else{
       console.log('DB up!')
   }
})


router(app)

app.listen(8079, function(err){
    if(err){
        console.log('Server Error:', err)
    }else{
        console.log('Server running')
    }
})