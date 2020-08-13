function cariModus(arr) {
    let isSame = false;
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 0;
        }
        result[arr[i]]++;

        // check if all num the same
        if (arr[0] !== arr[i]) {
            isSame = true;
        }
    }

    let highestCount = "";
    let count = 0;
    for (item in result) {
        if (result[item] > count) {
            highestCount = item;
            count = result[item];
        }
    }

    if (count === 1 || !isSame) {
        return "-1";
    }

    return highestCount;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
