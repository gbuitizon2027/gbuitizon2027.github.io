let shoppingList_str = localStorage.getItem('shoppingList');
shoppingList = JSON.parse(shoppingList_str);

displayCart();

function displayCart(){
  document.getElementById('ulCart').innerHTML = '';
  if (shoppingList.length == 0){
    document.getElementById('ulCart').innerHTML = '<p>Nothing in your cart yet.</p>';
  }

  let total = 0;

  for (var i = 0; i < shoppingList.length; i++){
    document.getElementById('ulCart').innerHTML += `<li class="list-group-item d-flex justify-content-between align-content-center"><div><p class="mb-0 inline-block prod-name">` + shoppingList[i].prod_name + `</p><p class="mb-0">` + shoppingList[i].prod_price + `</p></div><br><p class="remove-btn mb-0" onclick="deleteItem(` + i + `)">Remove</p></li>`;
    total += shoppingList[i].prod_price;
  }

  document.getElementById('total').innerHTML = total;
}

function clearCart(){
  shoppingList = [];

  saveShoppingList();
  displayCart();
}

function saveShoppingList(){
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

function deleteItem(i){
  if (i > -1) {
    shoppingList.splice(i, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    displayCart();
  }
}

function updateForm(){
  document.getElementById('cust_order').value = JSON.stringify(shoppingList);
}