var mainController = function($scope){
    console.log('Hello world!')
}

angular.module('app', [])
    .controller('mainController', ['$scope', mainController])
