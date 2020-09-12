"use strict";

const fs = require("fs");
const Teacher = require("./teacher.js");
const Student = require("./student.js");
const Subject = require("./subject.js");

class Model {
	static readTeachers() {
		let data = fs.readFileSync("./data/teachers.json", "utf8");
		data = JSON.parse(data);
		data = data.map((element) => {
			return new Teacher(
				element.id,
				element.first_name,
				element.last_name,
				element.email,
				element.gender,
			);
		});
		return data;
	}

	static readStudents() {
		let data = fs.readFileSync("./data/students.json", "utf8");
		data = JSON.parse(data);
		data = data.map((element) => {
			return new Student(
				element.id,
				element.first_name,
				element.last_name,
				element.email,
				element.gender,
				element.birth_date,
			);
		});
		return data;
	}

	static readSubjects() {
		let data = fs.readFileSync("./data/subjects.json", "utf8");
		data = JSON.parse(data);
		data = data.map((element) => {
			return new Subject(element.id, element.subject_name);
		});
		return data;
	}
}

module.exports = Model;