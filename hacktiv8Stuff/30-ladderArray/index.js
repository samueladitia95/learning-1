function ladder(word) {
    let outerArray = [];
    for (let i = word.length - 1; i >= 0; i--) {
        let innerArray = [];
        for (let j = i; j >= 0; j--) {
            innerArray.unshift(word[j]);
        }
        outerArray.push(innerArray);
    }
    return outerArray;
}

console.log(ladder("hacktiv8"));
