
var data = {
   "fuelPrices": {
      "cng": "2.06",
      "diesel": "2.57",
      "e85": "1.93",
      "electric": "0.13",
      "lpg": "2.68",
      "midgrade": "2.58",
      "premium": "2.82",
      "regular": "2.33"
   }
};

//console.log(data.fuelPrices.regular);

module.exports = {
    getGasPrice: function() {
        return data.fuelPrices.regular;
    }
};