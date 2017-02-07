require('colors');

var config = require('./package'),
    express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'),
    mongoose = require('mongoose').connect('mongodb://localhost/'.concat(config.name), (mongooseErr) => {
        if( mongooseErr ) {
            console.error('#ERROR#'.red,'Could not initilize mongoose!', mongooseErr);
        } else {
            console.info('Mongoose initilized!'.green.bold);
        }
    }),
    sessions = require('client-sessions')({ // session management module developed my mozilla
        cookieName: config.name,  // front-end cookie name, currently pulled from package.json, feel free to change
        secret: 'DR@G0N$',        // the encryption password : keep this safe
        requestKey: 'session',    // req.session,
        duration: (86400 * 1000) * 7, // one week in milliseconds
        cookie: {
            ephemeral: false,     // when true, cookie expires when browser is closed
            httpOnly: true,       // when true, the cookie is not accessible via front-end JavaScript
            secure: false         // when true, cookie will only be read when sent over HTTPS
        }
    }), // encrypted cookies!
    PORT = process.env.PORT || 8080,
    Routes = require('./routes/index.js'), //don't need to put /index.js because computer see index.js as the go to file. We added it to be explicit and to read where the file goes
    app = express();

app.use((req, res, next)=>{
 console.log('step one')
 next();
})

app.use(
    logger,
    sessions,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
);

app.use((req, res, next)=>{
 console.log('step two')
 next();
})

app.use((req, res, next)=>{
    if(req.session.uid){
        req.session.counter++;
    } else {
        req.session.counter = 0;
    }  
    console.log("Session counter: ", req.session.counter);
    next();
});

app.use((req, res, next)=>{
 console.log('step three')
 next();
})

Routes(app);

app.listen(PORT, (err) => {
    if( err ) {
        console.error('#ERROR#'.red,'Could not start server! :(');
    } else {
        console.log('\nMEAN Auth Server UP!'.green.bold, 'PORT:'.yellow, PORT);
    }
});
