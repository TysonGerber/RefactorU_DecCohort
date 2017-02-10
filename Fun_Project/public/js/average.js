// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http) {
    var stock = this;

    stock.greeting = 'Welcome to your stock page'

    stock.avgChart = function () {
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                alignTicks: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Volume'
            },

            series: [{
                type: 'column',
                name: 'GE',
                data: [10, 9],
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }]
        });

    }

    stock.avgChart();



    // stock.avgChart = function(){('avgChart', {
    //         chart: {
    //             alignTicks: false
    //         },

    //         rangeSelector: {
    //             selected: 1
    //         },

    //         title: {
    //             text: 'AAPL Stock Volume'
    //         },

    //         series: [{
    //             type: 'column',
    //             name: 'AAPL Stock Volume',
    //             data: [10],
    //             dataGrouping: {
    //                 units: [[
    //                     'week', // unit name
    //                     [1] // allowed multiples
    //                 ], [
    //                     'month',
    //                     [1, 2, 3, 4, 6]
    //                 ]]
    //             }
    //         }]
    //     });
    // };   

    stockInfo = [];

    stock.getSymbol = {
        submit: function (event) {
            $http.get('/stock' + '?symbol=' + stock.symbol).then(function success(res) {
                var info = JSON.parse(res.data)
                console.log('stock?symbol success', info)
                stock.info = info

            },
                function failed(res) {
                    console.log('stock?symbol failed', res.data)
                }
            )
            $http.get('/chart?symbol=' + stock.symbol + '&days=' + stock.days).then(function success(res) {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart
                var stockReturn = JSON.parse(res.data)
                stock.Xaxis = 'Today\'s date'
                stock.Yaxis = stockReturn.Elements[0].DataSeries.close.values

                console.dir(stockReturn)
                stock.stockChart();

            },
                function failed(res) {
                    console.log('')
                })

            //how to access the x axisDates: res.data.Dates
            //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
        }
    }

}





// Or you can do this: 
//      stock.getTicker = function(event) {

//         $http.get('http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol='+ stock.ticker)
//         .then(function(res){
//             stock.quote = res.data
//             console.log(res.data)
//             console.log(event)
//         },
//         function(err){
//             console.log('Error loading Market API', err)
//         });

//     }
