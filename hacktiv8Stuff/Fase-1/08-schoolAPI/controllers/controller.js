"use strict";

class Controller {
	static homePage(req, res) {
		res.render("homePage");
	}

	static errorPage(req, res) {
		res.render("error", {error: "Webpage not avaible"});
	}
}

module.exports = Controller;
