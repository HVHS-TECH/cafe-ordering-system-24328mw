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
        name: "evaporated water",
        price: 15,
        imageSrc: "evaporatedWater.png",
        idName: "evaporatedWater"
    },
    {
        name: "deconstructed cake",
        price: 20,
        idName: "deconstructedCake"
    },
    {
        name: "aged milk milkshake",
        price: 27,
        idName: "agedMilkMilkshake"
    }
]
//make an object to hold user information
const USER = {};
//add an array for the user's order
let cartArray = [];
let change;
let totalCost;
//use a function to display the menu items
function displayMenuItem(_name, _price, _imageSrc){
    MENU_OUTPUT.innerHTML += "<img src="+_imageSrc+" alt="+_name+" width=150>";
    MENU_OUTPUT.innerHTML += "<p>"+_name+": $"+_price+"</p>";
}
function calculateCost(){
    let cost = 0
    for (let i=0; i<cartArray.length; i++){
        cost = cost + menuItems[cartArray[i]].price;
    }
    return cost;
}
//function to open the order form
function openOrder(){
    NAME_FORM_OUTPUT.innerHTML = "<h4>Name:</h4>";
    NAME_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=text required><input type=submit onclick=getNameFormInput()></form>";
    ITEM_FORM_OUTPUT.innerHTML = "<h4>Add an item to your cart:</h4>";
    ITEM_FORM_OUTPUT.innerHTML += "<form id=itemForm onsubmit='return false'></form>";
    ITEM_FORM_FIELDS = document.getElementById("itemForm");
    for (let i=0; i<menuItems.length; i++){
        ITEM_FORM_FIELDS.innerHTML += "<input id=tempId type=radio name=menuOption>"
        ITEM_FORM_FIELDS.innerHTML += "<label for=tempId>"+menuItems[i].name+"</label><br>"
        document.getElementById("tempId").id = menuItems[i].name
    }
    ITEM_FORM_FIELDS.innerHTML += "<input type=submit onclick=getItemFormInput()>"
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    MONEY_FORM_OUTPUT.innerHTML = "<h4>Enter your money:</h4>";
    MONEY_FORM_OUTPUT.innerHTML += "<form id=moneyForm onsubmit='return false'><label for=moneyField>$</label><input id=moneyField type=number required><input type=submit onclick=getMoneyFormInput()></form>";
    ORDER_BUTTON_OUTPUT.innerHTML = "<button onclick=placeOrder()>Place Order</button>";
}
//make and call function with a for loop to display full menu
function displayMenu(){
    for (let i=0; i<menuItems.length; i++){
        displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc);
    }
}
displayMenu();
//recieve and store username information from form
function getNameFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    USER.name = NAME_FIELD.value;
}
//recieve item choice information
function getItemFormInput(){
    for (let i=0; i<menuItems.length; i++){
        if (document.getElementById(menuItems[i].name).checked){
        cartArray.push(i);
    }}
    //display updated cart
    if (cartArray.length<1){
        CART_OUTPUT.innerHTML = "<h4>Your cart:</h4>";
        CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    }
    else{
        CART_OUTPUT.innerHTML = "<h4>Your cart:</h4>";
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
        alert("Please enter a name");
    }
    
    else if (!MONEY_FORM.checkValidity()){
        alert("Please enter your money");
    }
    else if (cartArray.length == 0){
        alert("Add an item to you cart");
    }
    else if (confirm("Please confirm your name is "+USER.name)){
        if (confirm("Please confirm you have $"+USER.money+" to pay with") == true){
            let order = []
            for (let i=0; i<cartArray.length; i++){
                order.push(menuItems[cartArray[i]].name)
            }
            ORDER_BUTTON_OUTPUT.innerHTML = "<p>"+order.join(", ")+"</p>"
        }
    }
}
function placeOrder1(){
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
        FULL_PAGE_OUTPUT.innerHTML += "<button onclick=goBack()>Go back</button>"
    }
}
function continueOrder(){
    FULL_PAGE_OUTPUT.innerHTML = "<h4>Your order:</h4>";
    for (let i=0; i<cartArray.length; i++){
        FULL_PAGE_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+" $"+menuItems[cartArray[i]].price+"</p>";
    }
    FULL_PAGE_OUTPUT.innerHTML += "<button onclick=completeOrder()>Confirm</button>";
    FULL_PAGE_OUTPUT.innerHTML += "<button onclick=goBack()>Go back</button>";
}
function completeOrder(){
    totalCost = calculateCost()
    change = USER.money - totalCost
    if (change<0){
        FULL_PAGE_OUTPUT.innerHTML = "<p>You can't afford this</p>"
        FULL_PAGE_OUTPUT.innerHTML += "<button onclick=goBack()>Go back</button>"
    }
    else{
        FULL_PAGE_OUTPUT.innerHTML = "<h4>Name: "+USER.name+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<h4>Order:</h4>"
        for (let i=0; i<cartArray.length; i++){
            FULL_PAGE_OUTPUT.innerHTML += "<p>"+menuItems[cartArray[i]].name+" $"+menuItems[cartArray[i]].price+"</p>";
        }
        
        FULL_PAGE_OUTPUT.innerHTML += "<h4>Total cost: "+totalCost+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<h4>You paid "+USER.money+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<h4>Change: "+change+"</h4>"
    }
}
function goBack(){
    window.location.reload()
}