"use strict";

const Model = require("../models/model.js");
const View = require("../views/view.js");

class Controller {
	static readData() {
		let data = Model.readData();
		View.displayData(data);
	}

	static addData(parameter) {
		let result = Model.addKaryawan(parameter);
		View.addKaryawan(result);
	}

	static deleteData(id) {
		let result = Model.deleteKaryawan(id);
		View.deleteKaryawan(result);
	}

	static filterByLength(masaKerja) {
		let result = Model.filterByLength(Number(masaKerja));
		View.displayData(result);
	}
}

module.exports = Controller;
