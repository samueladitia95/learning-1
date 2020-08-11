let angka = 7991829356169341;
let angkaString = angka.toString();
let top = Number(angkaString.substring(0, 2));

for (let i = 0; i < angkaString.length - 2; i++) {
    let topTemp = Number(angkaString.substring(i + 1, i + 3));
    if (topTemp > top) {
        top = topTemp;
    }
}
console.log(top);
