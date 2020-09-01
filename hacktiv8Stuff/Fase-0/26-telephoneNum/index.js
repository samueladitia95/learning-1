function createPhoneNumber(numbers) {
    // let printed = ""
    // for (let i = 0; i < numbers.length; i++) {
    //   if (i === 0) {
    //     printed += "(" + numbers[i];
    //   } else if (i === 2) {
    //     printed += numbers[i] + ") ";
    //   } else if (i === 5) {
    //     printed += numbers[i] + "-";
    //   } else {
    //     printed += numbers[i];
    //   }
    // }
    // return printed;
    let numString = numbers.join("");
    return `(${numString.substring(0, 3)}) ${numString.substring(3, 6)}-${numString.substring(
        6,
        10
    )}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
