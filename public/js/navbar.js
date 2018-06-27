$(document).ready(function () {


    ////////////// Variables //////////////
    
    
    
    ////////////// Functions ///////////////
    var hamburgerMenu = function () {
        $("#hamburger-menu").addClass("hamburger-menu-class-active");
        console.log("Class was added");
    };




    //////////// Document Ready //////////




    //When hamburger-menu is clicked, changes CSS to expand div, and show menu options
    $("#hamburger-menu-icon").click(function() {
        console.log("button was clicked");
        hamburgerMenu();
    });

});