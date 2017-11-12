var numberArray = [1,2,3,4,5,6,7,8];
console.log("NumberArray: ", numberArray);

function above5filter(value) {

  return value > 5;
}

var filteredNumberArray = numberArray.filter(above5filter);
console.log("filtered number Array: ", filteredNumberArray);

var shoppingList = [
  "Milk","Banana","Biscuits","GGSsamosa","GGSpanipuri"
];
console.log("shoping List:", shoppingList);

// Create Filtered ShopingList using Filter ng-repeat
//only items containing GGS are filtered from array
var searchValue = "GGS";
function containsFilter(value) {
  return value.indexOf(searchValue)!== -1;
}
var searchedShopingList = shoppingList.filter(containsFilter);
console.log("search shoping list:", searchedShopingList);
