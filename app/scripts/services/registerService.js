var app = angular.module('sbAdminApp');

app.factory("registerService", function($http,REST_BASE_URL) {

  var _registerData = function(obj) {
    var url = REST_BASE_URL + "/LoginAll/registerData"
		return $http.post(url, obj)
  }

  return {
    registerData : _registerData
  }

})
