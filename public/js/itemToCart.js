$(document).ready(function () {

    console.log("item-to-cart is working");

    $(".product button").on("click", function () {
        event.preventDefault();

        console.log("button clicked");
    });


});

