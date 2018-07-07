$(function () {

    $("#add-product").on("submit", function (event) {
        // preventDefault on a submit event.
        event.preventDefault();

        var newProduct = {
            name: $("#inputProduct").val().trim(),
            category: $("#categorySelect").val().trim(),
            description: $("#inputDescription").val().trim(),
            cost: $("#inputCost").val().trim(),
            quantity: $("#inputQuantity").val().trim(),
            purchase: false,
            photo: $("#inputImage").val().trim(),
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // Send the POST request.
        $.ajax("/api/products", {
            type: "POST",
            data: newProduct
        }).then(
            function () {
                console.log("Added a new product");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})