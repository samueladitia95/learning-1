"use strict";

class HospitalView {
	static displayData(data) {
		for (let i = 0; i < data.length; i++) {
			console.log(`${data[i].id}. ${data[i].name} => ${data[i].position}`);
		}
	}

	static showErrorAdd(person) {
		console.log(
			`Save Data Fail, {"username": ${person.username},`,
			`"password": ${person.password}, "role": ${person.position}}`,
		);
	}

	static showSuccessAdd(person) {
		console.log(
			`Save Data Success, {"username": ${person.username},`,
			`"password": ${person.password}, "role": ${person.position}}`,
		);
	}

	static logInSuccess(username) {
		console.log(`user ${username} logged in successfully`);
	}

	static logInFailed() {
		console.log(`Wrong username/password`);
	}

	static showError() {
		console.log("Error processing data");
	}

	static patientAdded(num) {
		console.log(`Data pasien berhasil dimasukkan, Total data pasien ${num}`);
	}

	static failedPatientAdded() {
		console.log(`pasien gagal di masukan`);
	}

	static notADoctor() {
		console.log("failed, you are not a doctor");
	}

	static noOneLogin() {
		console.log("failed, no one login");
	}

	static logOutsucces() {
		console.log("Success logging out");
	}

	static someoneStillLogin(name) {
		console.log(`User ${name} is still logged in`);
	}
}

module.exports = HospitalView;
