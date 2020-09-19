"use strict";

const students = require("express").Router();
const studentsController = require("../controllers/studentsController");

students.get("/", studentsController.displayAll);
students.get("/search/:id", studentsController.findById);

students.get("/add", studentsController.addStudentGet);
students.post("/add", studentsController.addStudentPost);

students.get("/:id/edit", studentsController.editStudentGet);
students.post("/:id/edit", studentsController.editStudentPost);

students.get("/:id/delete", studentsController.deleteById);

module.exports = students;
