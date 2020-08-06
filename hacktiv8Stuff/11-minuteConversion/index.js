let timeInSecond = 61;
let timeInMinute = 0;
while (timeInSecond >= 60) {
    timeInSecond -= 60;
    timeInMinute += 1;
}
console.log(`${timeInMinute}:${timeInSecond}`)