function tukarBesarKecil(kalimat) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < lowerCase.length; j++) {
            if (kalimat[i] === lowerCase[j]) {
                output += upperCase[j];
                break;
            } else if (kalimat[i] === upperCase[j]) {
                output += lowerCase[j];
                break;
            }

            if (j === lowerCase.length - 1) {
                output += kalimat[i];
            }
        }
    }
    return output;
}

// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
