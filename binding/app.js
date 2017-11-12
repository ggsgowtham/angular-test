(function () {
'use strict';

angular.module('BindingApp',[])
.controller('BindingController',BindingController);

BindingController.$inject = ['$scope'];

function BindingController($scope) {

  $scope.firstName = "Gowtham";
  // $scope.fullName = "";

  $scope.showNumberOfWatchers = function () {
//$$watchersCount is to get the count of Watchers
    console.log("Watchers :", $scope.$$watchersCount);
  };

  $scope.setFullName = function () {

    $scope.fullName = $scope.firstName + " " + "GGS";
  };

  $scope.logfullName = function () {

    console.log("FullName :",$scope.fullName);
  };

  $scope.logFirstName = function () {

    console.log("FirstName :",$scope.firstName);
  };
}

})();
