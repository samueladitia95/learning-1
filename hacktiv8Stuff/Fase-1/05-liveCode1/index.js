"use strict";

const Switcher = require("./controllers/switcher.js");

const [command, ...paramater] = process.argv.slice(2);
Switcher.inputProcess(command, paramater);
