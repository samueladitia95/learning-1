function hariPenting(data) {
	let result = {};
	for (let i = 0; i < data.length; i++) {
        // Get the name of the month
		let month = "";
        let isMonth = false;
		for (let j = 0; j < data[i][0].length; j++) {
			if (data[i][0][j] === " ") {
				isMonth = true;
				continue;
			}
			if (isMonth) {
				month += data[i][0][j];
			}
        }
        
        // Shorten month if string length is more than 5
        if (month.length > 5) {
            month = month.substring(0, 3);
        }

        // Create new month property if month doesn't exist
		if (!result[month]) {
			result[month] = [data[i][1]];
		} else {
			result[month].push(data[i][1]);
		}
	}
	return result;
}
console.log(
	hariPenting([
		["12 May", "Tragedi Tri Sakti"],
		["17 August", "Hari Proklamasi Kemerdekaan Indonesia"],
		["2 May", "Hari Buruh"],
		["11 March", "Supersemar"],
	]),
);
// {
//   May: [ 'Tragedi Tri Sakti', 'Hari Buruh' ],
//   Aug: [ 'Hari Proklamasi Kemerdekaan Indonesia' ],
//   March: [ 'Supersemar' ]
// }
console.log(
	hariPenting([
		["1 January", "Tahun Baru Masehi"],
		["17 September", "Hari Palang Merah Nasional"],
		["10 January", "Hari Lingkungan Hidup Indonesia"],
		["1 January", "Hari Perdamaian Dunia"],
	]),
);
// {
//   Jan: [ 'Tahun Baru Masehi', 'Hari Lingkungan Hidup Indonesia', 'Hari Perdamaian Dunia' ]
//   Sep: [ 'Hari Palang Merah Nasional' ]
// }
