// Market On Demand API (now IHSMarket)
angular.module('stockApp')
    .controller('stockController', stock)

stock.$inject = ['$http', 'facFactory']


function stock($http, facFactory) {

    var stock = this;


// Bottom Navbar
var bnbLetters = function(){
    stock.homeBNB ='Home',
    stock.stocksBNB ='Stocks',
    stock.averageBNB='Average',
    average.logoutBNB= 'Logout',
     average.dayStocker= 'Day Stocker',
    stock.otherBNB='Other'
}

if(window.innerWidth <= 320){
    
}else if(window.innerWidth >= 456) {
 bnbLetters();
}

    // stock.greeting = 'Welcome to Day Stocker!'

    //renaming the facFactory.

    stock.factory = facFactory
    console.log('stock.factory.Yaxis',stock.factory.Yaxis)
   

    stock.search = ''
    if (window.innerWidth <= 530) {
        stock.search = 'Ex: GE'
    } else if (window.innerWidth >= 535 && window.innerWidth < 1078) {
        stock.search = 'Ex: AAPL or Apple'
    } else if (window.innerWidth >= 1079) {
        stock.search = 'Ticker: "AAPL" or Company: "Apple"'
    }



//STOCK theme




// STOCK CHART
    stock.stockChart = function () {
           
        var chart = new Highcharts.Chart('container', {


        rangeSelector: {
            selected: 1
        },

        title: {
            text: stock.factory.company
        },

        series: [{
            name: stock.factory.company,
            data: stock.factory.Yaxis,
            type: 'areaspline',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
 Highcharts.setOptions(Highcharts.theme);
};

console.log('stock.factory.company', stock.factory.company)

        // // STOCK PRICE CHART
        // stock.stockChart = function () {
        //     var chart = new Highcharts.Chart({
        //         chart: {
        //             renderTo: 'container',
        //             backgroundColor: {
        //                 linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        //                 stops: [
        //                     [0, 'rgb(300, 300, 300)'],
        //                     [1, 'rgb(200, 200, 255)']
        //                 ]
        //             },
        //             type: 'line'
        //         },
        //         xAxis: {
        //             categories: stock.factory.Xaxis
        //         },
        //         yAxis: {
        //         },
        //         legend: {
        //             layout: 'vertical',
        //             backgroundColor: '#000000',
        //             floating: true,
        //             align: 'left',
        //             x: 100,
        //             verticalAlign: 'top',
        //             y: 70
        //         },
        //         tooltip: {
        //             formatter: function () {
        //                 return '<b>' + this.series.name + '</b><br/>' +
        //                     this.x + ': ' + this.y;
        //             }
        //         },
        //         plotOptions: {
        //         },
        //         series: [{
        //             name: stock.factory.symbol,
        //             data: stock.factory.Yaxis,
        //         }]
        //     });
        // };
    
        console.log('stock.factory.Xaxis',stock.factory.Xaxis)
        console.log('stock.factory.symbol', stock.factory.symbol)
//first time through.
 stock.stockChart();

        stockInfo = [];

        stock.getSymbol = {
            submit: function (event) {

                $http.get('/stock' + '?symbol=' + stock.factory.symbol).then(function success(res) {
                    var info = JSON.parse(res.data)
                      var company= JSON.parse(res.data.Symbol)
                    //   console.log('company',company)
                    // console.log('stock?symbol success', info)
                    // console.log(typeof stock.factory.symbol)
                    // stock.factory.info = info

                },
                    function failed(res) {
                        console.log('stock?symbol failed', res.data)
                    }
                )

                console.log('stock.factory.symbol', stock.factory.symbol)
                console.log('stock.factory.timePeriod.days', stock.factory.timePeriod.days)

                $http.get('/chart?symbol=' + stock.factory.symbol + '&days=' + stock.factory.timePeriod.days).then(function success(res) {
                    // var chart = JSON.parse(res.data)
                    // console.log('Chart data successful', res.data)
                    // stock.chart = chart
                    

                    var stockReturn = JSON.parse(res.data)
                    console.log('THIS IS STOCK RETURN', stockReturn)
                    console.log('stockReturnDates', stockReturn.Dates)
                    // Xaxis stock time periods / dates 
                    stock.factory.Xaxis = stockReturn.Dates.map(function (date) {
                        //was in format 2016-01-03T00:00:00 only need the date not time. Looping through each array and keeping first index [0-10] and then replacing the month portion of the date and changing it from number 01 to Jan.
                        return date.substring(0, 10).replace('-01-', ' Jan ').replace('-02-', 'Feb')
                    })
                     console.log('stock.factory.Xaxis', stock.factory.Xaxis)
                    // stock.Yaxis = stockReturn.Positions
                    // stock.Yaxis = stockReturn.Dates
                    stock.factory.Yaxis = stockReturn.Elements[0].DataSeries.close.values
                    console.log('This is the YAXIS',stock.factory.Yaxis)

                    console.dir(stockReturn)
               
                    stock.stockChart();
            

                },
                    function failed(res) {
                        console.log('')
                    })

                //how to access the x axisDates: res.data.Dates
                //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
                $http.post('/active-stock', { activeStock: stock.factory.symbol, days: stock.factory.timePeriod.days }).then(function (symbol) {
                    console.log('success adding stock symbol, to db: ', symbol.data);
                    // redirect('/stock.html')
                })
            }
        }
      

 stock.oneDay = function () {
        stock.factory.timePeriod.text = " Today's date "
        stock.factory.timePeriod.days = 1
        console.log('One day being CLICKED')
         stock.stockChart();
    }

    //1 Week
    stock.oneWeek = function () {
        stock.factory.timePeriod.text = " Past Week "
        stock.factory.timePeriod.days = 7;
        console.log('1 week', 7);
         stock.getSymbol.submit();
    }

    //1 month
    stock.oneMonth = function () {
        stock.factory.timePeriod.text = " Current Month "
        stock.factory.timePeriod.days = 30;
        console.log('1 month', 30);
 stock.getSymbol.submit();
    }
    //6 Months
    stock.sixMonths = function () {
        stock.factory.timePeriod.text = " The Last 6 Months "
        stock.factory.timePeriod.days = 180;
        console.log('6 months', 180);
  stock.getSymbol.submit();
    }
    //1 Year
    stock.oneYear = function () {
        stock.factory.timePeriod.text = " Last Year "
        stock.factory.timePeriod.days = 365;
        console.log('1 Year', 365);
  stock.getSymbol.submit();
    }
    //5 Years
    stock.fiveYears = function () {
        stock.factory.timePeriod.text = " The Last Five Years "
        stock.factory.timePeriod.days = 1825;
        console.log('5 years', 1825);
  stock.getSymbol.submit();
    }
    //10 Year
    stock.tenYears = function () {
        stock.factory.timePeriod.text = " Ten Years "
        stock.factory.timePeriod.days = 3650
        console.log('10 years', 3650);
  stock.getSymbol.submit();
    }
    //Max that I am able to get.
    stock.tenYears = function () {
        stock.factory.timePeriod.text = " Max "
        stock.factory.timePeriod.days = 9999
        console.log('Max', 9999);
  stock.getSymbol.submit();
    }

    };
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



//Learning how to use the markitondemand api.
//http://dev.markitondemand.com/MODApis/



//company look up http://dev.markitondemand.com/Api/v2/Lookup/jsonp/?input=+ stock.companyName +


//get ticker quote
//http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol=GE
//Interactive Chart Data Input
// { "Normalized": false, "StartDate":"2011-03-01T00:00:00-00", "EndDate":"2011-06-01T00:00:00-00", "EndOffsetDays": 365, "NumberOfDays": 34, "DataPeriod": "Day", "DataInterval": 0, "LabelPeriod": Day, "LabelInterval": 1, "Elements": [{ "Symbol": "GE", "Type": "price", "Params": ["[c]"] }] }

//my examples:
// var string = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":730,"DataPeriod":"Day","Elements":[{"Symbol":"GE","Type":"price","Params":["c"]}]}'

// { "Normalized": false, "StartDate":"2011-03-01T00:00:00-00", "EndDate":"2011-06-01T00:00:00-00", "DataPeriod": "Day", "Elements": [{ "Symbol": "GE", "Type": "price", "Params": ["[c]"] }] }