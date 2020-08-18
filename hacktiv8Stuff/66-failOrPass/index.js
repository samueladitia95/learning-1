// INPUT
// ---------
// [
//   { name: 'John', score: 80, classCode: 'A' },
//   { name: 'Mike', score: 60, classCode: 'B' },
//   { name: 'Budi', score: 70, classCode: 'C' },
//   { name: 'Siti', score: 50, classCode: 'A' },
//   { name: 'Aaron', score: 10, classCode: 'A' },
//   { name: 'Arthur', score: 10, classCode: 'C' },
//   { name: 'Osass', score: 10, classCode: 'B' },
//   { name: 'Yolo', score: 90, classCode: 'C' },
// ];
// OUTPUT
// -----------
// [
//   { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
//   { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
//   { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
// ]

function passOrFail(arr) {
	let result = [];

	for (let i = 0; i < arr.length; i++) {
        // Check classCode already in result
		let isExist = false;
		for (let j = 0; j < result.length; j++) {
			if (result[j]["classCode"] === arr[i]["classCode"]) {
                isExist = true;
                break;
			}
		}

        // if classCode not exist in result, add it
		if (!isExist) {
			result.push({
				classCode: arr[i]["classCode"],
				passed: [],
				failed: [],
			});
        }
        
        // filter array of object based on score
		for (let j = 0; j < result.length; j++) {
			if (arr[i]["classCode"] === result[j]["classCode"]) {
				if (arr[i]["score"] > 65) {
					result[j]["passed"].push(arr[i]["name"]);
				} else {
					result[j]["failed"].push(arr[i]["name"]);
                }
                continue;
			}
		}
	}
	return result;
}
console.log(
	passOrFail([
		{ name: "John", score: 80, classCode: "A" },
		{ name: "Mike", score: 60, classCode: "B" },
		{ name: "Budi", score: 70, classCode: "C" },
		{ name: "Siti", score: 50, classCode: "A" },
		{ name: "Aaron", score: 10, classCode: "A" },
		{ name: "Arthur", score: 10, classCode: "C" },
		{ name: "Osass", score: 10, classCode: "B" },
		{ name: "Yolo", score: 90, classCode: "C" },
	]),
);
