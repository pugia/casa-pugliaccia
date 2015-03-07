var express = require('express');
var mongoose = require('mongoose');
var status = require('./routes/status');

mongoose.connect('mongodb://localhost/pugliaccia');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log('console open');
});

var app = express();

app.get('/status/:temp', status.insert)
app.get('/status', status.list)

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})