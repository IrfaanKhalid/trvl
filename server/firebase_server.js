var admin = require('firebase-admin');
var serviceAccount = require('../hack-travel-2a8a2-firebase-adminsdk-fgomo-23c3ac8e10.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://hack-travel-2a8a2.firebaseio.com/'
});

var db = admin.database();
var attendees = db.ref('/attendees');
var schools = db.ref('/schools');

var totalCost = 0;
var totalCostCallbacks = [];
function addTotalCost(increase) {
    totalCost += increase;
    for (var i = 0; i < totalCostCallbacks.length; i++) {
        totalCostCallbacks[i](totalCost);
    }
}
function subtractTotalCost(decrease) {
    totalCost -= decrease;
    for (var i = 0; i < totalCostCallbacks.length; i++) {
        totalCostCallbacks[i](totalCost);
    }
}
function listenTotalCost() {
    attendees.on('child_added', function(snapshot) {
        addTotalCost(snapshot.child('cost').val());
    });
    attendees.on('child_removed', function(snapshot) {
        subtractTotalCost(snapshot.child('cost').val());
    });
}
attendees.once('value', function(snapshot) {
    snapshot.forEach(function() {
        totalCost += snapshot.child('cost').val();   
    });
    listenTotalCost();
});

exports.addAttendee = function(name, school, mode, cost) {
    attendees.push({
        name: name,
        school: school,
        mode: mode,
        cost: cost
    });
}

exports.addSchool = function(name, latitude, longitude, bus) {
    schools.push({
        name: name,
        lat: latitude,
        long: longitude,
        bus: bus
    });
}

exports.onTotalCostChange = function(callback) {
    totalCostCallbacks.push(callback);
}
