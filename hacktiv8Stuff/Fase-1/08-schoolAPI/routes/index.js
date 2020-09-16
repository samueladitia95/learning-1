"use strict";

const homeRoutes = require("express").Router();
const students = require("./students.js");
const subjects = require("./subjects.js");
const teachers = require("./teachers.js");
const Controller = require("../controllers/controller.js");

homeRoutes.get("/", Controller.homePage);

homeRoutes.use("/students", students);
homeRoutes.use("/subjects", subjects);
homeRoutes.use("/teachers", teachers);

homeRoutes.get("*", Controller.errorPage);

module.exports = homeRoutes;
