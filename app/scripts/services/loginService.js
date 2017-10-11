var app = angular.module("sbAdminApp")

app.factory("loginService", function ($http,REST_BASE_URL) {

  var _login = function (obj) {
    console.log("-login-"+obj.userEmail);
    var url = REST_BASE_URL + "/register/login"
    console.log(url);
		return $http.post(url, obj);
  }

  return {
    login: _login
  }
})
