var request = require('request')
var express = require('express')
var bodyParser = require('body-parser')
var PokeApplicant = 

module.exports = function (app) {
    app.use(express.static('./public '))

    app.use(bodyParser.json());

    // GET:/ (root route)
    app.get('/', function (req, res) {
        res.sendFile('index.html', { root: './public' })
    })



    // GET: /pokemon
    // GET: /pokemon?poke=bulbasaur(get detail on a single pokemon)
    app.get('pokemon', function (req, res) {
        if (req.query.poke == 'undefined') {

            app.get('/pokemon', function (res, req) {
                // go to the pokemon api and retreive a list of pokemon
                //https://pokeapi.co/api/v2/pokemon/
                request('https://pokeapi.co/api/v2/pokemon/', function (err, response, body) {
                    var resulst = JSON.parse(body)
                    console.log("GET /pokemon:", myBody)
                    console.log("Type", typeof myBody) //see if our body parser is working and converting our string 
                    res.json(myBody.results)
                });
            else{
                    var pokename = req.query.poke;
        request('https://pokeapi.co/api/v2/pokemon/' + pokename, function (err, response, body) {
                        var resulst = JSON.parse(body)
                        console.log("GET /pokemon:", myBody)
                        console.log("Type", typeof myBody) //see if our body parser is working and converting our string 
                        var poke = {
                            name: myBody.results.name,
                            sprite: myBody.results.sprites.front_default,
                            weight: myBody.results.weight,
                            height: myBody.results.height,
                            experience: myBody.results.experience
                            

                        };
                        // create a database document based on our poke object
                        var pokeGuy = new PokeApplicant(poke); 
                        pokeGuy.save(fucntion(err){
                            if (err){
                                console.log("Database save() error", err);
                            }else {
                                console.log("Database")
                            }
                        });
                        res.json(poke)
                    }
        })

}