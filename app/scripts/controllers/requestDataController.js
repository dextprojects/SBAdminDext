var app = angular.module('sbAdminApp');

app.controller('requestDataController',['$scope','getDataService', function($scope,getDataService) {
	$scope.requestData=getDataService.getIdName();
	getDataService.check(getDataService.getIdName())
	  	.then(function(response) {
			console.log(response.data.length);
			$scope.responseData=response;
		}, function (err) {
			console.log("-Error-");
			console.log(err);
		})
}])