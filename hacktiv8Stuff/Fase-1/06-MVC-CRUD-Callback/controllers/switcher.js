"use strict";

const HospitalController = require("./controller");

class Switcher {
	static inputProcess(command, parameter) {
		switch (command) {
			case "listemployee":
				HospitalController.listAllemployee();
				break;
			case "register":
				HospitalController.addEmployee(parameter);
				break;
			case "login":
				HospitalController.logIn(parameter);
				break;
			case "addPatient":
				HospitalController.addPatient(parameter);
				break;
			case "logout":
				HospitalController.logOut();
				break;
		}
	}
}

module.exports = Switcher;
