const runningSum = function (nums) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		let total = 0;
		for (let j = i; j >= 0; j--) {
			total += nums[j];
		}
		result.push(total);
	}
	return result;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
