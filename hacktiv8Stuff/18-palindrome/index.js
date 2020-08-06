let kata = "kasur rusak";
let reversed = "";

for (let i = 0; i < kata.length; i++) {
    reversed = kata[i] + reversed;
}

console.log(kata === reversed);