"use strict";

const students = require("express").Router();
const ControllerStudents = require("../controllers/controllerStudents.js");

students.get("/", ControllerStudents.readStudents);
students.get("/search/:email", ControllerStudents.readStudentByEmail);

students.get("/add", ControllerStudents.getAddStudent);
students.post("/add", ControllerStudents.postAddStudent);

students.get("/:id/edit", ControllerStudents.getEditStudent);
students.post("/:id/edit", ControllerStudents.postEditStudent);

students.get("/:id/delete", ControllerStudents.deleteStudent);

module.exports = students;
