package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func strToInt(number string) int {
	convertedInt, _ := strconv.Atoi(number)
	return convertedInt
}

func intToStr(words int) string {
	convertedStr:= strconv.Itoa(words)
	return convertedStr
}

func toBase2(decimalNum int) string {
	var binary string
	for {
		if decimalNum == 1 {
			binary ="1" + binary
			break
		}
		if decimalNum % 2 == 1 {
			binary = "1" + binary
			decimalNum = (decimalNum -1) / 2
			continue
		} else if decimalNum % 2 == 0 {
			binary = "0" + binary
			decimalNum /= 2
			continue
		}
	}
	return binary
}

func toBase10(binary string) int {
	decimal := 0
	power := 1

	for i := (len(binary) - 1); i >= 0; i-- {
		if string(binary[i]) == string('1') {
			decimal += power
		}
		power *= 2
	}
	return decimal
}

func xor(A, B bool) bool {
	return (A || B) && ((!A) || (!B))
}

func toBool(binary string) bool {
	if binary == "1" {
		return true
	} else {
		return false
	}
}

func padding(binary string, padNum int) string {
	zerotoAdd := padNum - len(binary)
	for i := 0; i < zerotoAdd; i++ {
		binary = "0" + binary
	}
	return binary
}

func halfAdder(binary1, binary2 string) string {
	var result string
	var carry bool
	for i:= (len(binary1) - 1); i >= 0; i-- {
		operand1 := toBool(string(binary1[i]))
		operand2 := toBool(string(binary2[i]))

		// xor operator
		var xorResult bool
		if xor(operand1, operand2) {
			xorResult = true
		} else {
			xorResult = false
		}

		// writing to result with previous carry
		if xor(xorResult, carry) {
			result = "1" + result
		} else {
			result = "0" + result
		}

		// and operator (carry)
		if operand1 && operand2 {
			carry = true
		} else {
			carry = false
		}
	}
	return result
}

func main() {
	// user input
	fmt.Printf("enter first number: ")
	n1 := toBase2(strToInt(input()))
	fmt.Printf("enter second number: ")
	n2 := toBase2(strToInt(input()))

	// number of digit
	var padNum int 
	for {
		fmt.Printf("enter binary length: ")
		padNum = strToInt(input())
		if padNum > len(n1) && padNum > len(n2) {
			break
		} else {
			fmt.Println("not enough digit, add more!")
		}
	}

	// padding input
	n1padded := padding(n1, padNum)
	n2padded := padding(n2, padNum)
	
	//result
	resultBinary := halfAdder(n1padded, n2padded)
	fmt.Println("\n" + n1padded)
	fmt.Println(n2padded)
	fmt.Println("-----------------------+")
	fmt.Println(resultBinary)
	fmt.Println("the result is: " + intToStr(toBase10(resultBinary)))
}