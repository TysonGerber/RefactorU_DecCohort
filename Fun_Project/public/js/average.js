// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http, $event) {
    var stock = this;

    stock.greeting = 'Welcome to your stock page'

   
var timePeriod = {
    
    text: ' Today\'s date',
    number: "",
    days: 1
    
}

        stock.oneDay = function(){
            timePeriod.text = " Today's date"
            timePeriod.days= 1
            console.log('One day being CLICKED')
        }
      
        //1 Week
         stock.oneWeek = function(){
               timePeriod.text = " past week"
               timePeriod.days = 7;
            console.log('1 week', 7);
        }
        
        //1 month
         stock.oneMonth = function(){
              timePeriod.text = " current month"
               timePeriod.days = 30;
            console.log('1 month', 30);
         
        }
        //6 Months
         stock.sixMonths = function(){
              timePeriod.text = " the last 6 months"
               timePeriod.days = 180;
            console.log('6 months', 180);
    
        }
        //1 Year
          stock.oneYear = function(){
               timePeriod.text = " last year"
               timePeriod.days = 365;
            console.log('1 Year', 365);
          
        }
        //5 Years
         stock.fiveYears = function(){
              timePeriod.text = " the last five years"
               timePeriod.days = 1825;
            console.log('5 years', 1825);
         
        }
        //Max ?? Don't know how to get this one.
        stock.Max = function(){
             timePeriod.text 
               timePeriod.days
            console.log('6 months', 180);
           
        }



    // AVERAGE PRICE STOCK CHART(FROM HIGHCHARTS)
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
                // text: 'Source dev.markitondemand.com'
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


    // AVERAGE PRICE STOCK CHART(FROM HIGHCHARTS)

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
                type: 'bar'
            },
            // colors: ['rgb(000, 000, 000)', 'rgb(200, 200, 255)'],
            title: {
                text: 'Buying or Selling power'
            },
            subtitle: {
                text: "based on average stock price and " + timePeriod.number + timePeriod.text +""
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


    // FUNCTION FOR FINDING THE AVERAGE PRICE (grabbing the array of prices from the api (stockReturn.Elements[0].DataSeries.close.values) and FINDING THE AVERAGE PRICE)
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
        submit: function () {
            stock.days = timePeriod.days
         
            
            //1st PROMISE
            var stockPromise = $http.get('/stock' + '?symbol=' + stock.symbol);


            // 2nd PROMISE
            var chartPromise = $http.get('/chart?symbol=' + stock.symbol + '&days=' + stock.days);
            Promise.all([stockPromise, chartPromise]).then(function success(resArray) {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart

                //stock Promise data
                console.log(resArray[0].data)
                var info = JSON.parse(resArray[0].data)
                
                // console.log('stock?symbol success', info.LastPrice)
                stock.info = info
                // console.log('stock.info', stock.info)
                stock.company = stock.info.Name
                // console.log('stock.company', stock.company)
                stock.YaxisLP = Number(Math.round(stock.info.LastPrice+'e1')+'e-1')  //rounding to the 2nd decimal example 1.05 = 1.1
                console.log('stockYaxisLP', stock.YaxisLP)
                



                //chart Promise data
                // console.dir('this is the data we are looking for', resArray[1].data)
                console.log(resArray[1])
                var stockReturn = JSON.parse(resArray[1].data.replace("NaN", ""))
                // console.dir(stockReturn)
                // console.log('stockReturn', stockReturn)



                // Getting the average for stock
                var numArray = stockReturn.Elements[0].DataSeries.close.values
                var average = addThemAll(numArray)
                stock.average =  Number(Math.round(average +'e1')+'e-1')  //rounding to the 2nd decimal example 1.05 = 1.1
                console.log('stock.average', stock.average);






                // Getting the percentage of stock based on the average price and today's stock price.
                stock.buy = [];
                stock.sell = [];
                var diffInPrice = (+stock.average - +stock.YaxisLP);
                stock.percentage = (+diffInPrice / +stock.YaxisLP * 100);
                // console.log('figure it out stock.percentage', typeof stock.percentage)



                if (+stock.percentage > 0.9 && +stock.percentage < -0.9) {
                    //If it is a positive number then SELL // stock.sell.push.
                    stock.sell.push(+stock.percentage)
                    console.log('This is stock.sell, number should be POSITIVE pushing THIS ONE', stock.sell)

                    //Created this one because I need the opposite side of the graph to appear. I then am making this one transparent.
                    stock.sell.push(-stock.percentage)

                    console.log('PURPLE stock.buy OPPOSITE', stock.sell)

                }
                 //else if (Math.floor(Math.abs(stock.percentage)) == 0) {
               //     console.log('stock.percentage is 0', stock.percentage)
               // } 
                else {
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

};









