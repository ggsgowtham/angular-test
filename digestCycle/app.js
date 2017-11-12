
(function() {
  'use strict';

  angular.module('CounterApp',[])
  // passing value DIController for controller
  .controller('CounterController', CounterController);


CounterController.$inject = ['$scope'];
function CounterController($scope){
$scope.onceCounter = 0;
$scope.counter = 0;
$scope.name = "Gowtham";
$scope.showNumberOfWatchers = function () {

// $$watchersCount is an internal AngularJS object
//to get idea of this inspect the button in browser
  console.log('Watchers :',$scope.$$watchersCount);
};

//creating function for counterOnce Button
$scope.countOnce = function () {
  $scope.onceCounter = 1;
};

//This is used to get the incrementing count
$scope.upCounter = function () {
  $scope.counter++;
};

$scope.$watch(function () {
  console.log("Digest Loop Fired!");
})
//This $watch is used to check the count
//This is process1 is done by controllers
//the process2 is done simply in HTML page by passing value as done in line22,23

// $scope.$watch('onceCounter', function (newValue,oldValue) {
//   console.log("onceCounter oldValue :",oldValue);
//   console.log("onceCounter newValue :",newValue);
// });
//
// $scope.$watch('counter', function (newValue,oldValue) {
//   console.log("counter oldValue :",oldValue);
//   console.log("counter newValue :",newValue);
// });


}

})();
