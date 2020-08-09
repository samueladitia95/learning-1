function slice(data, start, end) {
    if (!start && !end) {
        return data;
    } else if (start > end && end) {
        return [];
    } else {
        let arrayTemp = [];
        if (!end) {
            for (let i = start; i < data.length; i++) {
                arrayTemp.push(data[i]);
            }
            return arrayTemp;
        } else {
            for (let i = start; i < end; i++) {
                arrayTemp.push(data[i]);
            }
        }
        return arrayTemp;
    }
}

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]