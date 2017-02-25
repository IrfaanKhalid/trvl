// Required files/packages
var express = require('express')
var dist = require('./car/dist.js')
var gprice = require('./car/gprice.js')

// Set the user's location
var usrloc = "40.1020,-88.2272"; // UIUC to test

// var d = dist(usrLoc)
// var g = gprice.getGasPrice();

app.get('/', function (req, res) {
    res.send('Hello World!');
    res.getGasPrice();
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})