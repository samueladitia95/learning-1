"use strict";

const fs = require("fs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		let data = JSON.parse(fs.readFileSync("./data/teachers.json", "utf8"));
		data = data.map((element) => {
			return {
				firstName: element.first_name,
				lastName: element.last_name,
				email: element.email,
				gender: element.gender,
				createdAt: new Date(),
				updatedAt: new Date(),
			};
		});
		return queryInterface.bulkInsert("teachers", data, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("teachers", null, {});
	},
};
