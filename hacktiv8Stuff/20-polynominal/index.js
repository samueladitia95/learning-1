// console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
// console.log(polynominal('a+2a+3a+4a+5a')) // 15a
// console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
// console.log(polynominal('1')) // 1
// console.log(polynominal('a'))  // a

function polynominal (rumus) {
    let type = [];
    let tempString = "";
    for (let i = 0; i < rumus.length; i++) {
        if (rumus[i] !== "+") {
            tempString += rumus[i];
        } else {
            type.push(tempString);
            tempString = "";
        }
        if (i === rumus.length - 1) {
            type.push(tempString)
        }
    }
    return type;
}

console.log(polynominal('a+2ab+3b+4c+5bc')) // ['a', '2ab', '3b', '4c', '5bc']
console.log(polynominal('a+2a+3a+4a+5a')) // ['a', '2a', '3a', '4a', '5a']