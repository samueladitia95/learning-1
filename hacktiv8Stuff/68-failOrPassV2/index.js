function failOrPass(arr) {
	let result = {
		passed: [],
		failed: [],
		classCode: {},
    };
    
    let classTally = {};

	for (let i = 0; i < arr.length; i++) {
        const status = arr[i]["score"] > 65 ? "passed" : "failed";
        result[status].push(arr[i]["name"]);

        if (!arr[i]["classCode"] in result["classCode"]) {
            result["classCode"][arr[i]["classCode"]] ;
        }


	}
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

// {
//   passed: [ 'John', 'Budi', 'Yolo' ],
//   failed: [ 'Siti', 'Aaron', 'Mike', 'Osass', 'Arthur' ],
//   classCode: {
//       A: `1 passed 2 failed`,
//       B: `0 passed 2 failed`,
//       C: `2 passed 1 failed`
//   }
// }
