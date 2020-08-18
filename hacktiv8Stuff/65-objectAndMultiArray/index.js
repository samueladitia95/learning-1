function carFactory(cars) {
	let result = {};
	for (let i = 0; i < cars.length; i++) {
		if (!result[cars[i][1]]) {
			result[cars[i][1]] = [cars[i][0]];
		} else {
			result[cars[i][1]].push(cars[i][0]);
		}
	}
	return result;
}

console.log(
	carFactory([
		["avanza", "toyota"],
		["innova", "toyota"],
		["civic", "honda"],
		["ertiga", "suzuki"],
		["jazz", "honda"],
		["accord", "honda"],
	]),
);

console.log(
	carFactory([
		["rush", "toyota"],
		["m3", "bmw"],
		["wrx", "subaru"],
	]),
);

function countCharObj(word) {
	let result = {};
	for (let i = 0; i < word.length; i++) {
		if (!result[word[i]]) {
			result[word[i]] = 1;
		} else {
			result[word[i]]++;
		}
	}
	return result;
}

console.log(countCharObj("oppo"));
console.log(countCharObj("samsung"));

function countCharArr(word) {
	let result = [];
	for (let i = 0; i < word.length; i++) {
		let isFound = false;
		for (let j = 0; j < result.length; j++) {
			if (result[j][0] === word[i]) {
				isFound = true;
				result[j][1]++;
			}
		}
		if (!isFound) {
			result.push([word[i], 1]);
		}
	}
	return result;
}

console.log(countCharArr("oppo"));
console.log(countCharArr("samsung"));

function rotateMe(names) {
	let result = [];
	for (let i = 0; i < names.length; i++) {
		let reversed = "";
		for (let j = 0; j < names[i].length; j++) {
			reversed = names[i][j] + reversed;
		}
		result.push(reversed);
	}
	return result;
}

console.log(rotateMe(["paul", "dragunov", "deviljin", "hworang"]));

function countStar(stars) {
	let result = {
		"*****": 0,
		"****": 0,
		"***": 0,
		"**": 0,
		"*": 0,
	};
	for (let i = 0; i < stars.length; i++) {
		let tempStar = "";
		for (let j = 0; j < stars[i].length; j++) {
			if (stars[i][j] === "*") {
				tempStar += stars[i][j];
			}
		}
		result[tempStar]++;
	}
	return result;
}

console.log(
	countStar([
		["*", "*", "*", " ", " "],
		["*", "*", "*", "*", " "],
		["*", "*", "*", " ", " "],
		["*", "*", "*", "*", "*"],
		["*", "*", " ", " ", " "],
		["*", "*", "*", " ", " "],
		["*", "*", "*", "*", " "],
		["*", "*", " ", " ", " "],
		["*", "*", "*", " ", " "],
		["*", "*", " ", " ", " "],
		["*", "*", "*", "*", "*"],
		["*", "*", "*", "*", " "],
	]),
);
