function urutkanAbjad(str) {
    // string to array
    let alphabethArray = [];
    for (let i = 0; i < str.length; i++) {
        alphabethArray.push(str[i]);
    }

    // sort array, a to z
    for (let i = 0; i < alphabethArray.length; i++) {
        for (let j = i + 1; j < alphabethArray.length; j++) {
            if (alphabethArray[i] > alphabethArray[j]) {
                let temp = alphabethArray[i];
                alphabethArray[i] = alphabethArray[j];
                alphabethArray[j] = temp;
            }
        }
    }

    // turn array to string again and return function
    let output = "";
    for (let i = 0; i < alphabethArray.length; i++) {
        output += alphabethArray[i];
    }
    return output;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
