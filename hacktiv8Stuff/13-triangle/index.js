let num = 8;

for (let i = 1; i <= num; i++) {
    let printed = "";
    for (let j = 1; j <= (2 * num - 1); j++) {
        if (j >= num - i + 1 && j <= num + i - 1) {
            if (j % 2 == 0) {
                printed += "O";
            } else {
                printed += "X"
            }
        } else {
            printed += " "
        }
    }
    console.log(printed)
}