let kidsWithCandies = function (candies, extraCandies) {
	let result = [];
	for (let i = 0; i < candies.length; i++) {
		const total = candies[i] + extraCandies;
		let isTheMost = true;
		for (let j = 0; j < candies.length; j++) {
			if (j === i) {
				continue;
			} else {
				if (total < candies[j]) {
					isTheMost = false;
				}
			}
		}
		result.push(isTheMost);
	}
	return result;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
