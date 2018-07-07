//////////////////////////////////////////////
// local storage example//
var cart = [
    { 
        item: "Product 1",
        price: 35.50,
        qty: 2
    },
    { 
        item: "Product 2",
        price: 35.50,
        qty: 2
    }
]
//add items to local storage
var jsonStr = JSON.stringify( cart );
localStorage.setItem( "cart", jsonStr );
// pull items from local storage
var cartValue = localStorage.getItem( "cart" );
var cartObj = JSON.parse( cartValue );
// whenever user adds items to cart add whole cart to local storage
//////////////////////////////////////////////////
