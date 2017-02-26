// Required files/packages
var express = require('express')
var dist = require('./src/api/car/dist.js')
var gprice = require('./src/api/car/gprice.js')
var firebase = require('./firebase_server.js')

var app = express();

var usrloc = "40.1020,-88.2272"; // UIUC to test

app.get('/', function(req, res) {
    res.sendfile("src/static/index.html");
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})

// Testing
firebase.addAttendee('Arun', 'Shit', 1, 40.0);
firebase.addSchool('Shit', 40.441944, -86.9125, false);
firebase.onTotalCostChange(function(total) {
    console.log(total);
});
