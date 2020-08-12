function sorting(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
// console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]

function sortingByType(array) {
    let output = [[], [], []];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            output[0].push(array[i]);
        } else if (typeof array[i] === "string") {
            output[1].push(array[i]);
        } else if (typeof array[i] === "boolean") {
            output[2].push(array[i]);
        }
        output[0] = sorting(output[0]);
    }
    return output;
}

// console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]

function sortAllClean(array) {
    let output = [[], [], []];
    
    for (let i = 0; i < array.length; i++) {
        if (!array[i] && array[i] !== false) {
            continue;
        }

        if (typeof array[i] === "number") {
            output[0].push(array[i]);
            output[0] = sorting(output[0]);
        } else if (typeof array[i] === "string") {
            output[1].push(array[i]);
        } else if (typeof array[i] === "boolean") {
            output[2].push(array[i]);
        }
    }

    if (!output[0][0] && !output[1][0] && !output[2][0]) {
        output = [];
    }
    return output;
}

console.log(sortAllClean([undefined, null, 456, "def", NaN, [], true, 123, "bcd", false]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([NaN, undefined])); // []
