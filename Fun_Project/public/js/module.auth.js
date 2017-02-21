angular.module('module.auth', [])
    .controller('module.auth.controller', Auth)

Auth.$inject = ['$http'];

function Auth($http) { // window.Auth
    console.info('Auth controller loaded!');

    var auth = this;

    auth.payloads = {
        login: {},
        register: {}
    };

    auth.login = {
        // happens when the user clicks submit on the login form
        submit: function(event) { // click-event
            console.info('auth.login.submit', event);

            $http.post('/login', auth.payloads.login)
                .then(auth.login.success, auth.login.error);
        },
        success: function(res) { // server response callback
            // when login is successful, redirect them into the dashboard
            console.info('auth.login.success', res.data);
            location.href = '/index.html';
        },
        error: function(err) {
            console.error('Login.error', err);

            // user feedback stuffs, sets up the alert box on error
            auth.login.message = ( err.data && err.data.message ) || 'Login failed, contact us!';
        }
    };

    auth.register = {
        submit: function (event) { //refers to the $event on the html page.
            // happens when the user clicks submit on the register form
            console.log(event) // checking to see if the submit button is being triggered.
            $http.post('/register', auth.payloads.register) //request body
                .then(auth.register.success, auth.register.error);
        },
        success: function(res) {
            // when register is successful, just redirect them into the stock (already logged in)
            console.info('auth.register.success', res.data);
            location.href = "/html/stock.html";
        },
        error: function(err) {
            console.error('auth.register.error', err);
            // user feedback stuffs, sets up the alert box on error
            auth.register.message = ( err.data && err.data.message ) || 'Register failed, contact us!';
        }
    };
}
