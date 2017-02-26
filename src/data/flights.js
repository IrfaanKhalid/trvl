function flightPrice(loc, cb) {
var request = require('superagent');

var origin = loc; //set up for input
var dest = "BNA";
var depart_date = "2017-10-25"; //idk
var max_price = "250";
var numResults = 5; //default
var key = "API KEY";

var url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?';
url += 'origin=' + origin + '&destination=' + dest + '&departure_date=' + depart_date + "&max_price="+ max_price + '&number_of_results=' + numResults + '&apikey=' + key;

//console.log(url);

var data;


request.get(url, function(err, res){
if (err) throw err;
else {
//console.log(res.text);
data=res.body;
//console.log(data.text);
//console.log(data.rows[0].elements[0].distance.value);
cb(data);
}
});
//return data.rows[0].elements[0].distance.value;
}


exports.flightPrice = flightPrice;