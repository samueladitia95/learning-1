"use strict";

class indexController {
	static homePage(req, res) {
		res.render("homePage");
	}

	static errorPage(req, res) {
		res.render("errorPage", { err: req.query.err });
    }
    
    static wrongPage(req, res) {
        res.redirect("/error?err=Page Not Avalible")
    }
}

module.exports = indexController;
