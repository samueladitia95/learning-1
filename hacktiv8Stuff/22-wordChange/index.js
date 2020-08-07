let kata = "I love Javascript";
let vocal = "aiueoAIUEO";
let kataTransform = "";

for (let i = 0; i < kata.length; i++) {
    let flag = false;
    for (let j = 0; j < vocal.length; j++) {
        if (kata[i] === vocal[j]) {
            flag = true   
        }
    }

    kataTransform += (flag) ? "$" : kata[i]
}

console.log(kataTransform);