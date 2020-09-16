"use strict";

const Subject = require("./subject.js");
const pool = require("../connection.js");

class ModelSubject {
	static processData(err, data, cb) {
		if (err) {
			cb(err, null);
		} else {
			let result = data.rows.map((subject) => {
				return new Subject(subject.id, subject.subject_name);
			});
			cb(null, result);
		}
	}

	static readSubjects(cb) {
		pool.query("SELECT * FROM subjects ORDER BY id;", (err, data) => {
			ModelSubject.processData(err, data, cb);
		});
	}

	static readSubject(properties, value, cb) {
		pool.query(`SELECT * FROM subjects WHERE ${properties} = $1;`, [value], (err, data) => {
			ModelSubject.processData(err, data, cb);
		});
	}
}

module.exports = ModelSubject;
