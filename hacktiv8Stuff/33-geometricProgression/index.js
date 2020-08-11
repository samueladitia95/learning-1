function tentukanDeretGeometri(arr) {
    if (arr.length < 2) {
        return "Panjang array terlalu pendek";
    } else {
        let ratio = arr[1] / arr[0];
        let flag = true;
        for (let i = 1; i < arr.length - 1; i++) {
            if (!(arr[i] * ratio === arr[i + 1])) {
                flag = false;
            }
        }
        return flag;
    }
}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false