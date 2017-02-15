// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http, $event) {
    var stock = this;

    stock.greeting = 'Welcome to your stock page'

    //Buttons 1D, 1W, 1M, 6M, 1YR, 5Yr, Max.
    //1D
    //     stock.oneDay = function($event){
    //         console.log('1 day', 1);
    //         return 1;
    //     }
    //     //1 Week
    //      stock.oneWeek = function($event){
    //         console.log('1 week', 7);
    //         return 7;
    //     }
    //     //1 month
    //      stock.oneMonth = function($event){
    //         console.log('1 month', 30);
    //         return 30;
    //     }
    //     //6 Months
    //      stock.sixMonths = function($event){
    //         console.log('6 months', 180);
    //         return 180;
    //     }
    //     //1 Year
    //       stock.oneYear = function($event){
    //         console.log('1 Year', 365);
    //         return 365;
    //     }
    //     //5 Years
    //      stock.fiveYears = function($event){
    //         console.log('5 years', 1825);
    //         return 1825;
    //     }
    //     //Max ?? Don't know how to get this one.
    //     stock.Max = function($event){
    //         console.log('6 months', 180);
    //         return 'max';
    //     }

    // function convertMS(ms) {
    //   var d, h, m, s;
    //   s = Math.floor(ms / 1000);
    //   m = Math.floor(s / 60);
    //   s = s % 60;
    //   h = Math.floor(m / 60);
    //   m = m % 60;
    //   d = Math.floor(h / 24);
    //   h = h % 24;
    //   console.log({ d: d, h: h, m: m, s: s })
    //   return { d: d, h: h, m: m, s: s };
    // };




    // stock.week = moment() - moment().subtract(7,'week')
    // stock.month = moment() - moment().subtract(30,'month')
    // stock.halfyear = moment() - moment().subtract(180,'six months')
    // stock.year = moment() - moment().subtract(365,'year')
    // stock.five = moment() - moment().subtract(1825,'five years')


    // AVERAGE STOCK PRICE BAR CHART (FROM HIGHCHARTS)
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
                '<td style="padding:0"><b>{point.y:.1f} price</b></td></tr>',
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
        });

    }
    // stock.avgChart();

    // Data gathered from http://populationpyramid.net/germany/2015/

    // Age categories
    var categories = ['0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '];

    stock.buySellChart = function () {
        console.log('chart stock.buy', stock.buy)
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'buySellContainer',
                renderTo: 'buySellContainer',
                type: 'bar'
            },
            colors: ['rgb(000, 000, 000)', 'rgb(200, 200, 255)'],
            title: {
                text: 'Population pyramid for Germany, 2015'
            },
            subtitle: {
                text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Buy',
                data: stock.buy
            }, {
                name: 'Sell',
                data: stock.sell
            },
          ]
        });
    }
    // stock.buySellChart();


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
        submit: function (days) {
            stock.days = days
            // // if(days === 0){
            // // stock.average == stock.YaxisLP
            // //console.log(stock.average)
            // if (days === 'null' || days === [0]) {
            //     days === stock.YaxisLP
            // }


         var stockPromise =   $http.get('/stock' + '?symbol=' + stock.symbol);
       
            // passing in as an argument on submit button 1D, 1W, 1M etc


          var chartPromise =  $http.get('/chart?symbol=' + stock.symbol + '&days=' + stock.days);
          Promise.all([stockPromise, chartPromise]).then(function success(resArray)    {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart

                //stock Promise data
                var info = JSON.parse(resArray[0].data)
                // console.log('stock?symbol success', info.LastPrice)
                stock.info = info
                // console.log('stock.info', stock.info)
                stock.company = stock.info.Name
                // console.log('stock.company', stock.company)
                stock.YaxisLP = stock.info.LastPrice
                // console.log('stockYaxisLP', stock.YaxisLP)
                // stock.avgChart();


                //chart Promise data
                // console.dir('this is the data we are looking for', resArray[1].data)
                console.log(resArray[1])
                var stockReturn = JSON.parse(resArray[1].data.replace("NaN", ""))
                // console.dir(stockReturn)
                // console.log('stockReturn', stockReturn)

                // Xaxis is time period the graph is based off of.
                stock.Xaxis = 'Today\'s date'

                   // Getting the average for stock
                var numArray = stockReturn.Elements[0].DataSeries.close.values
                var average = addThemAll(numArray)
                stock.average = average
                // console.log('stock.average', stock.average);
                
             

                // Getting the percentage of stock based on the average price and today's stock price.
                stock.buy = [];
                stock.sell = [];
                var diffInPrice = (+stock.average - +stock.YaxisLP);
                stock.percentage = (+diffInPrice / +stock.YaxisLP * 100);
                console.log('figure it out stock.percentage', typeof stock.percentage)
                if(stock.percentage > 0){
                    //If it is a positive number then SELL // stock.sell.push.
                    stock.sell.push(+stock.percentage) 
                      console.log('This is stock.sell, number should be POSITIVE pushing THIS ONE', stock.sell)  
                    //Created this one because I need the opposite side of the graph to appear. I then am making this one transparent.
                    stock.sell.push(-stock.percentage) 

                    //ASK HOW TO GRAB THE ELEMENT BY CLASS NAME AND WHY THIS ISN'T WORKING.
                    // document.getElementsByClassName("#highcharts-r2qss7l-8 > svg > g.highcharts-series-group > g.highcharts-series.highcharts-series-1.highcharts-bar-series.highcharts-color-1.highcharts-tracker > rect.highcharts-point.highcharts-negative.highcharts-color-1").style.color='purple'
                    console.log('PURPLE stock.buy OPPOSITE', stock.sell)  
                                   
                }else {
                    //If it is a negative number then BUY // stock.buy.push.
                    stock.buy.push(+stock.percentage)
                    console.log('This is stock.buy, number should be NEGATIVE pushing THIS ONE', stock.buy)
                       stock.buy.push(-stock.percentage) 
                    console.log('stock.sell OPPOSITE', stock.buy)
                      
                }
                // console.log('stock.buy', stock.buy)
                // console.log('stock.sell', stock.sell)

                // console.log('stock average typeof', typeof stock.average);
                // console.log('stock.YaxisLP', stock.YaxisLP);
                // console.log('diff in price', diffInPrice);
                // console.log('percentage', stock.percentage);


                stock.avgChart();
                stock.buySellChart();


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


