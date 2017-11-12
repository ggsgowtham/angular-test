(function () {
'use strict';

var shoppingList1 = [
    "Milk", "Boost", "Biscuit", "popcorn","Banana"
  ];

var shoppingList2 = [
{
  name : "Milk",
  quantity : "2"
},

{
  name : "Boost",
  quantity : "4"
},

{
  name : "Biscuit",
  quantity : "4"
},

{
  name : "popcorn",
  quantity : "2"
},

];

angular.module('shoppingListApp',[])
.controller('ShoppingListController',ShoppingListController);

ShoppingListController.$inject = ['$scope'];

function ShoppingListController($scope) {

  $scope.shoppingList1 = shoppingList1;
  $scope.shoppingList2 = shoppingList2;
}
console.log(shoppingList1);

})();
