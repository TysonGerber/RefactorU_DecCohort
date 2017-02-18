// Market On Demand API (now IHSMarket)
angular.module('homeApp', [])
    .controller('homeController', home)

home.$inject = ['$http']


function home($http) {
    var home = this;


home.search= ''
if(window.innerWidth <= 530){
    home.search='Ex: GE'
}else if(window.innerWidth >= 535 && window.innerWidth <1078){
    home.search='Ex: AAPL or Apple'
}else if(window.innerWidth >= 1079 ){
    home.search='Ticker: "AAPL" or Company: "Apple"'
}
    
      
var timePeriod = {
    
    text: ' Today\'s Date',
    number: "",
    days: 9999
    
}

        home.oneDay = function(){
            timePeriod.text = " Today's date "
            timePeriod.days= 1
            console.log('One day being CLICKED')
        }
      
        //1 Week
         home.oneWeek = function(){
               timePeriod.text = " Past Week "
               timePeriod.days = 7;
            console.log('1 week', 7);
        }
        
        //1 month
         home.oneMonth = function(){
              timePeriod.text = " Current Month "
               timePeriod.days = 30;
            console.log('1 month', 30);
         
        }
        //6 Months
         home.sixMonths = function(){
              timePeriod.text = " The Last 6 Months "
               timePeriod.days = 180;
            console.log('6 months', 180);
    
        }
        //1 Year
          home.oneYear = function(){
               timePeriod.text = " Last Year "
               timePeriod.days = 365;
            console.log('1 Year', 365);
          
        }
        //5 Years
         home.fiveYears = function(){
              timePeriod.text = " The Last Five Years "
               timePeriod.days = 1825;
            console.log('5 years', 1825);
         
        }
        //10 Year
        home.tenYears = function(){
             timePeriod.text = " Ten Years "
               timePeriod.days= 3650
            console.log('6 months', 3650);
           
        }
         //Max that I am able to get.
        home.tenYears = function(){
             timePeriod.text = " Ten Years "
               timePeriod.days= 9999
            console.log('6 months', 9999);
           
        }

// STOCK PRICE CHART
home.stockChart = function() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo:'container',
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
            data: stock.Yaxis,      
        }]
    });
};



    home.greeting = 'Welcome to Day Stocker!'


    $http.get('/current_stock').then(function success(res) {
               console.log(res.data)

            },
                function failed(res) {
                    console.log('stock?symbol failed', res.data)
                }
            )

};
