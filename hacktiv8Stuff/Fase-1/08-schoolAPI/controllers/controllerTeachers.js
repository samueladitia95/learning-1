"use strict";

const ModelTeachers = require("../models/modelTeachers.js");

class ControllerTeachers {
	static readTeachers(req, res) {
		ModelTeachers.readTeachers((err, data) => {
			ControllerTeachers.displayTeachersCheck(res, err, data);
		});
	}

	static readTeacherById(req, res) {
		ModelTeachers.readTeacher("id", +req.params.id, (err, data) => {
			ControllerTeachers.displayTeachersCheck(res, err, data);
		});
	}

	static displayTeachersCheck(res, err, data) {
		if (err) {
			res.render(err, { error: err });
		} else {
			res.render("displayTeachers", { teachers: data });
		}
	}
}

module.exports = ControllerTeachers;
