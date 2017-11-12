//This is example for using uppercase filter

// (function() {
//   'use strict';
//
//   angular.module('MsgApp',[])
//   // passing value DIController for controller
//
//   .controller('MsgController', MsgController);
//
// MsgController.$inject = ['$scope', '$filter'];
// function MsgController($scope, $filter){
//   $scope.name="Gowtham";
//   $scope.stateOfBeing="hungry";
//   $scope.foodCost = 40.00;
//   $scope.sayMessage = function () {
//     var msg = "Gowtham likes to eat snacks and watch movies!";
//     var output = $filter('uppercase')(msg);
//     return output;
//   };
//
//   $scope.feed = function () {
//
//     $scope.stateOfBeing = "fed";
//   };
// }
//
// })();


//Example for using custom filter

(function() {
  'use strict';

  angular.module('MsgApp',[])
  // passing value DIController for controller
  .controller('MsgController', MsgController)
  .filter('loves' , LovesFilter)
  .filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter){
  $scope.name="Gowtham";
  $scope.stateOfBeing="hungry";
  // Normal message we wrote
  $scope.sayMessage = function () {
    var msg = "Gowtham likes to eat snacks and watch movies!";
    return msg;
  };
  // This is the message we going to replace
  $scope.sayLovesMessage = function () {
    var msg =  "Gowtham likes to eat snacks and watch movies!";
    msg = lovesFilter(msg)
    return msg;
  };

  $scope.feed = function () {

    $scope.stateOfBeing = "fed";
  };
}

//It is to be created outside controller
// Creating function for custom filter
//since it is factory function it returns other function
function LovesFilter() {

//checks/execute input is empty or present for first line
//second line replaces the likes with loves
  return function(input) {
    input = input || "";
    input = input.replace("likes","loves");
    return input;
  };
}

// In this custom filter we use inside HTML so we dont write in inject
function TruthFilter() {

return function(input, target, replace) {
  input = input || "";
  input = input.replace(target, replace);
  return input;
};
}

})();
