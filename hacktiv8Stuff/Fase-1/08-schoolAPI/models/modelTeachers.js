"use strict";

const Teacher = require("./teacher.js");
const pool = require("../connection.js");

class ModelTeacher {
	static processData(err, data, cb) {
		if (err) {
			cb(err, null);
		} else {
			let result = data.rows.map((teacher) => {
				return new Teacher(
					teacher.id,
					teacher.first_name,
					teacher.last_name,
					teacher.email,
					teacher.gender,
				);
			});
			cb(null, result);
		}
	}

	static readTeachers(cb) {
		pool.query("SELECT * FROM teachers ORDER BY id;", (err, data) => {
			ModelTeacher.processData(err, data, cb);
		});
	}

	static readTeacher(properties, value, cb) {
		pool.query(`SELECT * FROM teachers WHERE ${properties} = $1;`, [value], (err, data) => {
			ModelTeacher.processData(err, data, cb);
		});
	}
}

module.exports = ModelTeacher;
