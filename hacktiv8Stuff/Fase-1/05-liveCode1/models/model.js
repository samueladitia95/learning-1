"use strict";

const fs = require("fs");

class Karyawan {
	constructor(id, nama, tahun, jabatan, gaji, level, persen) {
		this.id = id;
		this.nama = nama;
		this.tahun_masuk = tahun;
		this.jabatan = jabatan;
		this.gaji = gaji;
		this.level = level;
		this.lamaKerja = this.lamaKerja();
		this.perkiraanGaji = this.perkiraanGaji(persen);
	}

	lamaKerja() {
		const yearNow = parseInt(new Date(Date.now()).getFullYear()) - this.tahun_masuk;
		return yearNow;
	}

	perkiraanGaji(persen) {
		let gaji = 0;
		if (this.lamaKerja > 0) {
			gaji = this.gaji + (this.gaji * persen) / 100;
		} else {
			gaji = this.gaji;
		}
		return gaji;
	}
}

class Staff extends Karyawan {
	constructor(id, nama, tahun, jabatan, gaji) {
		super(id, nama, tahun, jabatan, gaji, "Staff", 10);
	}
}

class Manager extends Karyawan {
	constructor(id, nama, tahun, jabatan, gaji) {
		super(id, nama, tahun, jabatan, gaji, "Manager", 15);
	}
}

class Chief extends Karyawan {
	constructor(id, nama, tahun, jabatan, gaji) {
		super(id, nama, tahun, jabatan, gaji, "Chief", 30);
	}
}

class Model {
	static readData() {
		let data = fs.readFileSync("./data.json", "utf8");
		data = JSON.parse(data);
		let id = 0;
		data = data.map((element) => {
			if (element.level === "Staff") {
				id++;
				return new Staff(
					element.id || id,
					element.nama,
					element.tahun_masuk,
					element.jabatan,
					element.gaji,
				);
			} else if (element.level === "Manager") {
				id++;
				return new Manager(
					element.id || id,
					element.nama,
					element.tahun_masuk,
					element.jabatan,
					element.gaji,
				);
			} else if (element.level === "Chief") {
				id++;
				return new Chief(
					element.id || id,
					element.nama,
					element.tahun_masuk,
					element.jabatan,
					element.gaji,
				);
			}
		});

		return data;
	}

	static writeData(data) {
		fs.writeFileSync("./data.json", JSON.stringify(data, null, 4));
	}

	static addKaryawan([nama, tahun, jabatan, gaji, level]) {
		let data = Model.readData();
		let id = data[data.length - 1].id + 1 || data.length + 1;
		switch (level) {
			case "Staff":
				data.push(new Staff(id, nama, Number(tahun), jabatan, Number(gaji)));
				break;
			case "Manager":
				data.push(new Manager(id, nama, Number(tahun), jabatan, Number(gaji)));
				break;
			case "Chief":
				data.push(new Chief(id, nama, Number(tahun), jabatan, Number(gaji)));
				break;
		}
		Model.writeData(data);
		return data[data.length - 1];
	}

	static deleteKaryawan(id) {
		let data = Model.readData();
		let deletedData = null;
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === Number(id)) {
				deletedData = data[i];
				delete data[i];
			}
		}

		let result = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i]) {
				result.push(data[i]);
			}
		}

		Model.writeData(result);
		return deletedData;
	}

	static filterByLength(masaKerja) {
		let data = Model.readData();
		let result = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].lamaKerja === masaKerja) {
				result.push(data[i]);
			}
		}
		return result;
	}
}

module.exports = Model;
