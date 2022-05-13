const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}


// close nav when clicking on a nav item 

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }

})
//sticy na when scrolling 

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky")
    }
    else{

        document.querySelector(".header").classList.remove("sticky")
    }
})

//-----------menu tabs-----------------
const menuLunch = document.querySelector("#btn-lunch")
const itemLunch = document.querySelector("#lunch")
menuLunch.addEventListener("click", () => {
    openLunch();
    closeDinner();
    closeDrink();
    closeDessert();

})
function openLunch(){
    menuLunch.classList.add("active");
    itemLunch.classList.add("active");
}
function closeLunch(){
    menuLunch.classList.remove("active");
    itemLunch.classList.remove("active");
}
const menuDinner = document.querySelector("#btn-dinner");
const itemDinner = document.querySelector("#dinner");
menuDinner.addEventListener("click", () => {
    openDinner();
    closeLunch();
    closeDrink();
    closeDessert();
})
function openDinner(){
    menuDinner.classList.add("active");
    itemDinner.classList.add("active");
}
function closeDinner(){
    menuDinner.classList.remove("active");
    itemDinner.classList.remove("active");
}
const menuDrink = document.querySelector("#btn-drink");
const itemDrink = document.querySelector("#drink");
menuDrink.addEventListener("click", () => {
    openDrink();
    closeLunch();
    closeDessert();
    closeDinner();
})

function openDrink(){
    menuDrink.classList.add("active");
    itemDrink.classList.add("active");
}
function closeDrink(){
    menuDrink.classList.remove("active");
    itemDrink.classList.remove("active");
}

const menuDesserts = document.querySelector("#btn-dessert");
const itemDesserts = document.querySelector("#desserts");
menuDesserts.addEventListener("click", () => {
    openDessert();
    closeLunch();
    closeDrink();
    closeDinner();
})
function openDessert(){
    menuDesserts.classList.add("active");
    itemDesserts.classList.add("active");
}
function closeDessert(){
    menuDesserts.classList.remove("active");
    itemDesserts.classList.remove("active");
}




