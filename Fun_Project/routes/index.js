var User = require('../models/users'),
    express = require('express'),
    bcrypt = require('bcryptjs'),
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
       res.sendFile('login.html', {root: './public' })
    })

    app.get('/logout', (req, res) => {
        req.session.reset(); // clears the users cookie session
        console.log('log out')
        res.redirect('/login.html');
    });        // logout route + redirect

    app.post('/login',  (req, res) => { // form post submission
        console.info('auth.login.payload:', req.body);
        
        User.findOne({
            email: req.body.email
        }, (err, user) => {
            if( err) {
                console.error('MongoDB error:'.red, err);
                return res.status(500).json(errors.general);
            }
            if( !user || !user.password ) {
                // forbidden
                console.warn('No user or user.password found!'.yellow, user);
                res.status(403).json(errors.login);
            } else {
                console.info('auth.login.user', user);
                // at this point, user.password is hashed!
                bcrypt.compare(req.body.password, user.password, (bcryptErr, matched) => {
                    // matched will be === true || false
                    if( bcryptErr ) {
                        console.error('MongoDB error:'.red, bcryptErr);
                        res.status(500).json(errors.general);
                    } else if ( !matched ) {
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
       // login form submission
    app.post('/register',  (req, res) => {
        console.info('Register payload:'.cyan, req.body);

        var newUser = new User(req.body);


        newUser.save((err, user) => {
            if( err ) {
                console.error('#ERROR#'.red, 'Could not save new user :(', err);
                res.status(500).send(errors.general);
            } else {
                console.log('New user created in MongoDB:', user);
                req.session.uid = user._id; // this is what keeps our user session on the backend!
                res.send({ message: 'Register success' }); // send a success message
            }
        });
    })   // register form submission

    app.get('/dashboard.html',  (req, res, next) => {
        if( req.session.uid ) {
            console.info('User is logged in, proceeding to dashboard...'.green);
            next();
        } else {
            console.warn('User is not logged in!'.yellow)
            res.redirect('/login.html');
        }
    }); // protect the dashboard page - only send it, if the user has a valid session
    app.use(express.static('public'));
};
