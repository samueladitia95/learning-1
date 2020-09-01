let input1 =
    "hello my name is john wick, and i love my dog so much that i hurt any one that hurt him!";
let input2 = "him";
let status = false;

for (let i = 0; i < input1.length; i++) {
    if (input1.substring(i, i + input2.length) === input2) {
        console.log(i);
        status = true;
    }
}

if (!status) {
    console.log(-1);
}
