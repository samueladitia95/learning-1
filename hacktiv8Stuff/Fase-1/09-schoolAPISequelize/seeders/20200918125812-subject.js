"use strict";

const fs = require("fs");

module.exports = {
	up: (queryInterface, Sequelize) => {
		let data = JSON.parse(fs.readFileSync("./data/subjects.json", "utf8"));
		data = data.map((element) => {
			return {
				subjectName: element.subject_name,
				createdAt: new Date(),
				updatedAt: new Date(),
			};
		});
		return queryInterface.bulkInsert("subjects", data, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("subjects", null, {});
	},
};
