console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menu");
const NAME_FORM_OUTPUT = document.getElementById("nameForm");
const ITEM_FORM_OUTPUT = document.getElementById("itemForm");
const CART_OUTPUT = document.getElementById("cart");
const ORDER_BUTTON_OUTPUT = document.getElementById("orderButton");
const MONEY_FORM_OUTPUT = document.getElementById("moneyForm");
const FULL_PAGE_OUTPUT = document.getElementById("fullPage");
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
        name: "aged milkshake",
        price: 27,
        idName: "agedMilkshake"
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
    MENU_OUTPUT.innerHTML += "<div><img src="+_imageSrc+" alt="+_name+" width=150><p>"+_name+": $"+_price+"</p></div>";
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
    NAME_FORM_OUTPUT.innerHTML += "<form id=nameForm onsubmit='return false'><input id=nameField type=text required></form>";
    ITEM_FORM_OUTPUT.innerHTML = "<h4>Add an item to your cart:</h4>";
    ITEM_FORM_OUTPUT.innerHTML += "<form id=itemForm onsubmit='return false'></form>";
    ITEM_FORM_FIELDS = document.getElementById("itemForm");
    for (let i=0; i<menuItems.length; i++){
        ITEM_FORM_FIELDS.innerHTML += "<input id=tempId type=radio name=menuOption>"
        ITEM_FORM_FIELDS.innerHTML += "<label for=tempId>"+menuItems[i].name+"</label><br>"
        document.getElementById("tempId").id = menuItems[i].name
    }
    ITEM_FORM_FIELDS.innerHTML += "<input type=submit onclick=getItemFormInput() value=add>"
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    MONEY_FORM_OUTPUT.innerHTML = "<h4>Enter your money:</h4>";
    MONEY_FORM_OUTPUT.innerHTML += "<form id=moneyForm onsubmit='return false'><label for=moneyField>$</label><input id=moneyField type=number min=0 required></form>";
    ORDER_BUTTON_OUTPUT.innerHTML = "<button onclick=placeOrder()>Place Order</button>";
}
//make and call function with a for loop to display full menu
function displayMenu(){
    for (let i=0; i<menuItems.length; i++){
        displayMenuItem(menuItems[i].name, menuItems[i].price, menuItems[0].imageSrc);
    }
}
displayMenu();

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
function clearCart(){
    CART_OUTPUT.innerHTML = "<h4>Your Cart:</h4>";
    CART_OUTPUT.innerHTML += "<p>Your cart is empty</p>";
    cartArray = [];
}
function placeOrder(){
    const NAME_FIELD = document.getElementById("nameField");
    USER.name = NAME_FIELD.value;
    const MONEY_FIELD = document.getElementById("moneyField");
    USER.money = MONEY_FIELD.value;
    const NAME_FORM = document.getElementById("nameField");
    const MONEY_FORM = document.getElementById("moneyField");
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
        if (confirm("Please confirm you have $"+USER.money+" to pay with")){
            let order = []
            for (let i=0; i<cartArray.length; i++){
                order.push(menuItems[cartArray[i]].name)
            }
            if (confirm("Please confirm your order is: "+order.join(", "))){
                completeOrder()
            }
        }
    }
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
        
        FULL_PAGE_OUTPUT.innerHTML += "<h4>Total cost: $"+totalCost+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<h4>You paid: $ "+USER.money+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<h4>Change: $"+change+"</h4>"
        FULL_PAGE_OUTPUT.innerHTML += "<button onclick=goBack()>New order</button>"
    }
}
function goBack(){
    window.location.reload()
}