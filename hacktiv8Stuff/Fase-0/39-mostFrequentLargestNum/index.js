function sorting(arrNumber) {
    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[j] < arrNumber[i]) {
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[i];
                arrNumber[i] = temp;
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    let count = 0;
    for (let i = arrNumber.length - 1; i >= 0; i--) {
        if (arrNumber[arrNumber.length - 1] === arrNumber[i]) {
            count++;
        }
    }
    return count;
}

function mostFrequentLargestNumbers(arrNumber) {
    let listSort = sorting(arrNumber);
    let countHighest = getTotal(listSort);
    if (countHighest === 0) {
        return [];
    } else {
        return `angka paling besar adalah ${
            arrNumber[arrNumber.length - 1]
        } dan jumlah kemunculan sebanyak ${countHighest} kali`;
    }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
