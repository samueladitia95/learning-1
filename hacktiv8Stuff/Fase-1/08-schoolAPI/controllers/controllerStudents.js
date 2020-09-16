"use strict";

const ModelStudent = require("../models/modelStudents.js");
const e = require("express");

class ControllerStudents {
	static readStudents(req, res) {
		ModelStudent.readStudents((err, data) => {
			ControllerStudents.displayStudentsCheck(res, err, data);
		});
	}

	static readStudentByEmail(req, res) {
		ModelStudent.readStudent("email", req.params.email, (err, data) => {
			ControllerStudents.displayStudentsCheck(res, err, data);
		});
	}

	static displayStudentsCheck(res, err, data) {
		if (err) {
			res.render(err, { error: err });
		} else {
			res.render("displayStudents", { students: data });
		}
	}

	static getAddStudent(req, res) {
		let errorMessages = req.query.error;
		errorMessages = errorMessages
			? errorMessages.slice(1, req.query.error.length - 1).split(",")
			: [];
		res.render("addStudent", { errors: errorMessages });
	}

	static postAddStudent(req, res) {
		const errorMessages = ControllerStudents.studentValidation(req.body);
		if (errorMessages.length) {
			res.redirect(`/students/add?error=${JSON.stringify(errorMessages)}`);
		} else {
			ModelStudent.addStudent(req.body, (err) => {
				err ? res.render(err, { error: err }) : res.redirect("/students");
			});
		}
	}

	static getEditStudent(req, res) {
		let errorMessages = req.query.error;
		errorMessages = errorMessages
			? errorMessages.slice(1, req.query.error.length - 1).split(",")
			: [];
		ModelStudent.readStudent("id", req.params.id, (err, data) => {
			if (err) {
				throw err;
			} else {
				res.render("editStudent", {
					student: data[0],
					id: req.params.id,
					errors: errorMessages,
				});
			}
		});
	}

	static postEditStudent(req, res) {
		const errorMessages = ControllerStudents.studentValidation(req.body);
		if (errorMessages.length) {
			res.redirect(`/students/${req.params.id}/edit?error=${JSON.stringify(errorMessages)}`);
		} else {
			ModelStudent.editStudent(req.body, req.params.id, (err) => {
				err ? res.render(err, { error: err }) : res.redirect("/students");
			});
		}
	}

	static deleteStudent(req, res) {
		ModelStudent.deleteStudent(req.params.id, (err) => {
			err ? res.render(err, { error: err }) : res.redirect("/students");
		});
	}

	static studentValidation({ first_name, last_name, email, gender, birth_date }) {
		const errorMessages = [];
		if (!first_name) {
			errorMessages.push("First Name is required");
		}
		if (!last_name) {
			errorMessages.push("Last Name is required");
		}
		if (!email) {
			errorMessages.push("Email is required");
		}
		if (!gender) {
			errorMessages.push("Gender is required");
		}
		if (!birth_date || new Date(birth_date) > new Date(Date.now())) {
			errorMessages.push("Birth Date is Invalid");
		}
		return errorMessages;
	}
}

module.exports = ControllerStudents;
