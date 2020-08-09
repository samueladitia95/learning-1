// Nested Loop 1
let num1 = 5;

console.log("--Nested Loop 1--");
for (let i = 0; i < num1; i++) {
    let printed = "";
    for (let j = num1 - i; j > 0; j--) {
        printed += j;
    }
    console.log(printed);
}

// Nested Loop 2
let num2 = 3;

console.log("--Nested Loop 2--");
for (let i = 0; i < num2; i++) {
    let printed = "";
    for (let j = 1 + i; j <= num2; j++) {
        printed += j;
    }
    console.log(printed);
}

// Nested Loop 3
let num3 = 5;

console.log("--Nested Loop 3--");
for (let i = 1; i <= num3; i++) {
    let printed = "";
    for (let j = 1; j <= i; j++) {
        printed = j + printed;
    }
    console.log(printed);
}

let num4 = 3;
let counter = 1;

console.log("--Nested Loop 4--");
for (let i = 0; i < num4; i++) {
    let printed = "";
    for (let j = 0; j < num4; j++) {
        printed += counter;
        counter++;
    }
    console.log(printed);
}