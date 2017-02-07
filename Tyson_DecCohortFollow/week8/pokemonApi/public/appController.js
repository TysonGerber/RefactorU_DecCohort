angular.module('pokemonApp')
    .controller('pokemonController', pokemonFunction)

pokemonFunction.$inject = ['$http'];

function pokemonFunction($http) {
    var pCtrl = this;

    pCtrl.heading = 'Pokemon for hire'
    pCtrl.pokemon = [];

    function pokeList() {

        //GET :/pokemon
        $http.get('/pokemon').then(function ifItComesBackSuccessfully(response) {
            console.log('DGB', response)
            pCtrl.pokemonArray = response.data
        },
            function ifItFailsMiserablyAlongTheWay(err, response) {
                console.log("GET:/pokemon error:", err)
            })
    }
    pokeList();
    //GET :/pokemon?poke=bulbasaur
    pCtrl.getPokemon = function () {
        $http.get('/pokemon?' + poke + '=' + pCtrl.pokeName).then(
            function success(response) {
                pCtrl.pokemon = response.data
            },
            function failure(response) {
                console.log("GET :/pokemon?poke=error", response)
            })
        }
        pCtrl.apply = function(){
            
        }
}