angular.module('pokemonApp', [])
    .controller('pokemonController', pokemonCtrl)

pokemonCtrl.$inject = ['$http']

function pokemonCtrl($http) {
    var pCtrl = this;

    pCtrl.greeting = 'Pokemon'
    pCtrl.pokedex = [];
    pCtrl.pokemon = null;

    pCtrl.searchPoke = function () {
        $http.get('http://pokeapi.co/api/v2/pokemon/' + pCtrl.pokename)
            .then(function (response, err) {
                if (err){
                    console.log('Error', err)
            pCtrl.pokemon = 'not found'
                }
            console.log(response.data)
            })
            
}


function getPokedex() {
    $http.get('http://pokeapi.co/api/v2/pokedex/1') //first argument is the url you want to go to
        .then(function (res, err) {
            if(err){
            console.log('Error', err)
          }  // console.log(res.data)
            pCtrl.pokedex = res.data.pokemon_entries
        })

}
getPokedex();
}

    //curl makes http-request