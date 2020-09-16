"use strict";

const ModelSubject = require("../models/modelSubjects.js");

class ControllerSubjects {
	static readSubjects(req, res) {
		ModelSubject.readSubjects((err, data) => {
			ControllerSubjects.displaySubjectsCheck(res, err, data);
		});
	}

	static readSubjectById(req, res) {
		ModelSubject.readSubject("id", +req.params.id, (err, data) => {
			ControllerSubjects.displaySubjectsCheck(res, err, data);
		});
	}

	static displaySubjectsCheck(res, err, data) {
		if (err) {
			res.render(err, { error: err });
		} else {
			res.render("displaySubjects", { subjects: data });
		}
	}
}

module.exports = ControllerSubjects;
