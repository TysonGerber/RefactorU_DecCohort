// require all of our node module dependencies
var express = require('express')
var logger = require('morgan')
var request = require('request') //this is the API request. req has nothing to do with request. They are 2 seperate things 

logger('dev')
//require('morgan')('dev') //this does the same thing in a single line.

// create our express app object
app = express();

//Routes

app.get('/', (req,res)=>{ //this is my $http request and response
    res.send('This is working')
})

//album
// GET:/album?name=graduation
app.get('/album', (req,res)=>{
    //request(URL, callback) takes the parameters for the API URL and a callback function.
    // this API call will return result=[{album, track, lyrics}...]
    request(`http://kanyerest.xyz/api/album/${req.query.albumName}`, (err, response, body)=>{
        // console.log('BODY:', body)
            //   console.log('Typeof Response:', typeof response)
            //   console.log('Typeof ResponseBody:', typeof response.body)
              var parseBody = JSON.parse(body)
            //   console.log('Parse', parseBody)
            //   console.log('Typeof ResponseBodyResult:', typeof response.body.result)
            //   console.log('response', response.body)
              var tracks =  [];
              //loop through the result and build a new array of just track titles.

              for(var i = 0; i < parseBody.result.length; i++){
                  tracks.push(parseBody.result[i].title)
              }
    })
    console.log(tracks)
    res.send(tracks)
})

//GET:/tracks?albumName=graduation
//track
app.get('/track', (req,res)=>{
    //request(URL, callback) takes the parameters for the API URL and a callback function.
    // this API call will return result=[{album, track, lyrics}...]
    request(`http://kanyerest.xyz/api/track/${req.query.trackName}`, (err, response, body)=>{
        // console.log('BODY:', body)
            //   console.log('Typeof Response:', typeof response)
            //   console.log('Typeof ResponseBody:', typeof response.body)
              var parseBody = JSON.parse(body)
            //   console.log('Parse', parseBody)
            //   console.log('Typeof ResponseBodyResult:', typeof response.body.result)
            //   console.log('response', response.body)
  
              //loop through the result and build a new array of just track titles.

             var albumName = parseBody.albumName

    })
    console.log(tracks)
    res.send(tracks)
})
//words

//album
// GET:/wordCount?word=WORD
app.get('/wordCount', (req,res)=>{
    //request(URL, callback) takes the parameters for the API URL and a callback function.
    // this API call will return result=[{wordCount, track, lyrics}...]
    request(`http://kanyerest.xyz/api/counter`, (err, response, body)=>{
        // console.log('BODY:', body)
            //   console.log('Typeof Response:', typeof response)
            //   console.log('Typeof ResponseBody:', typeof response.body)
            //   console.log('Parse', parseBody)
            //   console.log('Typeof ResponseBodyResult:', typeof response.body.result)
            //   console.log('response', response.body)
            var wordcount = parseBody[req.query.word]
             res.send(req.query.word + 'appears' + wordcount + 'times')
              //loop through the result and build a new array of just track titles.

 
    })
    console.log(tracks)
    res.send(tracks)
})

//Set PORT, based on the process enviroment if available

var PORT = process.env.PORT || 8080;
// set up the http server Listener
app.listen(PORT, (err)=>{
    if(err){
        // if there is an error, put out an error message and exit with a non-normal status
        console.log('Server failed', err)
        process.exit(1);
    }
    //server looks good!
    console.log('Server is up and running', PORT)
})





