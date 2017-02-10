// Market On Demand API (now IHSMarket)
angular.module('stockApp', [])
    .controller('stockController', stock)

stock.$inject = ['$http']


function stock($http) {
    var stock = this;

    stock.greeting = 'Welcome to your stock page'

// STOCK PRICE CHART
stock.stockChart = function() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                stops: [
                    [0, 'rgb(300, 300, 300)'],
                    [1, 'rgb(200, 200, 255)']
                ]
            },
            type: 'line'
        },
        xAxis: {
            categories: stock.Xaxis
        },
        yAxis: {   
        },
        legend: {
            layout: 'vertical',
            backgroundColor: '#000000',
            floating: true,
            align: 'left',
            x: 100,
            verticalAlign: 'top',
            y: 70
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
                    this.x +': '+ this.y;
            }
        },
        plotOptions: {
        },
        series: [{
        name: 'ge',
            data: stock.Yaxis      
        }]
    });
};



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
                stock.Xaxis = stockReturn.Dates.map(function(date){
                    return date.substring(0,10).replace('-01-',' Jan ')
                })
                stock.Yaxis = stockReturn.Elements[0].DataSeries.close.values

              console.dir(stockReturn)
              stock.stockChart();
            
            },
                function failed(res){
                    console.log('')
                })

                //how to access the x axisDates: res.data.Dates
                //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
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
var string = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":730,"DataPeriod":"Day","Elements":[{"Symbol":"GE","Type":"price","Params":["c"]}]}'

// { "Normalized": false, "StartDate":"2011-03-01T00:00:00-00", "EndDate":"2011-06-01T00:00:00-00", "DataPeriod": "Day", "Elements": [{ "Symbol": "GE", "Type": "price", "Params": ["[c]"] }] }