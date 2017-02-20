// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http) {
    var stock = this;

    // stock.greeting = 'Welcome to Day Stocker!'

    stock.search= ''
if(window.innerWidth <= 530){
    stock.search='Ex: GE'
}else if(window.innerWidth >= 535 && window.innerWidth <1078){
    stock.search='Ex: AAPL or Apple'
}else if(window.innerWidth >= 1079 ){
    stock.search='Ticker: "AAPL" or Company: "Apple"'
}
    
    
var timePeriod = {
    
    text: ' Today\'s Date',
    number: "",
    days: 9999
    
}


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

            $http.get('/chart?symbol=' + stock.symbol + '&days=' + timePeriod.days).then(function success(res) {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart

                var stockReturn = JSON.parse(res.data)
                console.log('THIS IS STOCK RETURN', stockReturn)
                console.log('stockReturnDates', stockReturn.Dates)
                // Xaxis stock time periods / dates 
                stock.Xaxis = stockReturn.Dates.map(function(date){
                    //was in format 2016-01-03T00:00:00 only need the date not time. Looping through each array and keeping first index [0-10] and then replacing the month portion of the date and changing it from number 01 to Jan.
                    return date.substring(0,10).replace('-01-',' Jan ').replace('-02-', 'Feb')
                })
                stock.Yaxis = stockReturn.Elements[0].DataSeries.close.values

              console.dir(stockReturn)
               Highcharts.setOptions(Highcharts.theme);
      
             
            
            },
                function failed(res){
                    console.log('')
                })

                //how to access the x axisDates: res.data.Dates
                //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
                $http.post('/active-stock', {activeStock :stock.symbol, days: timePeriod.days}).then(function(symbol){
                    console.log('success adding stock symbol, to db: ', symbol.data);
                    redirect('/home.html')
                })
        }
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