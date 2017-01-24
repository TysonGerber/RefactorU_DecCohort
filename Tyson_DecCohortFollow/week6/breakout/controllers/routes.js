var API = require('./api.js')

module.exports = (app)=>{


    app.get('*', (req,res, next)=>{
        //response.send() just sends back the string which is then interpretted as html by the client
        console.log('hit our middleware')
        next();
    })
    //we make simple root route handler that sends back some plain text to our client
    app.get('/', (req,res, next)=>{
        console.log('WHY ARENT YOU WORKING')
        //response.send() just sends back the string which is then interpretted as html by the client
        res.send('Found our root route')
       
    })

    app.get('/home', (req,res,next)=>{
        // we can send html directly as a string
        res.send('<h1>We are HOME</h1> ')
    })

    //we can send back json data..
    app.get('/data', (req,res,next)=>{
        // we can send html directly as a string
        res.json({name: 'Joe Smith', address: '123 Fake Street'})
    })

 //we have a whole series of routes that should be accessed by someone who is logged in.

//for our example, we will look for  a query parameter named user and verify that it has a value. If the user has a value, we'll go on. If not, we'll send a rejection message.
//Our URL will look something like 
//localhost:8080/api/data1?user=123

    app.get('/api/*', API.checkUserMiddleware)

    app.get('/api/data1', API.getData1)

    app.get('/api/data2', API.getData2)
}