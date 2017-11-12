(function() {
  'use strict';

  angular.module('MsgApp',[])
  // passing value DIController for controller

  .controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
  $scope.name="Gowtham";
  $scope.stateOfBeing="hungry";
  $scope.sayMessage = function () {
    return "Gowtham likes to eat snacks and watch movies!"
  };

  $scope.feed = function () {

    $scope.stateOfBeing = "fed";
  };
}

})();
