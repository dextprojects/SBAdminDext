var app = angular.module('sbAdminApp');

app.constant("REST_BASE_URL","http://localhost:1337");

app.controller('registerController', ['$scope','$state','registerService', function($scope,$state,registerService){

  $scope.submit = function() {
    var obj={"userId" : $scope.name, "userName" : $scope.name, "userAge" : $scope.age, "userAddress" : $scope.address, "userEmail": $scope.email, "userType": "admin", "userGender": $scope.gender, "userPassword": $scope.password }
    console.log(obj.userAge);
    registerService.registerData(obj)
    .then(function(response) {
      console.log(response.data);
      if(response.data.id!="") {
        $scope.status=response.data.userName+": Your Account Successfully Created, Please Login..";
        $('#status').css('color','green');
        //$state.go('login');
      } else {
        $scope.status="Error In Generating Account";
        $('#status').css('color','red');
      }
    }, function(err) {
      $scope.status="Error In Generating Account";
      $('#status').css('color','red');
      console.log(err);
    }
    )
  }

}]);
