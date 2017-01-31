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

// // create a server socket to listen to client connection request
// serverSocket.on('connection', (socket)=>{
//     console.log('server socket connected')

//     // if we receive a newNumber socket event, log that number and send a new number back tot the same socket connection
//     socket.on('newNumber', (data)=>{
//         console.log(data);
//         var newNumber = data * 10;
//         socket.emit('number', newNumber)
//     })
// })
var nodeTweetStream = require('node-tweet-stream')

if (!(process.env.TWITTER_CONSUMER_KEY || process.env.TWITTER_CONSUMER_SECRET || process.env.TWITTER_TOKEN)){
    console.log('Twitter Secret, key, etc. is not defined. Exiting....')
    process.exit(1)
}
var twitterSteam = nodeTweetStream({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_TOKEN,
    token_secret: TWITTER_TOKEN_SECRET
})

twitterStream.track('virtual reality')


// create a server socket to listen to client connection request
serverSocket.on('connection', (socket)=>{
    console.log('server socket connected')



/////////////////////////////
// Twitter Example
// ////////////////////////////
    // if we receive a newNumber socket event, log that number and send a new number back tot the same socket connection
//     socket.on('newNumber', (data)=>{
//         console.log(data);
//         var newNumber = data * 10;
//         socket.emit('number', newNumber)
//     })
//     twitterStream.on('tweet', (data)=>{
//         console.log(data)
//         socket.emit('youBeenTweeted',data)
//     })
// })




/////////////////////////////
// Chat Example
// ////////////////////////////
var myRoom = 'MyRoom'
socket.join('MyRoom')

//message to the room your currently in
socket.on('talk', (data)=>{
    socketServer.to(toRoom).emit('talk', {
        sender : socketUser.username,
        content: 'message for the room'
    })
})
//message to every single socket or room that is open
socket.on('shout', (data)=>{
    socketServer.emit('shout', {
        sender : socketUser.username,
        content: 'message for EVERYBODY, ever socket this server knows about!!!'
    })
})

//message to just a specificPerson 
socket.on('specificPerson', (data)=>{
    toPerson = data.recipient;
    socketServer.to(toPerson).emit('specificPerson', {
        sender : socketUser.username,
        content: 'message for EVERYBODY, ever socket this server knows about!!!'
    })
})

})