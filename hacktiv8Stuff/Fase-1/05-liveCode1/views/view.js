"use strict";

class View {
	static displayData(data) {
		console.table(data);
	}

	static addKaryawan({ nama, level, id, gaji }) {
		console.log(
			`Berhasil menambahkan karyawan "${nama}" ke jenis "${level}" dengan ID "${id}" dan gaji ${gaji}`,
		);
	}

	static deleteKaryawan({ nama, level, id }) {
		console.log(
			`Karyawan "${nama}" dengan kelas "${level}" dan ID "${id}" telah di hapus dari daftar karyawan hacktiv8`,
		);
	}
}

module.exports = View;
