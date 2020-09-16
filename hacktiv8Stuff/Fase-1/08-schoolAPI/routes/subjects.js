"use strict";

const subjects = require("express").Router();
const ControllerSubjects = require("../controllers/controllerSubjects.js");

subjects.get("/", ControllerSubjects.readSubjects);
subjects.get("/:id", ControllerSubjects.readSubjectById);

module.exports = subjects;
