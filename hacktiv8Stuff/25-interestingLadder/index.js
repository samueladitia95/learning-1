let kata = "hacktiv8";

for (let i = kata.length - 1; i >= 0; i--) {
    let printed = "";
    let printedTemp = "";
    for (let j = 0; j < kata.length; j++) {
        if (j < i) {
            printed += " ";
        } else {
            if (i % 2 === 0) {
                printed += kata[j];
            } else {
                printedTemp = kata[j] + printedTemp;
            }
        }
    }
    printed += printedTemp;
    console.log(printed);
}
