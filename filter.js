var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number array: ", numberArray);

function above5Filter(value) {
  return value > 5;
}

var filteredNumberArray = numberArray.filter(above5Filter);

// var filteredNumberArray = numberArray.filter(function (value) {
//     return value > 5;
// });

console.log("Filtered Numer Array: ", filteredNumberArray);


var shoppingList1 = [
  "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Pepto Bismol",
  "Pepto Bismol (Chocolate Flavor)","Pepto Bismol (Cookie Flavor)",
];

console.log("Shopping List: ", shoppingList1);

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}

var searchShoppingList = shoppingList1.filter(containsFilter);
console.log("Searching Shopping List: ", searchShoppingList);
