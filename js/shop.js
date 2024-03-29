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
var discount = 0;
var sumPricesDiscount = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
       for (var i = 0; i < products.length; i++) {
        if (id === products[i].id){
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            generateCart(id);
            break;
        }
    } 
    //addToCart(id);
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let sumPrices = cartList.reduce(
        (acc, currentPrice) => (acc + currentPrice.price), 0);    

    sumPricesDiscount = sumPrices - discount;
}

// Exercise 4
function generateCart(id) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    // clone / spread + añadir quantity = 1
    for(var j = 0; j < cartList.length; j++){
        if(cartList[j].id === id){
            var itemIndex = cart.indexOf(cartList[j]);
                if(itemIndex < 0){
                    cartList[j].quantity=1;
                    cartList[j].subtotal = cartList[j].price;
                    cart.push(cartList[j]);
                    break;
                }else{
                    for(var k = 0; k < cart.length; k++){
                        if (id === cart[k].id){
                        cart[k].quantity ++;
                        cart[k].subtotal = cart[k].price * cart[k].quantity;
                    }
                    }
                    break;
                }
            }
        }
applyPromotionsCart();
calculateTotal();
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //let discount = 0;
    for (var z = 0; z < cart.length; z++){
        if (cart[z].id === 1 && cart[z].quantity >= 3){
            const precioAceitePromo = 10;
            cart[z].subtotalWithDiscount = cart[z].quantity * precioAceitePromo;
            discount = cart[z].subtotal - cart[z].subtotalWithDiscount;
        }else if((cart[z].id === 3) && (cart[z].quantity >= 10) ){
            cart[z].price = 1.7;
            cart[z].subtotalWithDiscount = cart[z].subtotalWithDiscount * 1,7;
            discount = cart[z].subtotal - cart[z].subtotalWithDiscount;
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    //console.log('estoy en addToCart ' +  products.length + ' soy producto id:  ' + products[id - 1].id );

    for (var i = 0; i < products.length; i++) {
        if (id === products[i].id){
            // 2. Add found product to the cartList array
            cartList.push(products[i]);
            for(var j = 0; j < cartList.length; j++){
                const subtotal = cartList[j].price ;
                cartList[j].subtotal = subtotal;
                if(products[i].id === cartList[j].id){
                var itemIndex = cart.indexOf(cartList[j]);
                if(itemIndex < 0){
                    cartList[j].quantity=1;
                    cart.push(cartList[j]);
                }else{
                    for(var k = 0; k < cart.length; k++){
                        if (cartList[j].id === cart[k].id){
                        cart[k].quantity ++;
                        cart[k].subtotal = cart[k].price * cart[k].quantity;
                        }
                    }
                    break;
                }
                }
            } 
        }
    }
    applyPromotionsCart();
    calculateTotal();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(var k = 0; k < cart.length; k++){
        if ((id === cart[k].id) && (cart[k].quantity == 1)){
            let removeProduct = cart.splice(k, 1);
        }else{
            cart[k].quantity--;
        }
    }
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}