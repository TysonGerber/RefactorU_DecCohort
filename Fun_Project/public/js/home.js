// Market On Demand API (now IHSMarket)
angular.module('stockApp')
    .controller('homeController', home)

home.$inject = ['$http', 'facFactory']


function home($http, facFactory) {
    var home = this;

home.factory = facFactory;

home.search= ''
if(window.innerWidth <= 530){
    home.search='Ex: GE'
}else if(window.innerWidth >= 535 && window.innerWidth <1078){
    home.search='Ex: AAPL or Apple'
}else if(window.innerWidth >= 1079 ){
    home.search='Ticker: "AAPL" or Company: "Apple"'
}
    
      
// stock.greeting = 'Welcome to Day Stocker!'

    //renaming the facFactory.
// home.factory = facFactory
    

    homeInfo = [];

    home.getSymbol = {
        submit: function (event) {

            $http.get('/stock' + '?symbol=' + home.factory.symbol).then(function success(res) {
                var info = JSON.parse(res.data)
                console.log('stock?symbol success', info)
                home.factory.company =info.Name
                home.factory.info = info
                //  home.factory.info = info
            },
                function failed(res) {
                    console.log('stock?symbol failed', res.data)
                }
            )

            console.log('home.factory.symbol', home.factory.symbol)
            $http.get('/chart?symbol=' + home.factory.symbol + '&days=' + home.factory.timePeriod.days).then(function success(res) {
                // var chart = JSON.parse(res.data)
                // console.log('Chart data successful', res.data)
                // stock.chart = chart

                var stockReturn = JSON.parse(res.data)
                console.log('THIS IS STOCK RETURN', stockReturn)
                console.log('stockReturnDates', stockReturn.Dates)
                // Xaxis stock time periods / dates 
                home.factory.Xaxis = stockReturn.Dates.map(function(date){
                    //was in format 2016-01-03T00:00:00 only need the date not time. Looping through each array and keeping first index [0-10] and then replacing the month portion of the date and changing it from number 01 to Jan.
                    return date.substring(0,10).replace('-01-',' Jan ').replace('-02-', 'Feb')
                })
                home.factory.Yaxis = stockReturn.Elements[0].DataSeries.close.values
                console.log('home.factory.Yaxis', home.factory.Yaxis)
              console.dir(stockReturn)

            //    Highcharts.setOptions(Highcharts.theme);
               window.location ='#/stock'
          

      
             
            
            },
                function failed(res){
                    console.log('')
                })

                //how to access the x axisDates: res.data.Dates
                //how to access the y axisPrices: res.data.Elements[0].DataSeries.close.values
                $http.post('/active-stock', {activeStock :home.factory.symbol, days: home.factory.timePeriod.days}).then(function(symbol){
                    console.log('success adding stock symbol, to db: ', home.factory.symbol);
                    // redirect('/home.html')
                })
        }
    }


};
