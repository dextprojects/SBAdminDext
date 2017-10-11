var app=angular.module('sbAdminApp')

app.constant("REST_BASE_URL","http://localhost:1337");

app.controller('loginController', ['$scope', '$state', 'loginService',function ($scope,$state,loginService) {

  $scope.submit = function () {
    console.log("--Function-"+$scope.userEmail+$scope.userPassword);
    var obj={"userEmail": $scope.userEmail, "userPassword": $scope.userPassword}
    loginService.login(obj)
    .then(function(response) {
      console.log("--Response--"+response.data);
      if(response.data!="" && response.data!="0" && response.data!=0) {
        console.log("---Success--");
        $state.go('dashboard.home');
      } else {
        $scope.status="Email/Password is incorrect.."
      }
    }, function (err) {
      console.log(err);
    })
  }


}])
