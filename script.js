function init(){
    renderMenus();
}

function renderMenus(){
    let menusContentRef = document.getElementById('menusContent')
    menusContentRef.innerHTML = "";
    for (let index = 0; index < menus.length; index++) {
        let menu = menus[index];
        menusContentRef.innerHTML += `
            <div class="single_menu d_flex">
                <img class="menu_image" src="${menu.png}" alt="img_${index}">
                <div>
                    <h3 id="menu_name_${index}">${menu.name}</h3>
                    <button onclick="addToShoppingCart(${index})">+</button>
                    <div">${menu.description}</div>
                    <div id="menu_price_${index}">${menu.price} €</div>
                    <div class="d_none" id="menu_amount_${index}">${menu.amount}</div>
                </div>
            </div>
            `
    }
}

function openShoppingCart() {
    console.log('openShoppingCart')
    let shoppingCart = document.getElementById('shoppingCart')
    shoppingCart.classList.toggle('d_none')
}

function addToShoppingCart(index) {
    console.log('addToShoppingCart')
    let shoppingCartRef = document.getElementById('shoppingCartList')
    shoppingCartRef.innerHTML = "";
    pushToShoppingCartArray(index)
    renderNewOnjectsFromShoppingCartArray()    
}

function pushToShoppingCartArray(index){
    shoppingCartArray.push(menus[index])
    console.log(shoppingCartArray);
    renderNewOnjectsFromShoppingCartArray()    
}

function renderNewOnjectsFromShoppingCartArray(index){
    let shoppingCartListRef = document.getElementById('shoppingCartList')
    shoppingCartListRef.innerHTML = "";
    for (let cartIndex = 0; cartIndex < shoppingCartArray.length; cartIndex++) {
        let shoppingCart = shoppingCartArray[cartIndex];
        shoppingCartListRef.innerHTML += `
            <div class="singleCartMenu${index}">
                <p id="menu_name_${cartIndex}">'<b>${shoppingCart.name}</b>'</p>
                <div id="menu_price_${cartIndex}">'${shoppingCart.price}'</div>
                <div id="menu_amount_${cartIndex}">'${shoppingCart.amount}'</div>
                <button id="minus_button_${cartIndex}">-</button>
                <button id="plus_button_${cartIndex}">+</button>
            </div>
        `
    }
}
// render onjects from shoppingCartArray in ('shoppingCartList') via template
    // create for-loop
    // 
// create render-function ('shoppingCartList)
// copy render-function to init()

// save settings in local storage
// load saved settings from local storage 
// render settings into webside