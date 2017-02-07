var express = require('express')
var app = express()
var HTTP = require('http')
var HTTPS = require('https')
var fs = require('fs')




app.get('/', function (req, res) {
    res.send('Welcome to the internet')
})

var PORT = process.env.PORT | 80
var PORT2 = process.env.PORT2 | 443
var httpServer = HTTP.createServer(app)

httpServer.listen(PORT)

try {
    var httpsConfig = {
        key: fs.readFileSync('etc/letsencrypt/live/tysongerber.com/privkey.pem'),
        cert: fs.readFileSync('etc/letsencrypt/live/tysongerber.com/cert.pem')
    }
    var httpsServer = HTTPS.createServer(httpsConfig, app)
    httpsServer.listen(PORT2)
    app.use(function (req, res, next) {
        if (req.protocol === 'http') {
            res.set('X-Forwarded-Proto', 'https')
            res.redirect('https://' + req.headers.host + req.url)
        } else { next() }
    })
} catch (e) {
    console.log('Could not set up HTTPS server')
}


