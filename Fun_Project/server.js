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
    //Log Sessions
    sessions = require('client-sessions')({ 
        cookieName: config.name,  
        secret: 'DR@G0N$',        
        requestKey: 'session',    
        duration: (86400 * 1000) * 7, 
        cookie: {
            ephemeral: false,     
            httpOnly: true,       
            secure: false         
        }
    }), 

    //Port
    PORT = process.env.PORT || 8080,
    Routes = require('./routes/index.js'), //don't need to put /index.js because computer see index.js as the go to file. We added it to be explicit and to read where the file goes
    app = express();


app.use(
    logger,
    sessions,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
);



app.use((req, res, next)=>{
    if(req.session.uid){
        req.session.counter++;
    } else {
        req.session.counter = 0;
    }  
    console.log("Session counter: ", req.session.counter);
    next();
});



Routes(app);

app.listen(PORT, (err) => {
    if( err ) {
        console.error('#ERROR#'.red,'Could not start server! :(');
    } else {
        console.log('\nMEAN Auth Server UP!'.green.bold, 'PORT:'.yellow, PORT);
    }
});
