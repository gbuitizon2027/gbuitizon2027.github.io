let total = 0;

function addToCart(product, price){
  let newProduct = {
    prod_name: product,
    prod_price: price
  }

  shoppingList.push(newProduct);
  alert(newProduct.prod_name + ' has been added to your cart.');

  saveShoppingList();
}

function saveShoppingList(){
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}