const xorOperation = function(n, start) {
    let result = start;
    for(let i = 1; i < n; i++) {
        result ^= start + 2 * i;
    }
    return result;
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
console.log(xorOperation(1, 7));
console.log(xorOperation(10, 5));