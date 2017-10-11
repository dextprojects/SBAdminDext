'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
var app=angular.module('sbAdminApp');

app.constant("REST_BASE_URL","http://localhost:1337");

app.controller('MainCtrl',['$state','$scope','getDataService', function($state,$scope,getDataService) {
  	getDataService.check('all')
  	.then(function(response) {
		console.log(response.data);
		$scope.comment=response.data.comment
		$scope.task=response.data.task
		$scope.order=response.data.order
		$scope.ticket=response.data.ticket
	}, function (err) {
		console.log("-Error-");
		console.log(err);
	})

  	$scope.getData = function(name) {
  		console.log(name);
  		getDataService.setIdName(name);
  		$state.go('dashboard.requestData');
  	}

  }]);
