function renderMenusTemplate(indexMenu, newPrice) {
    return `<div class="single_menu">
          <div class="menus_general">
              <div class="menu_main_line">
                  <h3 id='menu_name'>${menus[indexMenu].name}</h3>
                  <button class="add_to_cart_btn btn" onclick="addToShoppingCart(${indexMenu});activateBuyBtn()"> + </button>
              </div>
              <p>${menus[indexMenu].description}</p>
              <p class="price">${newPrice} €</p>        
          </div>
      </div>`;
}

function shoppingCartTemplate(index, newPrice) {
    return `<div class="single_cart_menu">
      <div class="menu_main_line">
          <div class="amount_name">
                <button class="delete_btn btn" onclick= "decreaseMenu(${index})">-</button>
                <div class="menuAmount">
                    <span id='cart-info-am'>${shoppingCart[index].amount}×</span>
                    <h3 id='cart-info-name'>${shoppingCart[index].name}</h3>
                </div>
                <button class="add_btn btn" onclick= "increaseMenu(${index});activateBuyBtn()">+</button>
          </div>
          <p class="price"> ${newPrice.toFixed(2)} €</p>
      </div>
  
</div>
`
}