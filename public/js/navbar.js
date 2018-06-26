$(document).ready(function () {


    ////////////// Variables //////////////
    
    
    
    ////////////// Functions ///////////////
    var hamburgerMenu = function () {
        $("#hamburger-menu").removeClass("col-lg-2").addClass("col-lg-4 hamburger-menu-open")
    }






    //////////// Document Ready //////////




    //When hamburger-menu is clicked, changes CSS to expand div, and show menu options
    $("#hamburger-menu").click(function() {
        console.log("button was clicked");
        hamburgerMenu();
    });

});