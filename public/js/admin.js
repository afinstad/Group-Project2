$(function () {

    $("#add-product").on("click", function (event) {
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
        };

        // Send the POST request.
        $.ajax("/api/products", {
            type: "POST",
            contentType:'application/json',
            data: JSON.stringify(newProduct)
        }).then(
            function () {
                console.log("Added a new product");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})