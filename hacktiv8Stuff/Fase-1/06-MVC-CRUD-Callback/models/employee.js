"use strict";

const fs = require("fs");
const Patient = require("./patient");

class Employee {
	constructor(id, name, position, username, password, isLogin = false) {
		this.id = id;
		this.name = name;
		this.position = position;
		this.username = username;
		this.password = password;
		this.isLogin = isLogin;
	}

	static readEmployeeData(cb) {
		fs.readFile("./data/employee.json", "utf8", (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				data = JSON.parse(data);
				data = data.map((element) => {
					if (element.position === "doctor") {
						return new Doctor(
							element.id,
							element.name,
							element.username,
							element.password,
							element.isLogin,
							element.patients.map((element) => {
								return new Patient (
									element.id,
									element.name,
									element.diagnosis
								)
							})
						);
					} else {
						return new Employee(
							element.id,
							element.name,
							element.position,
							element.username,
							element.password,
							element.isLogin,
						);
					}
				});
				cb(null, data);
			}
		});
	}

	static writeEmployeeData(data, cb) {
		fs.writeFile("./data/employee.json", JSON.stringify(data, null, 4), "utf8", (err) => {
			cb(err);
		});
	}

	static addEmployee(input, cb) {
		const [name, position, username, passsword] = input;
		Employee.readEmployeeData((err, data) => {
			if (err) {
				cb(err, null);
			}

			let id = 1;
			if (data.length) {
				id = data[data.length - 1].id + 1;
			}
			data.push(new Employee(id, name, position, username, passsword));
			Employee.writeEmployeeData(data, (err) => {
				if (err) {
					cb(err, null);
				} else {
					cb(null, new Employee(id, name, position, username, passsword));
				}
			});
		});
	}

	static logIn(username, password, cb) {
		Employee.readEmployeeData((err, data) => {
			if (err) {
				cb(err, null);
				return;
			}

			// check if someone already login
			for (let i = 0; i < data.length; i++) {
				if (data[i].isLogin) {
					cb("error", data[i].name);
					return;
				}
			}

			for (let i = 0; i < data.length; i++) {
				if (data[i].username === username) {
					if (data[i].password === password) {
						data[i].isLogin = true;
						Employee.writeEmployeeData(data, (err) => {
							if (err) {
								cb(err, null);
								return;
							} else {
								cb(null, true);
								return;
							}
						});
					} else {
						cb(null, false);
						return;
					}
				}
			}
		});
	}

	static logOut(cb) {
		Employee.readEmployeeData((err, data) => {
			if (err) {
				cb(err, null);
				return;
			}

			let isAnyLogin = false;
			for (let i = 0; i < data.length; i++) {
				if (data[i].isLogin) {
					data[i].isLogin = false;
					isAnyLogin = true;
					break;
				}
			}

			Employee.writeEmployeeData(data, (err) => {
				if (err) {
					cb(err, null);
				}
			});

			if (!isAnyLogin) {
				cb(null, false);
			} else {
				cb(null, true);
			}
		});
	}

	static addPatient(name, diagnose, cb) {
		Employee.readEmployeeData((err, data) => {
			if (err) {
				cb(err, null);
			}

			let numOfPatients = 0;
			let isAnyLogin = false;
			for (let i = 0; i < data.length; i++) {
				if (data[i].isLogin && data[i].constructor.name === "Doctor") {
					let id = data[i].patients.length
						? data[i].patients[data[i].patients.length - 1].id + 1
						: 1;
					let patient = new Patient(id, name, diagnose);
					data[i].patients.push(patient);
					numOfPatients = data[i].patients.length;
					isAnyLogin = true;
				} else if (data[i].isLogin && data[i].constructor.name !== "Doctor") {
					cb(null, "not a doctor");
					return;
				}
			}

			if (!isAnyLogin) {
				cb(null, "no one");
				return;
			}

			Employee.writeEmployeeData(data, (err) => {
				if (err) {
					cb(err, null);
				} else {
					cb(null, numOfPatients);
				}
			});
		});
	}
}

class Doctor extends Employee {
	constructor(id, name, username, password, isLogin, patients = []) {
		super(id, name, "doctor", username, password, isLogin);
		this.patients = patients;
	}
}

module.exports = Employee;
