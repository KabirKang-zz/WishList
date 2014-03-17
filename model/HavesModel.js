var mongoose = require('mongoose');

var HaveSchema = new mongoose.Schema({
	text: String,
	date: {
		type: Date,
		default: Date.now
	},

	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

var HaveModel = mongoose.model('Have', HaveSchema);

module.exports = HaveModel;