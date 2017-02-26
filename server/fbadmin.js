var admin = require('firebase-admin');
var serviceAccount = require('hack-travel-2a8a2-firebase-adminsdk-fgomo-23c3ac8e10.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://hack-travel-2a8a2.firebaseio.com/'
});

var db = admin.database();
var ref = db.ref('/cars/91');

exports.get91 = ref.on('value', function(snapshot) {
        console.log(snapshot.val));
    },
    function(errorObject) {
        console.log('The read failed: ' + errorObject.code);
    }
});
