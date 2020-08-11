function graduate(name, score, absents) {
    // check valid name
    if (typeof name !== "string") {
        return "Invalid, not a valid name!";
    }

    // check valid score
    if (score < 0 && score > 100) {
        return "Invalid, not a valid score!";
    }

    // check valid absents
    if (absents < 0) {
        return "Invalid, not a valid absents number";
    }

    // check graduation status
    if (score > 70 && absents < 5) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

let name = "John Smith";
let score = 89;
let absents = 2;
let graduationStatus = graduate(name, score, absents);

console.log(
    `${name} with a score of ${score} and total absents of ${absents} is declared: ${graduationStatus}`
);
