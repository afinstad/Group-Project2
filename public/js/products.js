$(document).ready(function () {


    //Main Div in HTML to place products in
    var productDiv = $("#products-div");

    //Classes for individual product product
    var product = $(".float-left product");
    var productImage = $(".d-block w-100")
    var productName = $(".product-name");
    var productPrice = $("product-price");

    //Variables for HMTL Tags


    

    console.log("app is running");

    function runQuery(nothing, queryURL) {

        console.log("inside runQuery");

        //API Call
        $.ajax({
            url: "localhost:8080/api/products",
            method: "GET",
            data: {
                format: "json"
            }
        }).done(function (productsData) {

            for (var i = 0; i < productsData.data.length; i++) {
                console.log(queryURL);
                console.log(productsData);
                console.log(productsData[i.category]);
            }


        });
    };

    runQuery();

    /////////// Event Handlers /////////

    $(document).on("click", "#chiffon-category", getChiffon);
    // $(document).on("click", "#viscose-category", getProducts);
    // $(document).on("click", "#jersey-category", getProducts);
    // $(document).on("click", "#printed-category", getProducts);


    /////////////// Functions ////////////////

    // Getting the initial list of Products
    //getProducts();

    // Function for creating a new div for products 
    function createProductDiv(productData) {
        var newDiv = $("<div" + productDiv + ">");

        newDiv.data("product", productData);
        newDiv.append("<img src=" + productData.photo + "alt='Product Name'>")
        newDiv.append("<p>" + productData.name + "</p>");
        newDiv.append("<p> " + productData.cost + "</p>");
        newDiv.append("<p> + Add Product To Cart </p>");

        return newDiv;

        conosle.log(NewDiv);
    }

    // Function for retrieving products and getting them ready to be rendered to the page
    function getChiffon() {
        $.ajax("/api/products/category/chiffon", function (data, status) {
            console.log(data);
        })
    }


    // function getProducts() {
    //     console.log("Get Products")

    //     app.get("/api/products", function (data) {
    //         var productsToAdd = [];
    //         for (var i = 0; i < data.length; i++) {
    //             productsToAdd.push(createProductDiv(data[i]));
    //         }
    //         renderProducts(productsToAdd);
    //     });
    // };

});


