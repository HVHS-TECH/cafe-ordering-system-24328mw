console.log("Hello world!");
//link to the HTML page for the outputs
const MENU_OUTPUT = document.getElementById("menuOutput");
const ORDER_FORM_OUTPUT = document.getElementById("orderFormOutput");

//store menu items in an object
const menuItems = [
    {
        name: "evaporated water",
        price: 15,
        image: {
            src: "evaporatedWater.png"
        }
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
MENU_OUTPUT.innerHTML = "<img src="+menuItems[0].image.src+" alt="+menuItems[0].name+" width=50>"
