var express = require('express');

app = express();

//ROUTE

app.get('/', (req,res)=>{
    res.send('<h1> What\'s up world?</h1>')
})

var APP_DIR = process.env.APP_DIR || './public/'

app.get('/home', (req,res)=>{
    res.sendFile('/home.html', {root: APP_DIR})
})

// OR YOU CAN DO THIS..
// //home is a ROUTE (part of the URL)
// app.get('/home', (req,res)=>{
//     // /home.html is a FILE PATH (where the file exsists in the file system)
//     res.sendFile('/home.html', {root: './public/'})
// })

app.get('/about', (req,res)=>{
    res.sendFile('/about.html', {root: APP_DIR})
})

//set port
// ports on server is like a port on the doc. which specific boat is going to be docked at which port. http running on port 80
//within node you can get enviroment variables and have your code use this 
var PORT = process.env.PORT || 8080;

// console.log("port= ", PORT)

//listen
app.listen(PORT, () =>{ //function() same thing as () =
    console.log('Server is up and listening to port', PORT)
})

//Node command takes what your code is and starts running it from it's memory. Every time you change your code 
//change your port type into your terminal:  export PORT=3000
//start server: nodemon server.js
//every time you make a change hit rs and it will re-start the server again.