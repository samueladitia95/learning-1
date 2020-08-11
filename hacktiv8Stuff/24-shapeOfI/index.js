let num = 6;

if (num < 4 || num > 10) {
    console.log("Invalid Number");
} else {
    for (let i = 0; i < num; i++) {
        let printed = "";
        if (i === 0 || i === num - 1) {
            for (let j = 0; j < num; j++) {
                printed += "#";
            }
        } else {
            for (let j = 0; j < num - 1; j++) {
                if (num % 2 === 1) {
                    printed += j === (num - 1) / 2 ? "|" : " ";
                } else {
                    printed += j === num / 2 - 1 ? "||" : " ";
                }
            }
        }
        console.log(printed);
    }
}
