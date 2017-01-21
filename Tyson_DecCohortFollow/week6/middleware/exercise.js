// ## class Exercise
// write some middleware to intercept all GET request, console.log a message and then proceed to the next step in the middleware chain.
// Then write another middleware function in the middleware chain to log a message to the console and send a response back.


var express = require('express')

var app = express()

app.get('*', (req,res,next)=>{
    console.log('first middleware');
    next();
})

app.get('/', (req,res,next)=>{
    console.log('handle the roote route');
    res.send('handled!');
})


// app.get('/', (err, req,res,next)=>{ // if you use 4 parameters err (error) has to come first.
//     console.log('handle the ERROR route');
//     res.send('handled!');
// })

app.get('/home', (req,res,next)=>{
    console.log('handle the roote route');
    res.send('home handled!');
     next();// this will never run because anything after res.send will not run
})

//we will never get here because the previous middleware function
//send a response to this request
app.get('/home', (req,res,next)=>{
    console.log('handle the roote route');
    res.send('home handled!');
   
})