let inputString = "javascript";
let input = inputString.split("");

for (let i = 0; i < input.length; i++) {
    for (let j = i; j < input.length; j++) {
        if (input[i] > input[j]) {
            [input[i], input[j]] = [input[j], input[i]];
        }
    }
}

console.log(input.toString());
