function toRoman(num) {
    if (num === 0) {
        return "";
    } else {
        if (num >= 1000) {
            return `M${toRoman(num - 1000)}`;
        } else if (num >= 900) {
            return `DM${toRoman(num - 900)}`;
        } else if (num >= 500) {
            return `D${toRoman(num - 500)}`;
        } else if (num >= 400) {
            return `CD${toRoman(num - 400)}`;
        } else if (num >= 100) {
            return `C${toRoman(num - 100)}`;
        } else if (num >= 90) {
            return `LC${toRoman(num - 90)}`;
        } else if (num >= 50) {
            return `L${toRoman(num - 50)}`;
        } else if (num >= 40) {
            return `XL${toRoman(num - 40)}`;
        } else if (num >= 10) {
            return `X${toRoman(num - 10)}`;
        } else if (num >= 9) {
            return `VX${toRoman(num - 9)}`;
        } else if (num >= 5) {
            return `V${toRoman(num - 5)}`;
        } else if (num >= 4) {
            return `IV${toRoman(num - 4)}`;
        } else if (num >= 1) {
            return `I${toRoman(num - 1)}`;
        }
    }
}

console.log(toRoman(2476))


function romans(num) {
	//This is the key
	var numberToRoman = [
		{ number: 1000, roman: "M" },
		{ number: 900, roman: "CM" },
		{ number: 500, roman: "D" },
		{ number: 400, roman: "CD" },
		{ number: 100, roman: "C" },
		{ number: 90, roman: "XC" },
		{ number: 50, roman: "L" },
		{ number: 40, roman: "XL" },
		{ number: 10, roman: "X" },
		{ number: 9, roman: "IX" },
		{ number: 5, roman: "V" },
		{ number: 4, roman: "IV" },
		{ number: 1, roman: "I" },
	];

	for (let i = 0; i < numberToRoman.length; i++) {
		if (num < 1) return "";
		else if (num >= numberToRoman[i].number) {
			return numberToRoman[i].roman + romans(num - numberToRoman[i].number);
		}
	}
}