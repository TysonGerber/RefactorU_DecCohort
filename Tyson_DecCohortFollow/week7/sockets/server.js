var express = require('express')
var logger = require('morgan')('dev')
var io = require('socket.io')


var app = express();
app.use(logger);
app.use(express.static('./public'))




var PORT = process.env.PORT | 8080;

app.server = app.listen(PORT, (err)=>{
    if(err){
        console.log('Server Error', err)
    }else{
        console.log('Server started on PORT:', PORT)
    }
})

var serverSocket = io(app.server)

// create a server socket to listen to client connection request
serverSocket.on('connection', (socket)=>{
    console.log('server socket connected')

    // if we receive a newNumber socket event, log that number and send a new number back tot the same socket connection
    socket.on('newNumber', (data)=>{
        console.log(data);
        var newNumber = data * 10;
        socket.emit('number', newNumber)
    })
})



