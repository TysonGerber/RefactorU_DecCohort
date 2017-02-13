// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http, $event) {
    var stock = this;

    stock.greeting = 'Welcome to your stock page'

//Buttons 1D, 1W, 1M, 6M, 1YR, 5Yr, Max.
    //1D
    stock.oneDay = function($event){
        console.log('1', 1);
        return 1;
    }
    //1 Week
     stock.oneWeek = function($event){
        console.log('1 week', 7);
        return 7;
    }
    //1 month
     stock.oneMonth = function($event){
        console.log('1 month', 30);
        return 30;
    }
    //6 Months
     stock.sixMonths = function($event){
        console.log('6 months', 180);
        return 180;
    }
    //1 Year
      stock.oneyear = function($event){
        console.log('1 Year', 365);
        return 365;
    }
    //5 Years
     stock.fiveYears = function($event){
        console.log('5 years', 1825);
        return 1825;
    }
    //Max
    stock.Max = function($event){
        console.log('6 months', 180);
        return 'max';
    }

// CHART FROM HIGHCHARTS
    stock.avgChart = function () {
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'column'
            },
            title: {
                text: 'Average Stock Price',
            },
            subtitle: {
                text: 'Source dev.markitondemand.com'
            },
            xAxis: {
                categories: [stock.company],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Price'
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
                name: 'Average Stock Price',
                data: [stock.average]

            }, {
                name: 'Current Stock Price',
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

    //Grabbing the array of prices and FINDING THE AVERAGE PRICE
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
                stock.company = stock.info.Name
                console.log('stock.company', stock.company)
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


function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  console.log({ d: d, h: h, m: m, s: s })
  return { d: d, h: h, m: m, s: s };
};

convertMS(31568783175);