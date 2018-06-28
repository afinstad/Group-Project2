//Dependency 

var path = require('path');

var app = require('express');

//when go to root page send index.html

module.exports = function(app){
    
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'index.html'))
    });

    
//when going to products, send products.html
app.get('/products', function(req, res) {
    res.sendFile(path.join(__dirname,'products.html' ))
})

}
