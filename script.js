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
                    <h3>${menu.name} <button onclick="addToShoppingCart()">+</button></h3>
                    <div>${menu.description}</div>
                    <div>${menu.price} €</div>
                </div>
            </div>
            `
    }
}

function addToShoppingCart() {
    console.log('addToShoppingCart')
    let shoppingCartRef = document.getElementById('shoppingCartList')
    shoppingCartRef.innerHTML = "";


}

function openShoppingCart() {
    console.log('openShoppingCart')
    let shoppingCart = document.getElementById('shoppingCart')
    shoppingCart.classList.toggle('d_none')
}