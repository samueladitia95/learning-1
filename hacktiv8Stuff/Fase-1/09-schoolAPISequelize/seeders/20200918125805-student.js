"use strict";

const fs = require("fs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		let data = JSON.parse(fs.readFileSync("./data/students.json", "utf8"));
		data = data.map((element) => {
			return {
				firstName: element.first_name,
				lastName: element.last_name,
				email: element.email,
				gender: element.gender,
				birthDate: element.birth_date,
				createdAt: new Date(),
				updatedAt: new Date(),
			};
		});
		return queryInterface.bulkInsert("students", data, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("students", null, {});
	},
};
