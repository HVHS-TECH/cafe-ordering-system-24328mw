console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menuOutput");
const ORDER_FORM_OUTPUT = document.getElementById("orderFormOutput");

//store menu items in an object
const menuItems = [
    {
        name: "Evaporated Water",
        price: 15,
        imageSrc: "evaporatedWater.png"
    },
    {
        name: "deconstructed cake",
        price: 20
    },
    {
        name: "aged milk milkshake",
        price: 27
    }
]
//use a function to display the menu items
function displayMenuItem(_name, _price, _imageSrc){
    MENU_OUTPUT.innerHTML += "<img src="+_imageSrc+" alt="+_name+" width=150>"
    MENU_OUTPUT.innerHTML += "<p>"+_name+"</p>"
}
//function to open the order form
function openOrder(){
    ORDER_FORM_OUTPUT.innerHTML = "<form id="nameForm" onsubmit="return false><input></input></form>"
}
//use a for loop to display full menu
for (let i=0; i<menuItems.length; i++){
    displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc)
}