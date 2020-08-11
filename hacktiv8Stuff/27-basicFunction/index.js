// Function shoutOut
function shoutOut() {
    console.log("Halo Function!");
}

shoutOut();

// Function Multiply
function calculateMultiply(num1, num2) {
    return num1 * num2;
}

let num1 = 5;
let num2 = 6;
let hasilPerkalian = calculateMultiply(5, 6);
console.log(hasilPerkalian);

// Function Sentence
function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
