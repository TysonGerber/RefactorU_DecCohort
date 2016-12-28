var API = require('./controllers/api.js');

module.exports = (app)=>{
    app.get('/api/users', API.getAllUsers)
}
