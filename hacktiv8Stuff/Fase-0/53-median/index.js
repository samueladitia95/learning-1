function cariMedian(arr) {
    sortArray(arr);
    let result =
        arr.length % 2 === 0
            ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
            : arr[Math.floor(arr.length / 2)];
    return result;
}

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// TEST CASES
console.log(cariMedian([5, 4, 3, 2, 1])); // 3
console.log(cariMedian([13, 4, 3, 10, 12, 1])); // 7
console.log(cariMedian([4, 3, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([8, 7, 8, 7])); // 7.5
