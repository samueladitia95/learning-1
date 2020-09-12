"use strict";

const Teacher = require("./teacher.js");

class Student extends Teacher {
	constructor(id, first_name, last_name, email, gender, birth_date) {
		super(id, first_name, last_name, email, gender);
		this.birth_date = birth_date;
	}
}

module.exports = Student;
