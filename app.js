var app=angular.module('GrillGuide',[]);

app.controller('GuideController',['$scope','$http',function($scope, $http){
  $scope.demo = "Meat Grilling Guide";
  $http.get("grillguide.json").then(function(response) {
    $scope.meattemp = response.data.meattemps;
    $scope.myData = response.data.meatsmokes;
    $scope.woodData = response.data.woods;
  });
}]);
