(function() {
  'use strict';

  angular.module('DIAPP',[])
  // passing value DIController for controller

  .controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController($scope, $filter){
  $scope.name="Gowtham";

  $scope.upper = function () {

    var upCase = $filter('uppercase');
    $scope.name= upCase($scope.name);
  };
}

})();


// THis is done using javascript minfier from online
// !function(){"use strict";function n(n,e){n.name="Gowtham",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}angular.module("DIAPP",[]).controller("DIController",n)}();


// !function(){"use strict";function e(e,n){e.name="Gowtham",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIAPP",[]).controller("DIController",["$scope","$filter",e])}();


// !function(){"use strict";function e(e,n){e.name="Gowtham",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIAPP",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
