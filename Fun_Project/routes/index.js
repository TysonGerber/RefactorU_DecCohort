var User = require('../models/users'),
    express = require('express'),
    bcrypt = require('bcryptjs'),
    request = require('request')
errors = {
    general: {
        status: 500,
        message: 'Backend Error'
    },
    login: {
        status: 403,
        message: 'Invalid username or password.'
    }
};



module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile('login.html', { root: './public' })
    })
    //LOGOUT
    app.get('/logout', (req, res) => {
        req.session.reset(); // clears the users cookie session
        console.log('log out')
        res.redirect('/login.html');
    });        // logout route + redirect

    //LOGIN
    app.post('/login', (req, res) => { // form post submission
        console.info('auth.login.payload:', req.body);

        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if (err) {
                console.error('MongoDB error:'.red, err);
                return res.status(500).json(errors.general);
            }
            if (!user || !user.password) {
                // forbidden
                console.warn('No user or user.password found!'.yellow, user);
                res.status(403).json(errors.login);
            } else {
                console.info('auth.login.user', user);
                // at this point, user.password is hashed!
                bcrypt.compare(req.body.password, user.password, (bcryptErr, matched) => {
                    // matched will be === true || false
                    if (bcryptErr) {
                        console.error('MongoDB error:'.red, bcryptErr);
                        res.status(500).json(errors.general);
                    } else if (!matched) {
                        // forbidden, bad password
                        console.warn('Password did not match!'.yellow);
                        res.status(403).json(errors.login);
                    } else {
                        req.session.uid = user._id; // this is what keeps our user session on the backend!
                        res.send({ message: 'Login success' }); // send a success message
                    }
                });
            }
        });
    });

    // Registration Form / Creating New User
    app.post('/register', (req, res) => {
        console.info('Register payload:'.cyan, req.body);

        var newUser = new User(req.body);


        newUser.save((err, user) => {
            if (err) {
                console.error('#ERROR#'.red, 'Could not save new user :(', err);
                res.status(500).send(errors.general);
            } else {
                console.log('New user created in MongoDB:', user);
                req.session.uid = user._id; // this is what keeps our user session on the backend!
                res.send({ message: 'Register success' }); // send a success message
            }
        });
    })   // register form submission

//SSSSSSSSS Change this to stock.html but ask Steve your questions first. 
    app.get('/dashboard.html', (req, res, next) => {
        if (req.session.uid) {
            console.info('User is logged in, proceeding to dashboard...'.green);
            next();
        } else {
            console.warn('User is not logged in!'.yellow)
            res.redirect('/login.html');
        }
    }); // protect the dashboard page - only send it, if the user has a valid session


    app.get('/stock', function (req, res) {
        if (req.query.symbol != null) {
            //going to "our api a.k.a MARKET ON DEMAND API" 
            // http://dev.markitondemand.com/Api/v2/Lookup/json?input=
            request('http://dev.markitondemand.com/Api/v2/Quote/json/?symbol=' + req.query.symbol, function (err, response, body) {
                if (err){
                    console.log('marketOnDemand Api failure', err)
                    res.status(500).send('marketOnDemand response failure', err)
                }else{
                console.log(body)
                res.json(body)
                }
            })
        }else(
        res.status(300).send('symbol not recognized')
        )
    })

    app.get('/chart', function (req,res){
        console.log('chart inputs', req.query)
        var apiUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":'+ req.query.days+',"DataPeriod":"Day","Elements":[{"Symbol":"'+ req.query.symbol +'","Type":"price","Params":["c"]}]}'
        console.log(apiUrl)
        request(apiUrl, function(err,response,body){
            if (err){
                console.log('chart api failure', err)
                res.status(500).send('chart api failure', err)
            }else{
                // console.log('/chart json info', body)
                // console.log(typeof(body))
                // console.log('positions type',typeof(body.positions))
                // console.log(body.positions)
                // res.send('hey buddy')
                res.json(body)
            }
        })
    })
    app.post('/active-stock', (req, res) => {
        console.info('active stock to req.body:'.cyan, req.body);

       User.update({_id: req.session.uid}, {$set:{activeStock: req.body.activeStock, days: req.body.days}}, (err, user) => {
            if (err) {
                console.error('#ERROR#'.red, 'Could not save activeStock and days', err);
                console.log('Could not save activeStock and days ERR', err)
                res.status(500).send(errors.general);
            } else {
                console.log('New user symbol created in MongoDB:', user);
                res.send({ message: 'symbol success' }); // send a success message
            }
        });
    })   // register form submission

    app.get('/current-stock', (req,res)=>{
        console.log('getting current stock:' .cyan, req.body);
            User.find({_id: req.session.uid})
           if (err) {
                console.error('#ERROR#'.red, 'Could not get current stock information', err);
                res.status(500).send(errors.general);
            } else {
                console.log('got current stock information on DB:', user);
                res.send({ message: 'current stock success' }); // send a success message
            }

    })
        
    app.use(express.static('public'));
}

