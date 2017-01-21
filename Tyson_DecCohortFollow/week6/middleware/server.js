
//require the express module
var express = require('express');
var logger = require('morgan'); //when I go to route in the browser the route route it will tell you what activity is happening in your server logger

//invoke the express() function returned by the require to create our app object
var app = express();

//ROUTES
//I want to log EVERY request (get, put, post, to this route, to that route)
app.use(logger('dev') )

// let's check some authenticationand decide if we are going to continue 
//processing this request.
//if the URL contains a query parameter of 'id' (ie. ?id=1234) then we will call next() and continue down the vertically mounted middleware chain or whether we send back a rejection message/page.

// app.use((req,res,next)=> {
// console.log('Request Query',req.query)
// if (req.query.id){
//     next();
// }else{
//     res.send('uh uh, not today')
// }
// })



app.use((req,res,next)=> {
console.log('vertical middleware')
next();

})

var middleware = (req,res,next)=>{}

var loggit = (req, res, next)=> {
    console.log('Method:', req.method)
    next();
}

//middleware to check for authentication before allowing it to go any further
app.put('*', (req,res)=>{
     console.log('putting')
    
})
// handle the root route by sending (in this case) a string
app.get('/',(req,res)=>{
    res.send('<h1>This is a literal string</h1>')
        //we can't send two responses to a single request
    //res.sendFile()//cannot send another thing after you use send. 
})

app.use(express.static('public'));

app.get('/home',(req,res)=>{
    res.sendFile('/home.html', {route: './public'})
        //we can't send two responses to a single request
    //res.sendFile()//cannot send another thing after you use send. 

    
})

app.get('/about',(req,res)=>{
    res.sendFile('/about.html', {route: './public'})
        //we can't send two responses to a single request
    //res.sendFile()//cannot send another thing after you use send. 

    
})

// here we are GETTING a signup page
app.get('/signup', (req,res,next)=>{
    res.send(`
    <form method='POST' action='signup'>
    <input name='username'>
    <input name='age'>
    <input type='submit' value='Submit'>
    <form>
    `)
    next();
})

//here we are POSTING from the signup page

//body parser is used to convert the request body into a json (and then javascript) 
var bodyParser = require('body-parser');
//this middleware will run that body parser to convert the body into an object
app.use( bodyParser.json(), bodyParser.urlencoded({extended:true}));

// in the POST:/signup route, we take the (body-parsed) request body and we can use it as a regular javascript object
app.post('/signup', (req,res,next)=>{
    console.log('Body After:', req.body)
    console.log('name', req.body.username)
    // we need to send a response, even if it's empty, to terminate the request.
    res.send();
})
// TO SEE THIS RAW DATA YOU HAVE TO COMMENT OUT LINE 88. 
// app.post('/signup', function(req,res,next){
//     body = ''
//     req.on('data', function(data){
//         body += data
//     });
//     req.on('end', function() {
//     var post = body
//     console.log(post)
//     next();
//     });
// })
//define the port that we will listen to
var PORT = process.env.PORT || 8080;

//Listen
app.listen(PORT, (err)=>{
    if(err){
        console.log('Server Error', err)
    }else{
        console.log('Server started on PORT:',PORT)
    }
});
