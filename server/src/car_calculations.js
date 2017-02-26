var config = require('./config');
var dist = require('./api/car/dist');
var mileage = require('./api/car/mileage');

var travelDistance = null;
var mpg = null;
function calculate(usrloc, vin, callback) {
    dist.dist(usrloc, function(distance) {
        travelDistance = metersToMiles(distance);
        if (travelDistance !== null && mpg !== null) {
            var cost = travelDistance / mpg * config.gas.price;
            callback(travelDistance, mpg, cost);
        }
    });
    mileage.getMileage(vin, function(milespergallon) {
        mpg = averageMPG(milespergallon.city, milespergallon.highway);
        if (travelDistance !== null && mpg !== null) {
            var cost = travelDistance / mpg * config.gas.price;
            callback(travelDistance, mpg, cost);
        }
    });
}

function metersToMiles(meters) {
    return meters * 6.214 / 10000;
}

function averageMPG(city, highway) {
    return 0.15 * city + 0.85 * highway;
}

exports.calculate = calculate;
