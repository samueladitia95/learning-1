"use strict";

const Controller = require("./controller.js");

class Switcher {
	static inputProcess(command, parameter) {
		switch (command) {
			case "lihat":
				Controller.readData();
				break;
			case "tambah":
				Controller.addData(parameter);
				break;
			case "hapus":
				Controller.deleteData(parameter[0]);
				break;
			case "filter":
				Controller.filterByLength(parameter[0]);
				break;
		}
	}
}

module.exports = Switcher;
