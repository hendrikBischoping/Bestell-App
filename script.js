function init(){

}

function renderMenus(){
    let menusContentRef = document.getElementById('menusContent')
    menusContentRef.innerHTML = "";
    for (let index = 0; index < menus.length; index++) {
        let menu = menus[index];
        menusContentRef.innerHTML += `
            <div>
                <img src="menu.png" alt="img_${index}">
                <div>menu.name</div>
                <div>menu.price</div>
            </div>
            `
    }
}