"use strict";

const express = require("express");
const app = express();
const Model = require("./models/model.js");

app.get("/", (req, res) => {
	const title = "<h1>Welcome To The Best School</h1>\n";
	const nav = `<ul>
                    <li><a href="http://localhost:3000/teachers">Teachers</a></li>
                    <li><a href="http://localhost:3000/students">Students</a></li>
                    <li><a href="http://localhost:3000/subjects">Subjects</a></li>
                 </ul>`;

	res.send(title + nav);
});

app.get("/teachers", (req, res) => {
	let teachers = Model.readTeachers();
	res.send(teachers);
});

app.get("/students", (req, res) => {
	let students = Model.readStudents();
	res.send(students);
});

app.get("/subjects", (req, res) => {
	let subjects = Model.readSubjects();
	res.send(subjects);
});

app.listen(3000);
