"use strict";

const teachers = require("express").Router();
const TeachersController = require("../controllers/teachersController");

teachers.get("/", TeachersController.displayAll);
teachers.get("/:id", TeachersController.findById);

module.exports = teachers;
