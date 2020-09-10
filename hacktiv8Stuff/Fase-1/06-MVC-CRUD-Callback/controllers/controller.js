"use strict";

const Patient = require("../models/patient.js");
const Employee = require("../models/employee.js");
const HospitalView = require("../views/view.js");

class HospitalController {
	static sleep(milliseconds) {
		var start = new Date().getTime();
		for (var i = 0; i < 1e7; i++) {
			if (new Date().getTime() - start > milliseconds) {
				break;
			}
		}
	}

	static listAllemployee() {
		Employee.readEmployeeData((err, data) => {
			if (err) {
				HospitalView.showError();
			}
			HospitalView.displayData(data);
		});
	}

	static addEmployee(input) {
		Employee.addEmployee(input, (err, person) => {
			if (err) {
				HospitalView.showErrorAdd(person);
			} else {
				HospitalView.showSuccessAdd(person);
				Employee.readEmployeeData((err, data) => {
					if (err) {
						HospitalView.showErrorAdd(person);
					}
					HospitalView.displayData(data);
				});
			}
		});
	}

	static logIn([username, password]) {
		Employee.logIn(username, password, (err, isLogIn) => {
			if (err && isLogIn) {
				HospitalView.someoneStillLogin(isLogIn);
			} else if (err) {
				HospitalView.logInFailed();
			} else {
				HospitalView.logInSuccess(username);
			}
		});
	}

	static logOut() {
		Employee.logOut((err, isOut) => {
			if (err) {
				HospitalView.showError();
			} else if (isOut) {
				HospitalView.logOutsucces();
			} else {
				HospitalView.noOneLogin();
			}
		});
	}

	static addPatient([name, ...diagnose]) {
		Employee.addPatient(name, diagnose, (err, numberOfPatients) => {
			if (err) {
				HospitalView.failedPatientAdded();
			} else {
				if (numberOfPatients === "not a doctor") {
					HospitalView.notADoctor();
				} else if (numberOfPatients === "no one") {
					HospitalView.noOneLogin();
				} else {
					HospitalView.patientAdded(numberOfPatients);
				}
			}
		});
	}
}

module.exports = HospitalController;
