//io() comes from the socket.io.js file that we brought in via a script log in index.html
var socket = io();

// There are two methods that socket provides that are of interest to us
//sockets usually is a private channel between two things 
//socket.on() 
//socket.emit()


//client requests a socket from server and then the server sends that socket back to the client.

//every two seconds after loading the page, we will send a random number to the server

// setInterval(()=>{
//     socket.emit('newNumber',Math.random());
// }, 2000);



// when the server sends a number, we will append it to the body of our index.html page.
// socket.on('number', (data)=>{
//     document.body.innerText += data + '\n'
// })

/////////////////////////////
//Twitter Example
// ////////////////////////////


//  socket.on('youBeenTweeted', (data)=>{
//      document.body.innerHTML += data.text + data.user.name + '\n'
//  })