#express

##

put and post can have bodies. 

get request- assuming retreive data from their server and not modifying their server
post= is an http request that is intended to deliver data TO the server. It expects the request to have a body that contains data. 

setup your server so that it meets users expectations.

get 

## class Exercise
write some middleware to intercept all GET request, console.log a message and then proceed to the next step in the middleware chain.
Then write another middleware function in the middleware chain to log a message to the console and send a response back.