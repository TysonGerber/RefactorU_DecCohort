angular.module('stockApp')
    .factory('facFactory', facFunction);

// facFunction.$inject = []
function facFunction() {
   
  


    // function getStockSymbol(symbol) {
    
    //     return $http.get('/stock');
        
    // }


    // function createSymbolAndDays(symbol, days) {

    
    //     return $http.post('/chart', )
    // }

       


    // function createSymbolAndDays(symbol, days) {

    //     activeStock
    //     days
    //     return $http.post('/active-stock', )
    // }
   

var symbol;
var info = {};
var Yaxis= [];
var Xaxis= [];
var company= {};

console.log('loading factory')

var timePeriod = {
    
    text: ' Today\'s Date',
    number: "",
    days: 9999
    
}
    return {
       symbol: symbol,
       timePeriod: timePeriod,
        info: info,
        Yaxis: Yaxis,
        Xaxis: Xaxis,
        company: company,

    }
}