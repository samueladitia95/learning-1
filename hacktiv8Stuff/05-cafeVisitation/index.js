var name = "John";
var age = 19;
var money = 678900;

if (!(name)) {
    console.log("Anda tidak boleh masuk!");
} else if (age < 17) {
    console.log("Hanya boleh memesan juice");
    if (money < 50000) {
        console.log("Tidak memiliki cukup uang");
    } else {
        money -= 50000;
        console.log("Anda bisa minum. Sisa uang anda: " + money);
    }
} else {
    console.log("Hanya boleh memesan anggur");
    if (money < 300000) {
        console.log("Tidak memiliki cukup uang");
    } else {
        money -= 300000;
        console.log("Anda bisa minum. Sisa uang anda: " + money);
    }
}