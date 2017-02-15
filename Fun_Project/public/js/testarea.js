// // Getting the average number of something.
// var numArray = [1,2,3,4,5]

// function addThemAll(numbers){
//    var sum = 0
// for(var i=0; i<numbers.length; i++){
//     sum += numbers[i]
  
// }
//  return sum / numbers.length; 
// }

// console.log(addThemAll(numArray));


// function add(a,b){
// return  a + b
// }

// add(3,4);
// add(4,5)




// function inside of function and scope 
// var outer = function(){
//     var foo =10
//     var inner = function(){
//         console.log(foo)
//     }
// }
// return inner

// var doStuff = outer()

// doStuff();






// Testing how to push days into an array and display when you push 1D, 1W, etc buttons.
// days =[];

//   function oneDay(time){
//       days.push(time);
//     }
   
// oneDay(1)
// console.log(days)

// stock.days = [];

//    stock.oneDay = function(time){
//        stock.days.push(time)
        
//     }
//  stock.oneDay(1)
//  console.log(stock.days)







// var numbers = [];
// numbers.push(1);

// console.log(numbers); // [1, 2, 3, 4]






//I WAS GOING TO USE MOMENT.JS and learned this was easier for my project.

    //Buttons 1D, 1W, 1M, 6M, 1YR, 5Yr, Max.
    //1D
        // stock.oneDay = function($event){
        //     console.log('1 day', 1);
        //     return 1;
        // }
        // //1 Week
        //  stock.oneWeek = function($event){
        //     console.log('1 week', 7);
        //     return 7;
        // }
        // //1 month
        //  stock.oneMonth = function($event){
        //     console.log('1 month', 30);
        //     return 30;
        // }
        // //6 Months
        //  stock.sixMonths = function($event){
        //     console.log('6 months', 180);
        //     return 180;
        // }
        // //1 Year
        //   stock.oneYear = function($event){
        //     console.log('1 Year', 365);
        //     return 365;
        // }
        // //5 Years
        //  stock.fiveYears = function($event){
        //     console.log('5 years', 1825);
        //     return 1825;
        // }
        // //Max ?? Don't know how to get this one.
        // stock.Max = function($event){
        //     console.log('6 months', 180);
        //     return 'max';
        // }

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





    // A different chart I was looking at using.

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




// another way to do the same thing 


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

var x = Math.floor(Math.abs(-0.6))

console.log(x)

var y = Number(Math.round(-1.07+'e1')+'e-1')
console.log(y)