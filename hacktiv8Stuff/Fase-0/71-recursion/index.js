function recurseMe(times) {
	if (times === 0) {
		console.log("Base Case 0!");
	} else {
		console.log(`before ${times}`);
		recurseMe(times - 1);
		console.log(`after: ${times}`);
	}
}

// recurseMe(3);

function countup(n) {
	if (n < 1) {
		return [];
	} else {
		console.log(n);
		const countArray = countup(n - 1);
		countArray.push(n);
		return countArray;
	}
}
// console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		let arr = countdown(n - 1);
		arr.unshift(n);
		return arr;
	}
}

console.log(countdown(10))

function rangeOfNumbers(n1, n2) {
	if (n2 < n1) {
		return [];
	} else {
		const arr = rangeOfNumbers(n1, n2 - 1);
		arr.push(n2);
		return arr;
	}
}

// console.log(rangeOfNumbers(1, 5));
// console.log(rangeOfNumbers(6, 9));
// console.log(rangeOfNumbers(4, 4));

function fibonacciNum(n) {
	if (n === 0) {
		return [0];
	} else {
		const arr = fibonacciNum(n - 1);
		if (n === 1) {
			const firstIndex = fibonacciNum(0);
			firstIndex.push(n);
			return firstIndex;
		} else {
			arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
			return arr;
		}
	}
}

// console.log(fibonacciNum(20));
