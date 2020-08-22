function groupAnimals(animals) {
	let alphabeth = "abcdefghijklmnopqrstuvwxyz";
	let result = [];
	for (let i = 0; i < alphabeth.length; i++) {
		let subResult = [];
		for (let j = 0; j < animals.length; j++) {
			if (alphabeth[i] === animals[j][0].toLowerCase()) {
				subResult.push(animals[j]);
			}
		}
		if (subResult.length) {
			result.push(subResult);
		}
	}
	return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
