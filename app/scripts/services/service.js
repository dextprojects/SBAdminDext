'use strict';
var app = angular.module('sbAdminApp');

app.factory("getDataService", function ($http, REST_BASE_URL) {

	var idName;
	var _check=function (id) {
		var obj={name: id}
		console.log(obj);
		var url = REST_BASE_URL + "/User/getData"
		return $http.post(url, obj)
	}
	
	return {
		check: _check,
		getIdName: function () {
            return idName;
        }, setIdName: function (value) {
        	idName=value;
        }
	}
})