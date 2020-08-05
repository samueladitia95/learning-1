let row1 = 5;
for (let i = 0; i < row1; i++) {
    console.log("*");
}

let row2 = 5;
for (let i = 0; i < row2; i++) {
    let printed = "";
    for (let j = 0; j < row2; j++) {
        printed += "*"
    }
    console.log(printed);
}

let row3 = 5;
for (let i = 0; i < row3; i++) {
    let printed = "";
    for (let j = 0; j < i + 1; j++) {
        printed += "*"
    }
    console.log(printed);
}

let row4 = 5;
for (let i = row4 - 1; i >= 0; i--) {
    let printed = "";
    for (let j = 0; j < i + 1; j++) {
        printed += "*"
    }
    console.log(printed);
}
