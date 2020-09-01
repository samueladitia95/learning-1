let num = 74721;

while (true) {
    let numString = num.toString();
    let numStringRev = "";
    for (let i = 0; i < numString.length; i++) {
        numStringRev = numString[i] + numStringRev;
    }
    if (numString === numStringRev) {
        console.log(`${num} is palindrome!`);
        break;
    } else {
        num++;
    }
}
