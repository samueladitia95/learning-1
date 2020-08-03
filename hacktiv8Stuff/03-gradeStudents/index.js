function gradeStudents(score) {
    let grade;
    // check if it is a number
    if (typeof score !== "number") {
        return "Invalid, Not a number"
    }

    // check score between 0 and 100
    if (score < 0 || score > 100) {
        return "Invalid, Score is between 0 and 100";
    }
    
    // check grade
    if (score < 35) {
        return "E";
    } else if (score < 50) {
        return "D";
    } else if (score < 65) {
        return "C";
    } else if (score < 80) {
        return "B";
    } else {
        return "A";
    }
}

function gradeStudentsRev(score) {
    let grade;
    // check if it is a number
    if (typeof score !== "number") {
        return "Invalid, Not a number"
    }

    // check score between 0 and 100
    if (score < 0 || score > 100) {
        return "Invalid, Score is between 0 and 100";
    }
    
    // check grade
    switch (true) {
        case score < 35:
            return "E";
        case score < 50:
            return "D";
        case score < 65:
            return "C";
        case score < 80:
            return "B";
        default:
            return "A";

    }
}

console.log(gradeStudentsRev("string"))