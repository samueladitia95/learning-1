function splitting(str) {
    // split str into array
    let split = [];
    let heroAndType = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ",") {
            split.push(heroAndType);
            heroAndType = "";
        } else {
            heroAndType += str[i]
        }
    }
    split.push(heroAndType);
    
    // split hero and type
    let output = []
    for (let i = 0; i < split.length; i++) {
        let hero = "";
        let type = "";
        let flag = false
        for (let j = 0; j < split[i].length; j++) {
            if (split[i][j] === "-") {
                flag = true;
                continue
            }

            (flag) ? type += split[i][j] : hero += split[i][j];
        }
        output.push([hero, type]);
    }

    return output;
}
  
function meleeRangedGrouping(str) {
    let output = [[], []];
    let splited = splitting(str);
    
    for (let i = 0; i < splited.length; i++) {
        if (splited[i][1] === "Ranged") {
            output[0].push(splited[i][0]);
        } else {
            output[1].push(splited[i][0]);
        }
    }
    return output;
}
  
// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
console.log(meleeRangedGrouping('')); // []