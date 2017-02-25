function dist(loc, cb) {
var request = require('superagent');

var usrloc = loc; //"40.1020,-88.2272";
var hackloc = "36.1447,-86.8027";
var key = "API KEY";

var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial';
url += '&origins=' + usrloc + '&destinations=' + hackloc + '&key=' + key;

//console.log(url);

var data;


request.get(url, function(err, res){
if (err) throw err;
else {
//console.log(res.text);
data=res.body;
//console.log(data.rows[0].elements[0].distance.value);
cb(data.rows[0].elements[0].distance.value);
}
});
//return data.rows[0].elements[0].distance.value;
}


exports.dist = dist;