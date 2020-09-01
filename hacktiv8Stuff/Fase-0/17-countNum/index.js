let kalimat = "I";
let count = 0;

if (kalimat[0] !== " ") {
    count++;
}

for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
        count++;
    }
}

console.log(count);
