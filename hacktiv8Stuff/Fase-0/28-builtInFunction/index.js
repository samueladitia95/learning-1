// Function Antrian
function antrian(line, person) {
    line.push(person);
    return line;
}

let line1 = ["John", "Harry", "Kate", "Gus"];
let person = "Mary";
console.log(antrian(line1, person));

// Function Panggil Antrian
function panggilAntrian(line) {
    return line.shift();
}

let line2 = ["John", "Harry", "Kate", "Gus"];
console.log(panggilAntrian(line2));

// Function Tumpukan
function tumpukan(line, title) {
    line.unshift(title);
    return line;
}

let line3 = ["John", "Harry", "Kate", "Gus"];
let title = "Mary";
console.log(tumpukan(line3, title));

// Function Ganjil Genap
function ganjilGenap(plat) {
    // error checking if plat is empty string or array
    if (plat === "") {
        return "plat tidak ditemukan";
    } else if (!plat) {
        return "invalid data";
    }

    let platArray = [];
    let platString = "";

    // plat to array
    for (let i = 0; i < plat.length; i++) {
        if (plat[i] === ";") {
            platArray.push(Number(platString));
            platString = "";
            continue;
        } else {
            platString += plat[i];
        }
    }
    platArray.push(platString);

    // genap ganjil count
    let odd = 0;
    let even = 0;
    for (let i = 0; i < platArray.length; i++) {
        platArray[i] % 2 === 0 ? even++ : odd++;
    }

    // return result
    if (even === 0) {
        return `plat ganjil sebanyak ${odd} dan plat genap tidak ditemukan`;
    } else if (odd === 0) {
        return `plat genap sebanyak ${even} dan plat ganjil tidak ditemukan`;
    } else {
        return `plat genap sebanyak ${even} dan plat ganjil sebanyak ${odd}`;
    }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data
