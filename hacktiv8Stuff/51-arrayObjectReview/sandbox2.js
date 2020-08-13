function participantsSummary(data) {
    if (data.length === 0) {
        return "No Participant";
    }
    let result = {};
    for (let i = 0; i < data.length; i++) {
        if (!(data[i][1] in result)) {
            result[data[i][1]] = 0
        }
        
        result[data[i][1]]++;
    }
    let resultString = "";
    for (item in result) {
        resultString += `${result[item]}: ${item}\n`
    }
    return resultString;
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
