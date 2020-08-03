function reverseString(str) {
    if (!(typeof str === "string")) {
        return "Invalid input, String only!"
    }
    if (str === "") {
        return "Empty String!"
    }
    let reversed = str[0];
    for (let i = 1; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed.toLowerCase();
}

console.log(reverseString(""))
console.log(reverseString(""))