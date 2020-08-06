// console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
// console.log(polynominal('a+2a+3a+4a+5a')) // 15a
// console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
// console.log(polynominal('1')) // 1
// console.log(polynominal('a'))  // a

function polynominal (rumus) {
    // split into array
    let split = [];
    let tempString = "";
    for (let i = 0; i < rumus.length; i++) {
        if (rumus[i] !== "+") {
            tempString += rumus[i];
        } else {
            split.push(tempString);
            tempString = "";
        }
        if (i === rumus.length - 1) {
            split.push(tempString)
        }
    }

    // group array into type and count the number of each type
    let type = {};
    for (let i = 0; i < split.length; i++) {
        let tempString = "";
        let tempNum = 1;
        for (let j = 0; j < split[i].length; j++) {
            if (!Number(split[i][j])) {
                tempString += split[i][j];
            } else {
                tempNum = Number(split[i][j]);
            }
        }
        if (!type[tempString]) {
            type[tempString] = 0;
        }
        type[tempString] += tempNum;
    }
    return type
}

console.log(polynominal('a+2ab+3b+4c+5bc+4ab')) // ['a', '2ab', '3b', '4c', '5bc']
console.log(polynominal('a+2a+3a+4a+5a')) // ['a', '2a', '3a', '4a', '5a']
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a