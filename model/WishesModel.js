var mongoose = require('mongoose');

var WishSchema = new mongoose.Schema({
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

var WishModel = mongoose.model('Wish', WishSchema);

module.exports = WishModel;