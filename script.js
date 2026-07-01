console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menuOutput");
const NAME_FORM_OUTPUT = document.getElementById("nameFormOutput");
const ITEM_FORM_OUTPUT = document.getElementById("itemFormOutput");
const CART_OUTPUT = document.getElementById("cartOutput");
const ORDER_BUTTON_OUTPUT = document.getElementById("orderButtonOutput");
const MONEY_FORM_OUTPUT = document.getElementById("moneyFormOutput");
const FULL_PAGE_OUTPUT = document.getElementById("fullPageOutput");
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
    MENU_OUTPUT.innerHTML += "<p>"+_name+": $"+_price+"</p>";
}
//function to open the order form
function openOrder(){
    NAME_FORM_OUTPUT.innerHTML = "<h4>Name:</h4>";
    NAME_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=text required><input type=submit onclick=getNameFormInput()></form>";
    ITEM_FORM_OUTPUT.innerHTML += "<h4>Add an item to your cart:</h4>";
    ITEM_FORM_OUTPUT.innerHTML += "<form id=itemForm onsubmit='return false'><input id=evaporatedWater type=radio name=menuOption value=water><label for=water>Evaporated water</label><br><input id=deconstructedCake type=radio name=menuOption value=cake><label for=cake>Deconstruced cake</label><br><input id=agedMilkMilkshake type=radio name=menuOption value=milkshake><label for=milkshake>Aged milk milkshake</label><br><input type=submit onclick=getItemFormInput()></form>";
    CART_OUTPUT.innerHTML += "<h4>Your Cart:</h4>";
    CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    MONEY_FORM_OUTPUT.innerHTML += "<h4>Enter your money:</h4>";
    MONEY_FORM_OUTPUT.innerHTML += "<form id=moneyForm onsubmit='return false'><label for=moneyField>$</label><input id=moneyField type=number required><input type=submit onclick=getMoneyFormInput()></form>";
    ORDER_BUTTON_OUTPUT.innerHTML += "<button onclick=placeOrder()>Place Order</button>";
}
//use a for loop to display full menu
for (let i=0; i<menuItems.length; i++){
    displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc);
}

//recieve and store username information from form
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
    else if (document.getElementById("agedMilkMilkshake").checked){
        cartArray.push(2);
    }
    else{
        console.log("no item selected");
    }
    //display updated cart
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    if (cartArray.length<1){
        CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    }
    else{
        for (let i=0; i<cartArray.length; i++){
            CART_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+"</p>";
        }
        CART_OUTPUT.innerHTML +="<button onclick=clearCart()>Clear Cart</button>"
    }
}
//recieve and store user money information
function getMoneyFormInput(){
    const MONEY_FIELD = document.getElementById("moneyField");
    USER.money = MONEY_FIELD.value;
    console.log(USER.money);
}
function clearCart(){
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    cartArray = [];
}
function placeOrder(){
    const NAME_FORM = document.getElementById("nameForm");
    const MONEY_FORM = document.getElementById("moneyForm");
    if (!NAME_FORM.checkValidity()){
        ORDER_BUTTON_OUTPUT.innerHTML += "<p>Please enter a name</p>";
    }
    
    else if (!MONEY_FORM.checkValidity()){
        ORDER_BUTTON_OUTPUT.innerHTML += "<p>Please enter your money</p>";
    }
    else if (cartArray.length == 0){
        ORDER_BUTTON_OUTPUT.innerHTML += "<p>Add an item to you cart</p>";
    }
    else{
        FULL_PAGE_OUTPUT.innerHTML = "<p>Your name is "+USER.name+"</p>";
        FULL_PAGE_OUTPUT.innerHTML += "<p>You have $"+USER.money+" to pay with</p>";
        FULL_PAGE_OUTPUT.innerHTML += "<button onclick=continueOrder()>Confirm</button>";
    }
}
function continueOrder(){
    FULL_PAGE_OUTPUT.innerHTML = "<h4>Your order:</h4>";
    for (let i=0; i<cartArray.length; i++){
        FULL_PAGE_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+" $"+menuItems[cartArray[i]].price+"</p>";
    }
    FULL_PAGE_OUTPUT.innerHTML += "<button onclick=completeOrder>Confirm</button>";
}
function completeOrder(){
    for (let i=0; i<cartArray.length; i++){
        USER.money = USER.money - menuItems[cartArray[i]].price;
    }
    if (USER.money<0){
        FULL_PAGE_OUTPUT.innerHTML = "<p>You can't afford this</p>"
    }
    else{
        
    }
}