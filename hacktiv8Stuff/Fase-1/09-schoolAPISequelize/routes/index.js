"use strict";

const index = require("express").Router();
const students = require("./students");
const subjects = require("./subjects");
const teachers = require("./teachers");
const indexController = require("../controllers/indexController");

index.use("/students", students);
index.use("/subjects", subjects);
index.use("/teachers", teachers);

index.get("/", indexController.homePage);
index.get("/error", indexController.errorPage);

index.get("*", indexController.wrongPage);

module.exports = index;
