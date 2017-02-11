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
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tokyo',
                data: [stock.average]

            }, {
                name: 'New York',
                data: [stock.YaxisLP]

            }]
        })
   
    }
     stock.avgChart();
    //     stock.avgChart = function () {
    //         var chart = new Highcharts.Chart({
    //             chart: {
    //                 renderTo: 'container',
    //                 alignTicks: false
    //             },

    //             rangeSelector: {
    //                 selected: 1
    //             },

    //             title: {
    //                 text: 'AAPL Stock Volume'
    //             },

    //             series: [{
    //                 type: 'column',
    //                 name: stock.Yaxis,
    //                 data:  [stock.Yaxis],
    //                 dataGrouping: {
    //                     units: [[
    //                         // 'week', // unit name
    //                         // [1] // allowed multiples
    //                     ], [
    //                         // 'month',
    //                         // [1, 2, 3, 4, 6]
    //                     ]]
    //                 }

    //             }]

    //         });
    // console.log('second', stock.Yaxis)
    //     }

    //     stock.avgChart();

    // Function for finding the average of stock
    function addThemAll(numbers) {
        var sum = 0
        for (var i = 0; i < numbers.length; i++) {
            sum += numbers[i]

        }
        var average = sum / numbers.length;
        return average
    }

    stockInfo = [];

    stock.getSymbol = {
        submit: function (event) {
            $http.get('/stock' + '?symbol=' + stock.symbol).then(function success(res) {
                var info = JSON.parse(res.data)
                console.log('stock?symbol success', info.LastPrice)
                stock.info = info
                console.log('stock.info',stock.info)
                stock.YaxisLP = stock.info.LastPrice
                console.log('stockYaxisLP', stock.YaxisLP)
                    stock.avgChart();
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
                console.dir(stockReturn)
                console.log('stockReturn', stockReturn)

                // Xaxis is time period the graph is based off of.
                stock.Xaxis = 'Today\'s date'
               
                var numArray = stockReturn.Elements[0].DataSeries.close.values
                var average = addThemAll(numArray)
                stock.average = average
                console.log('stock.average', stock.average)
                // Getting the average for stock

                stock.avgChart();


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