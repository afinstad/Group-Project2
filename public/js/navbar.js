//Jonathan's File

$(document).ready(function () {


    ////////////// Variables //////////////
    var hamburgerMenuActive = false;
    var shoppingCartActive = false;


    ////////////// Functions ///////////////
    var hamburgerMenu = function () {
        $("#hamburger-menu").addClass("hamburger-menu-class-active");
        hamburgerMenuActive = true;
    };


    var shoppingCart = function () {
        $("#shopping-cart").addClass("shopping-cart-class-active");
        shoppingCartActive = true
    };

    var closeHamburgerMenu = function () {
        $("#hamburger-menu").removeClass("hamburger-menu-class-active");
        hamburgerMenuActive = false;
    };

    var closeShoppingCart = function () {
        $("#shopping-cart").removeClass("shopping-cart-class-active");
        shoppingCartActive = false;
    };


    //////////// Document Ready //////////




    //When hamburger-menu is clicked, changes CSS to expand div and show menu options
    $("#hamburger-menu-icon").click(function () {
        hamburgerMenu();
    });

    //When shopping-cart is clicked, changes CSS to expand div and show shopping cart
    $("#shopping-cart-icon").click(function () {
        shoppingCart();
    });

    //When the hamburger menu is open, click the close button to remove from viewport
    $("#close-hamburger-menu").click(function () {
        closeHamburgerMenu();
    });

    //When the shopping cart is open, click the close button to remove from viewport
    $("#close-shopping-cart").click(function () {
        closeShoppingCart();
    });

    // $("body :not(#hamburger-menu, #hamburger-menu *)").on("click", function(e){ 
    //     closeHamburgerMenu();
    // });​
});