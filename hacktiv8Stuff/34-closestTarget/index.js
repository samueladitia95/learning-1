function targetTerdekat(arr) {
    let startIndex = 0;
    let targetIndexFoward = 0;
    let targetIndexBackward = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "o") {
            startIndex = i + 1;
        } else if (arr[i] === "x" && startIndex) {
            targetIndexFoward = i + 1;
            break;
        }
    }

    for (let i = startIndex - 1; i >= 0; i--) {
        if (arr[i] === "x") {
            targetIndexBackward = i + 1;
            break;
        }
    }

    if (!targetIndexFoward && !targetIndexBackward) {
        return 0;
    } else if (!targetIndexFoward) {
        return startIndex - targetIndexBackward;
    } else if (!targetIndexBackward) {
        return targetIndexFoward - startIndex;
    } else {
        let distanceFoward = targetIndexFoward - startIndex;
        let distanceBackward = startIndex - targetIndexBackward;
        return (distanceFoward > distanceBackward) ? distanceBackward : distanceFoward
    }
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2