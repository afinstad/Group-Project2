$(document).ready(function () {

    //variables
    var categoryType= ""


    //functions
    function loadProducts() {

        //clearItems();
        var contentRows = $('#products-div');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/api/products/category/' + categoryType,
            success: function (data, status) {
                console.log(data);
                $.each(data, function (index, item) {
                    var ID = item.id;
                    var photo = item.photo
                    var name = item.name;
                    var price = item.cost;

                    var product = '<div class ="float-left product">';
                    product += '<img class ="d-block w-100" src="' + photo + '>';
                    product += '<p class ="product-name">' + name + '</p>';
                    product += '<p class ="product-price"> $' + price + '</p>';
                    product += '<button class="add-to-cart product">+Add Item to Cart</button>'
                    product += '</div>';

                    contentRows.append(product);
                });

            },
            error: function () {
                $('#errorMessages')
                    .append($('<li>')
                        .attr({ class: 'list-group-item list-group-item-danger' })
                        .text('Error calling web service.  Please try again later.'));
            }
        });
    };

    function clearProducts() {
        $('#products-div').empty()
    }


    //Working Code

    $("#chiffon-category").click(function (event) {
        event.preventDefault();

        clearProducts();
        categoryType = "chiffon";
        loadProducts();
    });


    $("#viscose-category").click(function (event) {
        event.preventDefault();

        clearProducts();
        categoryType = "viscose";
        loadProducts();
    });

    $("#jersey-category").click(function (event) {
        event.preventDefault();

        clearProducts();
        categoryType = "jersey";
        loadProducts();
    });

    $("#printed-category").click(function (event) {
        event.preventDefault();

        clearProducts();
        categoryType = "printed";
        loadProducts();
    });



});