var config = {};

// setup parts to config
config.firebase = {};
config.edmunds = {};

// firebase - this is taken directly from Firebase docs
config.firebase.apiKey = "API KEY";
config.firebase.databaseURL = "YOUR URL";

config.edmunds.apiKey = "API KEY";



// everything dealing with the location of the hackathon 
// and the APIs to get it
config.locations.hackathon = "36.1447,-86.8027"; // put your long lat here
config.locations.gmapDistKey = "YOUR API KEY HERE";

module.exports = config;