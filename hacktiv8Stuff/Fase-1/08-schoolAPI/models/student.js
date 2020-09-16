"use strict";

class Student {
	constructor(id, first_name, last_name, email, gender, birth_date) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.gender = gender;
		this.birth_date = birth_date;
	}
}

module.exports = Student;
