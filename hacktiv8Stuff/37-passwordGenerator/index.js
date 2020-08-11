function changeVocals (str) {
    let vocal = "aiueoAIUEO";
    let afterVocal = "bjvfpBJVFP";
    let output = ""
    for (let i = 0; i < str.length; i++) {
        let flag = false
        let index = 0
        for (let j = 0; j < vocal.length; j++) {
            if (str[i] === vocal[j]) {
                flag = true;
                index = j;
                break;
            }
        }
        output += (flag) ? afterVocal[index] : str[i];
    }
    return output;
}
  
function reverseWord (str) {
    let output = ""
    for (let i = 0; i < str.length; i++) {
        output = str[i] + output;
    }
    return output
  }
  
function setLowerUpperCase (str) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let output = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < lowerCase.length; j++) {
            if (str[i] === lowerCase[j]) {
                output += upperCase[j];
                break;
            } else if (str[i] === upperCase[j]){
                output += lowerCase[j];
                break;
            } else if (str[i] === " ") {
                output += str[i];
                break
            }
        }
    }
    return output;
}
  
function removeSpaces (str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            continue;
        } else {
            output += str[i];
        }
    }
    return output;
}
  
function passwordGenerator (name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

