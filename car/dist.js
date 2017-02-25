
var request = require('superagent');

var usrloc = givenloc; //"40.1020,-88.2272";
var hackloc = "36.1447,-86.8027";
var key = "API KEY HERE";

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
  }
});

module.exports = {
    getDist: function(givenloc) {
        return data.rows[0].elements[0].distance.value;
    }
};