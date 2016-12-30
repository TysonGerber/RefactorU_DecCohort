angular.module('worldMap', [])
    .controller('worldPlaces', worldFunction)

    function worldFunction() {
        var mapCtrl = this;

        mapCtrl.title= 'World Geography Map' 

        mapCtrl.countries= ['USA', 'China','India','Egypt']

mapCtrl.sortedCountries = mapCtrl.countries.sort()

var growing = 587928


        mapCtrl.countryObjects = [{
            name: 'USA',
            population: 3120000000,
            motto:'We\'re Yuuuuuge!'

        },{
            name: 'China',
            population: 600000000,
            motto:'Made here'
        },{
            name:'India',
            population:130000000,
            motto: 'Namaste and bring on the samosas'
        },
        {
            name:'Egpyt',
            population: 6,
            motto: 'We are god\'s'
        }]
        mapCtrl.style= true;
        mapCtrl.logMotto= function($index,country){
            console.log($index, 'Our motto is', country.motto)
            mapCtrl.style = !mapCtrl.style
                }
    }