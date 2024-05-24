let shoppingList = localStorage.getItem("shoppingList") || [];

if (shoppingList === null) {
  shoppingList = [];
} else {
  // Parse the stored string back to an array
  shoppingList = JSON.parse(shoppingList);
}