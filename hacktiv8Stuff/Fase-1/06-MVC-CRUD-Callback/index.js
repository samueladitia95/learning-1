"use strict";

const Switcher = require("./controllers/switcher.js");

const [command, ...parameter] = process.argv.slice(2);
Switcher.inputProcess(command, parameter);
