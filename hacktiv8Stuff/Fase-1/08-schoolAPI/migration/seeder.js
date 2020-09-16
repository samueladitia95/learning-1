"use strict";

const pool = require("../connection.js");
const fs = require("fs");

// seed students table
fs.readFile("./data/students.json", "utf8", (err, data) => {
	if (err) {
		throw err;
	} else {
		data = JSON.parse(data);
		data.forEach((student) => {
			const sqlStatement = `INSERT INTO students (first_name, last_name, email, gender, birth_date) 
                                    VALUES ($1, $2, $3, $4, $5);`;
			const { first_name, last_name, email, gender, birth_date } = student;
			const parameter = [first_name, last_name, email, gender, birth_date];
			pool.query(sqlStatement, parameter, (err) => {
				if (err) {
					throw err;
				}
			});
		});
	}
});

// seed teachers table
fs.readFile("./data/teachers.json", "utf8", (err, data) => {
	if (err) {
		throw err;
	} else {
		data = JSON.parse(data);
		data.forEach((teacher) => {
			const sqlStatement = `INSERT INTO teachers (first_name, last_name, email, gender) 
                                    VALUES ($1, $2, $3, $4);`;
			const { first_name, last_name, email, gender } = teacher;
			const parameter = [first_name, last_name, email, gender];
			pool.query(sqlStatement, parameter, (err) => {
				if (err) {
					throw err;
				}
			});
		});
	}
});

// seed subjects table
fs.readFile("./data/subjects.json", "utf8", (err, data) => {
	if (err) {
		throw err;
	} else {
		data = JSON.parse(data);
		data.forEach(({ subject_name }) => {
			const sqlStatement = `INSERT INTO subjects (subject_name) VALUES ($1)`;
			pool.query(sqlStatement, [subject_name], (err) => {
				if (err) {
					throw err;
				}
			});
		});
	}
});
