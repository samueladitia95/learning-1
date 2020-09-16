"use strict";

const Student = require("./student.js");
const pool = require("../connection.js");

class ModelStudent {
	static processData(err, data, cb) {
		if (err) {
			cb(err, null);
		} else {
			let result = data.rows.map((student) => {
				return new Student(
					student.id,
					student.first_name,
					student.last_name,
					student.email,
					student.gender,
					student.birth_date,
				);
			});
			cb(null, result);
		}
	}

	static readStudents(cb) {
		pool.query("SELECT * FROM students ORDER BY id;", (err, data) => {
			ModelStudent.processData(err, data, cb);
		});
	}

	static readStudent(properties, value, cb) {
		pool.query(`SELECT * FROM students WHERE ${properties} = $1`, [value], (err, data) => {
			ModelStudent.processData(err, data, cb);
		});
	}

	static addStudent({ first_name, last_name, email, gender, birth_date }, cb) {
		const sqlStatement = `INSERT INTO students (first_name, last_name, email, gender, birth_date) 
								VALUES ($1, $2, $3, $4, $5);`;
		pool.query(sqlStatement, [first_name, last_name, email, gender, birth_date], (err) => {
			err ? cb(err) : cb(null);
		});
	}

	static editStudent({ first_name, last_name, email, gender, birth_date }, id, cb) {
		const sqlStatement = `UPDATE students 
								SET first_name = $1,
									last_name = $2,
									email = $3,
									gender = $4,
									birth_date = $5
								WHERE id = $6;`;
		pool.query(sqlStatement, [first_name, last_name, email, gender, birth_date, id], (err) => {
			err ? cb(err) : cb(null);
		});
	}

	static deleteStudent(id, cb) {
		pool.query("DELETE FROM students WHERE id = $1;", [id], (err) => {
			err ? cb(err) : cb(null);
		});
	}
}

module.exports = ModelStudent;
