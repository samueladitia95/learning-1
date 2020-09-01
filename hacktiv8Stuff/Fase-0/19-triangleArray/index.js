let num = 3;

for (let i = 1; i <= num; i++) {
    let printed = [];
    let flag = true;
    for (let j = 1; j <= 2 * num - 1; j++) {
        if (j >= num - i + 1 && j <= num + i - 1) {
            if (flag) {
                printed.push("X");
                flag = false;
            } else {
                printed.push("O");
                flag = true;
            }
        } else {
            printed.push(" ");
        }
    }
    console.log(printed);
}
