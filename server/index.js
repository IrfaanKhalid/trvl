// Required files/packages
var express = require('express');
//var firebase = require('./firebase_server.js')
var car = require('./src/car_calculations');
var cors = require('cors');
var config = require('./src/config');

var app = express();

app.use(cors({ origin: 'http://localhost:' + config.ports.allow }));

//var usrloc = "40.1020,-88.2272"; // UIUC to test
//var vin = "2HGFB2F50DH537943";

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
};

//app.use(allowCrossDomain);

app.get('/', function(req, res) {
    var usrloc = req.query.loc;
    var vin = req.query.vin;
    car.calculate(usrloc, vin, function(dist, mpg, cost) {
        //res.type('text/plain');
        res.send({
            cost: cost,
            dist: dist,
            mpg: mpg
        }); 
    });
});

app.listen(3000, function() {
    //console.log('Example app listening on port 3000!');
});

//car.calculate(usrloc, vin, function(cost) {
//    console.log(cost);
//});

// Testing
//firebase.addAttendee('Arun', 'Purdue', 1, 40.0);
//firebase.addSchool('Purdue', 40.441944, -86.9125, false);
//firebase.onTotalCostChange(function(total) {
//    console.log(total);
//});
