function sittingArrangement(person, column) {
    if (!column) {
        return "Invalid Number";
    } else {
        let result = [];
        let counter = -1;
        let i = 0
        while (!(i >= person.length && result[counter].length === column)) {
            // calculate sub-array length and create new sub-array if sub-array length reach column
            if (i % column === 0) {
                counter++;
                result[counter] = [];
            }

            // push result to sub-array, array index change depend on above conditional
            (person[i]) ? result[counter].push(person[i]) : result[counter].push("Kursi Kosong");
            i++;
        }
        return result;
    }
}

console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));

// inspiration from https://stackoverflow.com/questions/4492385/how-to-convert-simple-array-into-two-dimensional-array-matrix-with-javascript