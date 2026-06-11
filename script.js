console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menuOutput");
const ORDER_FORM_OUTPUT = document.getElementById("orderFormOutput");

//store menu items in an object
const menuItems = [
    {
        name: "evaporated water",
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
    MENU_OUTPUT.innerHTML += "<img src="+_imageSrc+" alt="+_name+" width=200><br>"
    MENU_OUTPUT.innerHTML += "<p>"+_name+"</p>"
}
displayMenuItem(menuItems[0].name, menuItems[0].price, me)
MENU_OUTPUT.innerHTML = "<img src="+menuItems[0].imageSrc+" alt="+menuItems[0].name+" width=200>"
