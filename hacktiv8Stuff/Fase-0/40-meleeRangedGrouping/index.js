function meleeRangedGrouping(str) {
	// check if string is empty
	if (!str.length) {
		return [];
	}

	// split name and type into its own value
	let seperated = [];
	let splitted = splitting(str);

	for (let i = 0; i < splitted.length; i++) {
		let hero = "";
		let type = "";
		let flag = false;
		splited;
		for (let j = 0; j < splitted[i].length; j++) {
			if (splitted[i][j] === "-") {
				flag = true;
				continue;
			}

			flag ? (type += splitted[i][j]) : (hero += splitted[i][j]);
		}
		seperated.push([hero, type]);
	}

	// group weapon name into it's own sub-array
	let output = [[], []];
	for (let i = 0; i < seperated.length; i++) {
		if (seperated[i][1] === "Ranged") {
			output[0].push(seperated[i][0]);
		} else {
			output[1].push(seperated[i][0]);
		}
	}
	return output;
}

// // TEST CASE

console.log(meleeRangedGrouping("Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"));
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
