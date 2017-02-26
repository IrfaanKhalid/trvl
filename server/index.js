// Required files/packages
var express = require('express');
//var firebase = require('./firebase_server.js')
var car = require('./src/car_calculations');

var app = express();

var usrloc = "40.1020,-88.2272"; // UIUC to test
var vin = "2HGFB2F50DH537943";

app.get('/', function(req, res) {
    car.calculate(usrloc, vin, function(cost) {
        res.send({ cost: cost});   
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

car.calculate(usrloc, vin, function(cost) {
    console.log(cost);
});

// Testing
//firebase.addAttendee('Arun', 'Purdue', 1, 40.0);
//firebase.addSchool('Purdue', 40.441944, -86.9125, false);
//firebase.onTotalCostChange(function(total) {
//    console.log(total);
//});
