var Wish = require('../model/WishesModel');
var Have = require('../model/HavesModel');


function findAllWishesByUser(req, res) {
	var userId = req.user.id;

	Wish.find()
		.where('creator')
		.equals(userId)
		.sort('date')
		.exec(function(err, wishes) {
			if (err) {
				res.send(err);
			}
			res.json(wishes);
		});
}

function findAllHavesByUser(req, res) {
	var userId = req.user.id;

	Have.find()
		.where('creator')
		.equals(userId)
		.sort('date')
		.exec(function(err, haves) {
			if (err) {
				res.send(err);
			}
			res.json(haves);
		});
}


exports.allWishes = findAllWishesByUser;
exports.allHaves = findAllHavesByUser

exports.createWish = function(req, res) {
	var userId = req.user.id;
	var textWish = req.body.text;

	Wish.create({
		text: textWish,
		creator: userId
	}, function(error, wish) {
		if (error) {
			res.send(error);
		}
		findAllWishesByUser(req, res);
	});
}


exports.deleteWish = function(req, res) {
	Wish.remove({
		_id: req.params.wish_id
	}, function(error, wish) {
		if (error) {
			res.send(error);
		}
		findAllWishesByUser(req, res);
	});
}

exports.createHave = function(req, res) {
	var userId = req.user.id;
	var textHave = req.body.text;

	console.log(req.body);

	Have.create({
		text: textHave,
		creator: userId
	}, function(error, have) {
		if (error) {
			res.send(error);
		}
		findAllHavesByUser(req, res);
	});
}