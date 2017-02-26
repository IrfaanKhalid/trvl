var config = require("./config");

var exports = module.exports = {};
var request = require('superagent');



function getMileage(vin, callback) {
    var url = 'https://api.edmunds.com/api/vehicle/v2/vins/';
    url += vin;
    url += "?fmt=json&api_key=";
    url += config.edmunds.apiKey;


    request.get(url, function(err, res) {
        if (err) throw err;
        else {
            //console.log(res.text);
            data = res.body;
            //console.log(data.text);
            //console.log(data.rows[0].elements[0].distance.value);
            //  console.log(data["MPG"]);
            callback(data["MPG"]);
        }
    });
    //return data.rows[0].elements[0].distance.value;
}

exports.getMileage = getMileage;