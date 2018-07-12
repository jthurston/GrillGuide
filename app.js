var app=angular.module('GrillGuide',[]);

app.controller('GuideController',['$scope','$http',function($scope, $http){
  $scope.demo = "somestring";
  $http.get("grillguide.json").then(function(response) {
    $scope.myData = response.data.meats;
    $scope.woodData = response.data.woods;
  });
}]);
