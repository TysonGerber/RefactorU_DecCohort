
angular.module('app', [])
    
    .controller('mainController', mainControllerFunction)
    .controller('secondController', secondaryControllerFunction);

mainControllerFunction.$inject = ['$scope'];

function mainControllerFunction($scope) {
  
   
    $scope.color = 'red'

    $scope.changeGreeting = function() {
        if ($scope.greeting == 'Hello') {
            $scope.greeting = "Goodbye"
            $scope.color = 'blue'
            console.log($scope.visitorName)
        } else {
            $scope.greeting = "Hello"
            $scope.color = 'red'
        }
    }
}

function secondaryControllerFunction($scope) {
    $scope.greeting = 'Yo'

    $scope.changeGreeting2 = function() {
        if ($scope.greeting == 'Yo') {
            $scope.greeting = "Later"
        } else {
            $scope.greeting = "Yo"
        }
    }
}
