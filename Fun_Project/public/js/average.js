// Market On Demand API (now IHSMarket)
angular.module('stockApp')
    .controller('averageController', average)

average.$inject = ['$http', 'facFactory']


function average($http, facFactory, $event) {
    var average = this;

    average.greeting = 'Welcome to your average page'

    // Bottom Navbar
    var bnbLetters = function () {
        average.homeBNB = 'Home',
            average.stockBNB = 'Stocks',
            average.averageBNB = 'Average',
            average.logoutBNB = 'Logout',
            average.dayStocker = 'Day Stocker',
            average.otherBNB = 'Other'
    }

    if (window.innerWidth <= 320) {

    } else if (window.innerWidth >= 456) {
        bnbLetters();
    }
    // End of Bottom Navbar
    average.factory = facFactory


    // if(window.innerWidth <= 500){
    //     average.oneDay
    //     average.oneWeek
    //     average.oneMonth
    //     average.oneYear
    //     average.fiveYears
    //     document.getElementById("tenYear").style.display = "hidden";
    //     average.max
    // }else if(window.innerWidth >= 900) {
    //  bnbLetters();
    // }

    //Time Period Buttons
    //     if(window.innerWidth <= 320){

    // document.getElementById('tenYear').style.visibility='hidden';
    // document.getElementById('MAX').style.display='none';

    // }else if(window.innerWidth >= 456) {
    //  bnbLetters();
    // }
    //End of Time Period Buttons

    average.oneDay = function () {
        average.factory.timePeriod.text = " Today's date "
        average.factory.timePeriod.days = 1
        console.log('One day being CLICKED')
    }

    //1 Week
    average.oneWeek = function () {
        average.factory.timePeriod.text = " Past Week "
        average.factory.timePeriod.days = 7;
        console.log('1 week', 7);
    }

    //1 month
    average.oneMonth = function () {
        average.factory.timePeriod.text = " Current Month "
        average.factory.timePeriod.days = 30;
        console.log('1 month', 30);

    }
    //6 Months
    average.sixMonths = function () {
        average.factory.timePeriod.text = " The Last 6 Months "
        average.factory.timePeriod.days = 180;
        console.log('6 months', 180);

    }
    //1 Year
    average.oneYear = function () {
        average.factory.timePeriod.text = " Last Year "
        average.factory.timePeriod.days = 365;
        console.log('1 Year', 365);

    }
    //5 Years
    average.fiveYears = function () {
        average.factory.timePeriod.text = " The Last Five Years "
        average.factory.timePeriod.days = 1825;
        console.log('5 years', 1825);

    }
    //10 Year
    average.tenYears = function () {
        average.factory.timePeriod.text = " Ten Years "
        average.factory.timePeriod.days = 3650
        console.log('10 Years', 3650);

    }
    //Max that I am able to get.
    average.tenYears = function () {
        average.factory.timePeriod.text = " Max "
        average.factory.timePeriod.days = 9999
        console.log('Inception date', 9999);

    }



    // AVERAGE PRICE average CHART(FROM HIGHCHARTS)
    average.avgChart = function () {
        var chart = new Highcharts.Chart({
            chart: {
                //avgChart container on html page
                renderTo: 'avgChart',
                type: 'column'
            },
            title: {
                text: 'Average Stock Price',
            },
            subtitle: {
                // text: 'Source dev.markitondemand.com'
            },
            xAxis: {
                categories: [average.company],
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
                name: "Average Stock Price " + "$" + average.average + "",
                data: [average.average]

            }, {
                name: "" + average.factory.timePeriod.text + "Stock Price " + "$" + average.YaxisLP + "",
                data: [average.YaxisLP]

            }]
        });

    }



    // AVERAGE PRICE STOCK CHART(FROM HIGHCHARTS)

    // Age categories
    var categories = [' ', ' '];


    average.buySellChart = function () {
        // console.log('chart average.buy', average.buy)
        var chart = new Highcharts.Chart({
            chart: {
                //buySellChart container on html page
                renderTo: 'buySellChart',
                type: 'bar',
                events: {
                    load: function () {
                        // alert ('Chart loaded with series :'+ this.series[0].name);
                        console.log('average direction', average.direction)
                        if(average.direction == 'sell'){
                            
                 //POSITIVE
                            var selector = document.querySelectorAll('#buySellChart rect.highcharts-point.highcharts-negative')[0];
                        selector.style.display = 'none'
                        console.log('this is BUY selector ', selector);
                        }else{
                       

                                //NEGATIVE
                        var selector = document.querySelectorAll('#buySellChart rect.highcharts-point:not(.highcharts-negative)')[0];
                        selector.style.display = 'none'
                           console.log('this is SELL selector ', selector);
                        }
                    }
                },
            },
            // colors: ['rgb(000, 000, 000)', 'rgb(200, 200, 255)'],
            title: {
                text: 'Buying or Selling power'
            },
            subtitle: {
                text: "based on average stock price and " + average.factory.timePeriod.number + average.factory.timePeriod.text + ""
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


            // plotOptions: {
            //     series: {
            //         stacking: 'normal'
            //     }
            // },

            // tooltip: {
            //     formatter: function () {
            //         return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
            //             'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
            //     }
            // },

            series: [{
                name: 'Buy',
                data: average.buy
            }, {
                name: 'Sell',
                data: average.sell
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
        return sum / numbers.length;

    }


    stockInfo = [];
    average.getSymbol = {
        submit: function () {
            average.days = average.factory.timePeriod.days
            //     console.log('outside',stock.days)

            //  if(stock.days === 1){
            //      stock.average === stock.YaxisLP
            //      console.log('inside',stock.average)
            //      return stock.average
            //  }

            //1st PROMISE
            var stockPromise = $http.get('/stock' + '?symbol=' + average.factory.symbol);


            // 2nd PROMISE
            var chartPromise = $http.get('/chart?symbol=' + average.factory.symbol + '&days=' + average.days);
            Promise.all([stockPromise, chartPromise]).then(function success(resArray) {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart

                //stock Promise data
                // console.log('this is the resArray data',resArray[0].data)
                var info = JSON.parse(resArray[0].data)
                // console.log('this is the info', info)
                // console.log('stock?symbol success', info.LastPrice)
                average.info = info
                // console.log('average.info', average.info)
                average.company = average.info.Name
                // console.log('average.company', average.company)
                average.YaxisLP = Number(Math.round(average.info.LastPrice + 'e1') + 'e-1')  //rounding to the 2nd decimal example 1.05 = 1.1
                console.log('averageYaxisLP', average.YaxisLP)

                //chart Promise data
                // console.dir('this is the data we are looking for', resArray[1].data)
                console.log(resArray[1])
                var stockReturn = JSON.parse(resArray[1].data.replace("NaN", ""))
                // console.dir(averageReturn)
                console.log('stockReturn', stockReturn)

                // Getting the average for stock
                var numArray = stockReturn.Elements[0].DataSeries.close.values
                console.log('THIS IS THE NUMARRY', numArray)
                var avg = addThemAll(numArray)
                average.average = Number(Math.round(avg + 'e1') + 'e-1')  //rounding to the 2nd decimal example 1.05 = 1.1
                console.log('stock.average', average.average);

                // Getting the percentage of stock based on the average price and today's stock price.
                average.buy = [];
                average.sell = [];
                var diffInPrice = (+average.average - +average.YaxisLP);
                average.percentage = (+diffInPrice / +average.YaxisLP * 100);
                console.log('average.percent HI', average.percent)
                console.log('average.average HI2',average.average)
                console.log('average.YaxisLP HI3',average.YaxisLP)
                // console.log('figure it out average.percentage', typeof average.percentage)

                if (+average.percentage > 0) {

                     //If it is a negative number then BUY // average.buy.push.
                        average.buy.push(+average.percentage)
                    console.log('This is average.buy, number should be NEGATIVE pushing THIS ONE', average.buy)
                    average.buy.push(-average.percentage)
                  
                    average.direction = 'buy'
                    console.log('average.buy OPPOSITE', average.buy)

                   

                }
                //else if (Math.floor(Math.abs(average.percentage)) == 0) {
                //     console.log('average.percentage is 0', average.percentage)
                // } 
                else {
                   
                 
                    //If it is a positive number then SELL // average.sell.push.
                    average.sell.push(+average.percentage)
                    console.log('This is average.sell, number should be POSITIVE pushing THIS ONE', average.sell)

                    //Created this one because I need the opposite side of the graph to appear. I then am making this one transparent.
                    average.sell.push(-average.percentage)
                    average.direction = 'sell'
                    console.log('PURPLE average.sell OPPOSITE', average.sell)

                }

                // console.log('average.buy', average.buy)
                // console.log('average.sell', average.sell)

                // console.log('average average typeof', typeof average.average);
                // console.log('average.YaxisLP', average.YaxisLP);
                // console.log('diff in price', diffInPrice);
                // console.log('percentage', average.percentage);

                average.avgChart();
                average.buySellChart();
                Highcharts.setOptions(Highcharts.theme);
            },
                function failed(res) {
                    console.log('')
                })

            //how to access the x axisDates: res.data.Dates
            //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
        }
    }

    average.getSymbol.submit()


};


