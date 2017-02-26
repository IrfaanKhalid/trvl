var config = require("./../../config");

function dist(usrloc, cb) {
    var request = require('superagent');


    var hackloc = config.locations.hackathon;
    var key = config.locations.gmapDistKey;

    var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial';
    url += '&origins=' + usrloc + '&destinations=' + hackloc + '&key=' + key;

    //console.log(url);

    var data;


    request.get(url, function(err, res) {
        if (err) throw err;
        else {
            //console.log(res.text);
            data = res.body;
            //console.log(data.text);
            //console.log(data.rows[0].elements[0].distance.value);
            cb(data.rows[0].elements[0].distance.value);
        }
    });
    //return data.rows[0].elements[0].distance.value;
}


exports.dist = dist;