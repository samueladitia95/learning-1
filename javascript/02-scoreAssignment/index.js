function scoreAssignment(score) {
    if (score < 0 && score > 100) {
        return "Invalid input, score range from 0 to 100"
    }
    switch (true) {
        case (score < 35):
            return "E";
        case (score < 50):
            return "D";
        case (score < 65):
            return "C";
        case (score < 80):
            return "B";
        case (score <= 100):
            return "A";
    }
    return "Invalid input, not a number"
}

console.log(scoreAssignment("asdadada"));