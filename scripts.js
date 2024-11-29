function renderMenus() {
  let menusContentRef = document.getElementById("menusContent");
  for (let indexMenu = 0; indexMenu < menus.length; indexMenu++) {
    let newPrice = menus[indexMenu].price.toFixed(2);
    let menu = menus[indexMenu];
    let menuPicture = menu.png;
    menusContentRef.innerHTML += renderMenusTemplate(indexMenu, newPrice);
  }
}

function checkCurrentIndex(indexMenu) {
  for (let indexChecked = 0; indexChecked < shoppingCart.length; indexChecked++) {
    if (shoppingCart[indexChecked].name === menus[indexMenu].name) {
      return indexChecked;
    }
  }
  return -1;
}

function addToShoppingCart(indexMenu) {
  let cartIndex = checkCurrentIndex(indexMenu);
  if (cartIndex == -1) {
    shoppingCart.push({
      amount: 1,
      name: menus[indexMenu].name,
      price: menus[indexMenu].price,
    });
  } else {
    shoppingCart[cartIndex].amount += 1; 
  }
  renderShoppingCart();
}

function renderShoppingCart() {
  let cartRef = document.getElementById("shoppingCartList");
  cartRef.innerHTML = "";

  for (let index = 0; index < shoppingCart.length; index++) {
    let newPrice = shoppingCart[index].price*shoppingCart[index].amount;

    cartRef.innerHTML += shoppingCartTemplate(index, newPrice);
    recalculatePrice();
  }
}

function recalculatePrice() {
  let totalPrice = 0;
  for (let priceIndex = 0; priceIndex < shoppingCart.length; priceIndex++) {
    totalPrice += shoppingCart[priceIndex].price * shoppingCart[priceIndex].amount;
  }
  let calculatedPrice = document.getElementById('total-price');
  let totalPriceSiodeRef = document.getElementById('total_price_side')
  calculatedPrice.innerHTML = `${totalPrice.toFixed(2)}`;
  totalPriceSiodeRef.innerHTML = `${totalPrice.toFixed(2)}`;
}
  
function increaseMenu(index){
  shoppingCart[index].amount++;
  renderShoppingCart();
}

function decreaseMenu(index){
  if (shoppingCart[index].amount > 1) {
    shoppingCart[index].amount--;
  } else {
    shoppingCart.splice(index,1);
  }
  if(shoppingCart.length === 0){
    document.getElementById('buy_btn_dialog').classList.add ('d_none');
    document.getElementById('buy_btn_sticky').classList.add ('d_none');
  }
  
  renderShoppingCart();
}

function thanksForBuying(){
  document.getElementById('buy_btn_sticky').classList.add ('d_none');
  document.getElementById('buy_btn_dialog').classList.add ('d_none');
}

function emptyCart(){
  shoppingCart = [];
  document.getElementById('total_price_side').innerHTML = "";
  let buyBtn = document.getElementById('buy_btn_sticky');
  activateBuyBtn()
  renderShoppingCart();
  thanksForBuying()  
}

function activateBuyBtn() {
  document.getElementById('buy_btn_sticky').classList.remove ('d_none');
  document.getElementById('buy_btn_sticky').classList.add ('d_flex');
}

function toggleSmallCart(){
  document.getElementById('buy_btn_sticky').classList.toggle ('d_none');
  document.getElementById('buy_btn_sticky').classList.toggle ('d_flex');
  document.getElementById('shoppingCartMenus').classList.toggle ('d_none');
  document.getElementById('shoppingCartMenus').classList.toggle ('d_block');
}

function toggleBuyedOverlay(){
  document.getElementById('buyed_overlay').classList.toggle ('d_none');
  document.getElementById('thanks_for_buying').classList.toggle ('d_none');
  document.getElementById('buyed_overlay').classList.toggle ('d_flex');
  document.getElementById('thanks_for_buying').classList.toggle ('d_flex');
  document.getElementById('buy_btn_sticky').classList.add ('d_none');
  document.getElementById('buy_btn_sticky').classList.remove ('d_flex');
}