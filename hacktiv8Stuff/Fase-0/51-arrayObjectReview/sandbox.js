function participantsSummary(data) {
    if (data.length === 0) {
        return "No Participant";
    }
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let isFound = true;
        for (let j = 0; j < result.length; j++) {
            if (data[i][1] === result[j]) {
                isFound = false;
            }
        }
        if (isFound) {
            result.push(data[i][1]);
        }
    }
    return result;
}
// Test cases
console.log(
    participantsSummary([
        ["Dimitri", "Russia"],
        ["Heihachi", "Japan"],
        ["Sergei", "Russia"],
        ["Kazuya", "Japan"],
        ["Hwoarang", "South Korea"],
        ["Jin", "Japan"],
    ])
);
// ['Rusia', 'Japan', 'South Korea']
console.log(
    participantsSummary([
        ["Suzuka", "Japan"],
        ["Steve", "United Kingdom"],
        ["Paul", "USA"],
    ])
);
// ['Japan', 'United Kingdom', 'USA']
console.log(participantsSummary([]));
// No participants
