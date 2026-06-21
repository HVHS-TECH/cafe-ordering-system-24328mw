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
//make an object to hold user information
const USER = {};
//add an array for the user's order
let cartArray = [];
//use a function to display the menu items
function displayMenuItem(_name, _price, _imageSrc){
    MENU_OUTPUT.innerHTML += "<img src="+_imageSrc+" alt="+_name+" width=150>";
    MENU_OUTPUT.innerHTML += "<p>"+_name+"</p>";
}
//function to open the order form
function openOrder(){
    ORDER_FORM_OUTPUT.innerHTML = "<h4>Name:</h4>";
    ORDER_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=text required><input type=submit onclick=getNameFormInput()></form>";
    ORDER_FORM_OUTPUT.innerHTML += "<h4>Add an item to your cart:</h4>";
    ORDER_FORM_OUTPUT.innerHTML += "<form id=itemForm onsubmit='return false'><input id=evaporatedWater type=radio name=menuOption value=water><label for=water>Evaporated water</label><br><input id=deconstructedCake type=radio name=menuOption value=cake><label for=cake>Deconstruced cake</label><br><input id=agedMilkMilkshake type=radio name=menuOption value=milkshake><label for=milkshake>Aged milk milkshake</label><br><input type=submit onclick=getItemFormInput></form>";
    ORDER_FORM_OUTPUT.innerHTML += "<h4>Your Cart:</h4>";
    for (let i=0; i<cartArray.length; i++){
        ORDER_FORM_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+"</p>";
    }
    ORDER_FORM_OUTPUT.innerHTML += "<button onclick=placeOrder>Place Order</button>"
}
//use a for loop to display full menu
for (let i=0; i<menuItems.length; i++){
    displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc);
}


function getNameFormInput(){
    
}
function getItemFormInput(){
}