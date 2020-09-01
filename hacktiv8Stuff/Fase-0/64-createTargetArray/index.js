const createTargetArray = function (nums, index) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		result.splice(index[i], 0, nums[i]);
	}
	return result;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
