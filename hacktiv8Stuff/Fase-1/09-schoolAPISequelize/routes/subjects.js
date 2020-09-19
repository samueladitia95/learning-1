"use strict";

const subjects = require("express").Router();
const subjectsController = require("../controllers/subjectsController");

subjects.get("/", subjectsController.displayAll);
subjects.get("/:id", subjectsController.findById);

module.exports = subjects;
