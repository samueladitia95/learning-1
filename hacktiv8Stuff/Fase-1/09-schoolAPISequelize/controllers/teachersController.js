"use strict";

const { teacher } = require("../models");

class TeachersController {
	static displayAll(req, res) {
		teacher
			.findAll()
			.then((data) => {
				res.render("displayTeachers", { teachers: data });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static findById(req, res) {
		teacher
			.findByPk(+req.params.id)
			.then((data) => {
				res.render("displayTeachers", { teachers: [data] });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}
}

module.exports = TeachersController;
