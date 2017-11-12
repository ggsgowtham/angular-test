(function() {
  'use strict';

  angular.module('DIAPP',[])
  // passing value DIController for controller
  .controller('DIController',DIController);

function DIController($scope, $filter){
  $scope.name="Gowtham";

  $scope.upper = function () {

    var upCase = $filter('uppercase');
    $scope.name= upCase($scope.name);
  };
}

})();
