// Market On Demand API (now IHSMarket)
angular.module('stockApp',[])
    .controller('stockController', stock)

    stock.$inject = ['$http']


        function stock($http){
            var stock = this;

            stock.greeting = 'Welcome to your stock page'


        stockInfo = [];
        stock.getTicker = function() {

            $http.get('http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol='+ stock.ticker)
            .then(function(res){
                stock.quote = res.data
                console.log(res.data)
            },
            function(err){
                console.log('Error loading Market API', err)
            });

        }



    }
    
//Learning how to use the markitondemand api.
//http://dev.markitondemand.com/MODApis/



    //company look up http://dev.markitondemand.com/Api/v2/Lookup/jsonp/?input=+ stock.companyName +


    //get ticker quote
    http://dev.markitondemand.com/Api/v2/Quote/jsonp/?symbol=GE
//Interactive Chart Data Input
 {"Normalized": false, "StartDate":"2011-03-01T00:00:00-00","EndDate":"2011-06-01T00:00:00-00","EndOffsetDays": 365, "NumberOfDays": 34, "DataPeriod": "Day", "DataInterval": 0, "LabelPeriod": Day, "LabelInterval": 1, "Elements": [{"Symbol": "GE", "Type": "price", "Params":["[c]"]}]}

 //my examples:
 //http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":730,"DataPeriod":"Day","Elements":[{"Symbol":"GE","Type":"price","Params":["c"]}]}

 {"Normalized": false, "StartDate":"2011-03-01T00:00:00-00","EndDate":"2011-06-01T00:00:00-00", "DataPeriod": "Day", "Elements": [{"Symbol": "GE", "Type": "price", "Params":["[c]"]}]}