let num = 10;

for (let i = 1; i <= num; i++) {
    let printed = "";
    for (let j = 1; j <= (2 * num - 1); j++) {
        if (j >= num - i + 1 && j <= num + i - 1) {
            if (i % 2 === 0) {
                (j % 2 === 0) ? printed += "X" : printed += "O"
            } else {
                (j % 2 === 0) ? printed += "O" : printed += "X"
            }
        } else {
            printed += " "
        }
    }
    console.log(printed)
}