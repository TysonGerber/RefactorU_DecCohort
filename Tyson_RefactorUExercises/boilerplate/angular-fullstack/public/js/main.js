angular.module('HalloweenApp', [])

angular.module('HalloweenApp')
	.controller('pumpkinTroller', ['$scope', '$http', function($scope, $http){
		$scope.greeting = 'Happy Halloween'
		// console.log($http)

		$http.get('/getcostumes')
			.then(function(returnData){
				$scope.costumes = returnData.data
			})


		$scope.createCostume = function(){
			// console.log($scope.newCostume)

			// POST data to server
			$http.post('/createcostume', $scope.newCostume)
				.then(function(returnData){
					console.log( returnData.data )

					$scope.costumes = returnData.data
				})


		}



	}])

	// <form action="/submit" method="POST">