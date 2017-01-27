// dependencies I am requiring
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes.js')

//setting my app object and port
app = express();
var PORT = process.env.PORT || 8080;

//connect to database
// mongoose.connect('mongodb://localhost/')

//mount middleware
app.use(logger('dev'));
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//Routes
var Routes = Routes(app)

//Setting my port to listen 
app.listen(PORT, (err)=>{
    if(err){
        console.log("Error with server", err);
    }else{
        console.log('Server running on PORT',PORT);
    }
})