var mongoose = require('mongoose');
var mongoDatabaseURI = 'mongodb://user:password@ds061558.mongolab.com:61558/todolist';

mongoose.connect(mongoDatabaseURI);

mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + mongoDatabaseURI);
});

mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});
