let word = "xoxoxo"
let xCount = 0;
let oCount = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "x") {
        xCount++;
    } else {
        oCount++;
    }
}

if (xCount == oCount) {
    console.log(true);
} else {
    console.log(false);
}