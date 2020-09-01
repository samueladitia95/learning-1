function pairUp(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        // console.log(i)
        if (arr[i + 1]) {
            result.push(`${arr[i]} dan ${arr[i + 1]}`);
        } else {
            result.push(`${arr[i]} dan Instruktur`);
        }
    }
    return result;
}
console.log(pairUp(["budy", "badu", "jony"]));
