var express = require('express');
var dist = require('./dist.js');
var gprice = require('./gprice.js');
var fbadmin = require('./fbadmin.js');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(fbadmin.get91());
})
