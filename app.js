//Sample js code

 // (function functionName() {

 // 'use strict';
// angular.module('myFirstApp',[])

// .controller('myFirstController', function ($scope) {

  // $scope.name = "GGSGowtham";
  // $scope.sayHello = function() {
      // return "this is ur first Angular App";
  // };
// });

// })();


(function() {

  'use strict';

  angular.module('NameCalculator',[])
  .controller('NameCalculatorController',function($scope) {
      $scope.name = ""; //intial name is empty string
      $scope.totalvalue = 0; //intial no name is given so default is zero//
      $scope.displayNumeric = function() {

        //get value from function
        //gets updated by writing $scope.name
        var totalNameValue = calculateNumericForString($scope.name);
        $scope.totalvalue = totalNameValue;
      };
      //Function written to calculate letters of written string//
      function calculateNumericForString(string) {
        var totalStringValue = 0;
        for(var i=0; i<string.length; i++){
        totalStringValue += string.charCodeAt(i); //get string charCode at everyposition//
      }
      return totalStringValue;
    }
  });
})();
