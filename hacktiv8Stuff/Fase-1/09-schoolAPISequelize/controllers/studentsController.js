"use strict";

const { student } = require("../models");

class StudentsController {
	static displayAll(req, res) {
		student
			.findAll({ order: [["id", "ASC"]] })
			.then((data) => {
				res.render("displayStudents", { students: data });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static findById(req, res) {
		student
			.findByPk(+req.params.id)
			.then((data) => {
				res.render("displayStudents", { students: [data] });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static addStudentGet(req, res) {
		const errMessage = req.query.err ? req.query.err.split(",") : [];
		res.render("addStudent", { err: errMessage });
	}

	static addStudentPost(req, res) {
		const errMessage = StudentsController.validation(req.body);
		if (!errMessage.length) {
			student
				.create(req.body)
				.then(() => {
					res.redirect("/students");
				})
				.catch((err) => {
					res.redirect(`/error?err=${err}`);
				});
		} else {
			res.redirect(`/students/add?err=${errMessage}`);
		}
	}

	static editStudentGet(req, res) {
		const errMessage = req.query.err ? req.query.err.split(",") : [];
		student
			.findByPk(+req.params.id)
			.then((data) => {
				res.render("editStudent", { student: data, err: errMessage });
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static editStudentPost(req, res) {
		const errMessage = StudentsController.validation(req.body);

		if (!errMessage.length) {
			req.body.id = +req.params.id;
			student
				.upsert(req.body)
				.then(() => {
					res.redirect("/students");
				})
				.catch((err) => {
					res.redirect(`/error?err=${err}`);
				});
		} else {
			res.redirect(`/students/${req.params.id}/edit?err=${errMessage}`);
		}
	}

	static deleteById(req, res) {
		student
			.destroy({ where: { id: +req.params.id } })
			.then(() => {
				res.redirect("/students");
			})
			.catch((err) => {
				res.redirect(`/error?err=${err}`);
			});
	}

	static validation({ firstName, lastName, email, gender, birthDate }) {
		let errMessage = [];
		if (!firstName) {
			errMessage.push("First Name is Required");
		}
		if (!lastName) {
			errMessage.push("Last Name is Required");
		}
		if (!email) {
			errMessage.push("Email is Required");
		}
		if (!gender) {
			errMessage.push("Gender is Required");
		}
		if (!birthDate) {
			errMessage.push("Birth Date is Required");
		}
		if (new Date(birthDate) > new Date()) {
			errMessage.push("Birth Date is Invalid");
		}
		return errMessage;
	}
}

module.exports = StudentsController;
