var API = require('./controllers/api.js');

module.exports= (app)=>{
    app.get('/api/users', API.getAllUsers);
    app.get('/api/user/:email', API.getUser)
    app.post('/api/user', API.createUser);
}   