console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menuOutput");
const NAME_FORM_OUTPUT = document.getElementById("nameFormOutput");
const ITEM_FORM_OUTPUT = document.getElementById("itemFormOutput");
const CART_OUTPUT = document.getElementById("cartOutput");
const ORDER_BUTTON_OUTPUT = document.getElementById("orderButtonOutput");
const MONEY_FORM_OUTPUT = document.getElementById("moneyFormOutput");
//store menu items in an object
const menuItems = [
    {
        name: "evaporated Water",
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
    NAME_FORM_OUTPUT.innerHTML = "<h4>Name:</h4>";
    NAME_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=text required><input type=submit onclick=getNameFormInput()></form>";
    ITEM_FORM_OUTPUT.innerHTML += "<h4>Add an item to your cart:</h4>";
    ITEM_FORM_OUTPUT.innerHTML += "<form id=itemForm onsubmit='return false'><input id=evaporatedWater type=radio name=menuOption value=water><label for=water>Evaporated water</label><br><input id=deconstructedCake type=radio name=menuOption value=cake><label for=cake>Deconstruced cake</label><br><input id=agedMilkMilkshake type=radio name=menuOption value=milkshake><label for=milkshake>Aged milk milkshake</label><br><input type=submit onclick=getItemFormInput()></form>";
    CART_OUTPUT.innerHTML += "<h4>Your Cart:</h4>";
    MONEY_FORM_OUTPUT.innerHTML += "<h4>Please enter your money</h4>"
    NAME_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=number required><input type=submit onclick=getMoneyFormInput()></form>";
    ORDER_BUTTON_OUTPUT.innerHTML += "<button onclick=placeOrder>Place Order</button>"
}
//use a for loop to display full menu
for (let i=0; i<menuItems.length; i++){
    displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc);
}

//recieve username information from form
function getNameFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    USER.name = NAME_FIELD.value;
}
//recieve item choice information
function getItemFormInput(){
    if (document.getElementById("evaporatedWater").checked){
        cartArray.push(0);
    }
    else if (document.getElementById("deconstructedCake").checked){
        cartArray.push(1);
    }
    else if (document.getElementById("agedMilkMilk").checked){
        cartArray.push(2);
    }
    else{
        console.log("no item selected");
    }
    //display updated cart
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    for (let i=0; i<cartArray.length; i++){
        CART_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+"</p>";
    }
}