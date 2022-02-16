// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (var i = 0; i < products.length; i++) {
        if ((i + 1) === id){
            console.log('producto encontrado. id: ' + id);
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
        }
        //console.log(products[i].id);
    }
    cartList.push(products[1]);
    cartList.push(products[2]);
    cartList.push(products[3]);

    console.log(cartList[0]);
}

// Exercise 2
function cleanCart() {
    cartList.length = 0
    //console.log(cartList[0]);
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let sumPrices = cartList.reduce(
        (acc, currentPrice) => (acc + currentPrice.price), 0);    
    console.log('precio total:' + sumPrices);
}

// Exercise 4
function generateCart() {
    // includes indexOf
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let contadorRepeticion = 1;
    cartList.sort();

    for(var j = 0; j < cartList.length; j++){
        //let xxx = cartList.find(cartList => cartList.id === i;
        //console.log('los j: ' + [cartList[j].id]);
        //console.log(cartList[j]);
        if (cartList[j+1].id === cartList[j].id){
            console.log('Coincide la id : ' + [cartList[j].id]);
            contadorRepeticion++;
            let quantity = contadorRepeticion;
        }else{
            contadorRepeticion = 1;
            cart.push(cartList[j]);
            cart[j].quantity = quantity; 
            // clone + añadir quantity = 1   
            console.log(cart[j].id);
        }
        //.map()
        console.log(cart.length);
    }

    for(var k = 0; k<cart.length; k++){
        console.log(cart[k].id);

    }
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


buy();
calculateTotal();
generateCart();