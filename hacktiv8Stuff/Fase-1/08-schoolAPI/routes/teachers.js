"use strict";

const teachers = require("express").Router();
const ControllerTeachers = require("../controllers/controllerTeachers.js");

teachers.get("/", ControllerTeachers.readTeachers);
teachers.get("/:id", ControllerTeachers.readTeacherById);

module.exports = teachers;
