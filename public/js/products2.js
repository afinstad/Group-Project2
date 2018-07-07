$(document).ready(function () {
    //variables
    var categoryType = ""
    var currentCartValue = {};
    function getTotalCost() {
        var total = 0;
        var keys = Object.keys(currentCartValue);
        keys.forEach(key => {
            var item = currentCartValue[key];
            if (item.quantity > 0)
                total += (item.quantity * item.cost);
        })
        return total;
    }
    function saveCart() {
        localStorage.setItem('hijabCart', JSON.stringify(currentCartValue));
    }
    function loadCart() {
        currentCartValue = JSON.parse(localStorage.getItem('hijabCart') || '{}');
    }
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
                    var product = $('<div class ="float-left product">');
                    var image = $('<img class ="d-block" src="' + photo + '">');
                    var nameP = $('<p class ="product-name">' + name + '</p>');
                    var cost = $('<p class ="product-price"> $' + price + '</p>');
                    var button = $('<button class="add-to-cart product" data-id="' + ID + '" data-cost = "' + price + '">+Add Item to Cart</button>')
                    button.on('click', addToCart);
                    product.append(image);
                    product.append(nameP);
                    product.append(cost);
                    product.append(button);
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
    function addToCart() {
        var productID = $(this).attr('data-id');
        var productCost = $(this).attr('data-cost');
        var image = $(this).attr('data-image');
        if (currentCartValue[productID]) {
            currentCartValue[productID].quantity += 1;
        }
        else {
            currentCartValue[productID] = {
                quantity: 1,
                cost: productCost,
                image: image
            }
        }
        
        saveCart();
        initStripe();
    }
    //Working Code
    function initStripe() {
        var stripeiness = $('<script ' +
            ' src="https://checkout.stripe.com/checkout.js" class="stripe-button" ' +
            ' data-key="pk_test_g6do5S237ekq10r65BnxO6S0"' +
            ' data-amount="' + getTotalCost() * 100 + '"' +
            ' data-name="Stripe.com"' +
            ' data-description="Example charge"' +
            ' data-image="https://stripe.com/img/documentation/checkout/marketplace.png"' +
            ' data-locale="auto"' +
            ' data-zip-code="true">' +
            ' </script>');
        $('#stripe-script').html('');
        $('#stripe-script').append(stripeiness);
    }
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
    loadCart();
    initStripe();
    $('#checkout-button').on('click')
});