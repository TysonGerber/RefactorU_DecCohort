// require dependencies
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Routes = require('./routes.js');

//create app obj
var app= express();

//set port
var PORT = process.env.PORT || 3000;

//connecto to database
mongoose.connect('mongodb://localhost/FullStackForm', (err)=>{
    if(err){
        console.log("Error connecting to DB")
    }else{
        console.log('Successfully connected to db');
    }
});
//middleware

app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//Routes
Routes(app);

//listen for connections

app.listen(PORT,(err)=>{
    if(err){
        console.log ('Error starting server', err)
    }else{
        console.log("Server started on port", PORT)
    }
});