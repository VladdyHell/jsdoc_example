const cp = require("child_process");

module.exports = function (req, res, next) {
	cp.exec("npm run doc", function (err, stdout, sterr) {
		if (err) next(err);
	});
	next();
};
