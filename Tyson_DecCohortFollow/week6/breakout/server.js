// import express node module as a framework to help us deal with middleware and routing
var express = require('express'),
    routes = require('./controllers/routes.js') //This is where your requiring routes.js

//the express module comes in as a function, so we execute the function to create our app
var app = express('')

// this passes our app object to the routes function that we have written in controllers/routes.js
routes(app);


//this will get ALL routes for ALL methods
//app.use()



var PORT = process.env.PORT || 8080;
//this is the core of our server, listening to a port for requests and leaving the rest to express's route handling
app.listen(PORT, function (err) {
    // if there was an error starting the server, log it
    if (err) {
        console.log("server failed: ", err)
    } else {
        // otherwise, log that the server is all good
        console.log("server is up and listening to port", PORT)
    }
})