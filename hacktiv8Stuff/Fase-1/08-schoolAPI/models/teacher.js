"use strict";

class Teacher {
	constructor(id, first_name, last_name, email, gender, birth_date) {
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.gender = gender;
	}
}

module.exports = Teacher;
