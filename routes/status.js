var mongoose = require('mongoose');

var statusSchema = mongoose.Schema({
	temp: Number,
	date: { type: Date, default: Date.now }
});

var Status = mongoose.model('Status', statusSchema);

exports.insert = function(req, res) {
	
	var currentStatus = new Status({ temp: req.params.temp });
	
	currentStatus.save(function (err) {
	  if (err) return handleError(err);
	  // saved!
	})

	res.send(req.params.temp);
	
}; 

exports.list = function(req, res) {
	
	Status
		.find()
		.limit(1)
		.sort('-date')
		.select('temp date')
		.lean()
		.exec(function(err, statuses) {
		  if (err) return console.error(err);
		  console.log(statuses)
			res.send(JSON.stringify(statuses));
			
		})	
	
}