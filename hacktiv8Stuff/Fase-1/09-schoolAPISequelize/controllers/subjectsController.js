"use strict";

const { subject } = require("../models");

class SubjectsController {
	static displayAll(req, res) {
		subject
			.findAll()
			.then((data) => {
				res.render("displaySubjects", { subjects: data });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static findById(req, res) {
		subject
			.findByPk(+req.params.id)
			.then((data) => {
				res.render("displaySubjects", { subjects: [data] });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}
}

module.exports = SubjectsController;
