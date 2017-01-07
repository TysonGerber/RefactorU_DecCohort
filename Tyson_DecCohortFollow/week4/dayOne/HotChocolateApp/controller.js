angular.module('App', ['ngRoute'])
    .controller('hotController', hotFunction)
    .config(Router)

Router.$inject = ['$routeProvider']

function Router($routeProvider){

    $routeProvider
$routeProvider
.when('/', {
    templateUrl: '/home.html'
})

    .when('/menu', {
        templateUrl: '/menu.html'
    })
    .otherwise({redirectTo:'/'})
}

function hotFunction() {
    var hCtrl = this;

    hCtrl.greeting = 'This is my Hot Chocolate Factory'

    hCtrl.hotChocolates = [
        {
            name: 'Peppermint Hot Chocolate',
            price: 2,
        },
        {
            name: 'HazelNut Hot Chocolate',
            price: 3,
        },
        {
            name: 'ICED Hot Chocolate',
            price: 4,
        },
        {
            name: 'Plain Hot Chocolate',
            price: 1,
        }

    ]
};
