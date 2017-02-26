var admin = require('firebase-admin');
var serviceAccount = require('../hack-travel-2a8a2-firebase-adminsdk-fgomo-23c3ac8e10.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://hack-travel-2a8a2.firebaseio.com/'
});

var db = admin.database();
var attendees = db.ref('/attendees');
var schools = db.ref('/schools');

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
