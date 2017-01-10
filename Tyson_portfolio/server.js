
//requires dependencies
var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Routes = require('./routes.js');


//creates app object
var app = express();

//set port
var PORT = process.env.PORT || 3000

//connect to database
mongoose.connect("mongodb://localhost/portfolio", (err)=>{
    if (err){
        console.log('Error connecting to database', err);
    }else{
        console.log('successfully connected to database');
    }
})

//middleware

app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


//Routes 
Routes(app);

// listen for connections
app.listen(PORT, (err)=>{
    if (err){
        console.log('Error starting on server!', err);
    }else{
        console.log('Server started on port', PORT);
    }
});



























