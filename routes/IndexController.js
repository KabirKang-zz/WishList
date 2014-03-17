/*
 * GET home page.
 */
exports.index = function(req, res) {
	res.render('wishes', {
		user: req.user
	});
};

