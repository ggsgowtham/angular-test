(function () {

  'use strict';

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListAddController',ShoppingListAddController)
  .controller('ShoppingListShowController',ShoppingListShowController)
  // Service is declared
  .service('ShoppingListService',ShoppingListService);

  //Responsible for adiing items to shoppingList
  ShoppingListAddController.$inject = ['ShoppingListService'];

  function ShoppingListAddController(ShoppingListService) {
    //itemAdder is label from HTML
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {

      ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
    }
  }

  //Displaying the items in shopping List
  ShoppingListShowController.$inject = ['ShoppingListService'];

  function ShoppingListShowController(ShoppingListService) {

    var showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  function ShoppingListService() {

    var service = this;
    //List of items
    var items =  [];

    service.addItem = function (itemName,quantity) {
      var item = {

        name : itemName,
        quantity : quantity
      };
      items.push(items);
    };

    service.removeItem = function (itemIndex) {
        items.splice(itemIndex,1);
    };
    service.getItems = function () {
        return items;
    };
  }

})();
