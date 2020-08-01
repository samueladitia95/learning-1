package main

import (
	"bufio"
	"os"
	"strings"
	"strconv"
	"fmt"
)

func input(str string) int {
	var result int
	for {
		fmt.Printf(str)
		reader := bufio.NewReader(os.Stdin)
		userInput, err := reader.ReadString('\n')
		if err != nil {
			panic(err.Error())
		}
		userInput = strings.TrimSpace(userInput)

		result, err = strconv.Atoi(userInput)
		if err != nil {
			fmt.Println("Not a number, enter again")
			continue
		} else if result < 0 {
			fmt.Println("Number must be more than zero")
			continue
		}
		break
	}
	return result
}

func toBase2 (integer int) string {
	var result string
	for {
		if integer == 1 {
			result = "1" + result
			break
		} else if integer % 2 == 0 {
			result = "0" + result
			integer /= 2
		} else {
			result = "1" + result
			integer = (integer - 1) / 2
		}
	}
	return result
}

func toBase10(str string) int {
	var result int
	power := 1
	for i := (len(str) - 1); i >= 0; i-- {
		if string(str[i]) == "1" {
			result += power
		}
		power *= 2
	}
	return result
}

func xor(A, B bool) bool {
	return (A && !B) || (!A && B)
}

func toBool(A string) bool {
	var result bool
	if A == "1" {
		result = true
	} else {
		result = false
	}
	return result
}

func padding(A, B string) (string, string) {
	var length int
	if len(A) > len(B) {
		length = len(A) + 1
	} else {
		length = len(B) + 1
	}

	A = strings.Repeat("0", length - len(A)) + A
	B = strings.Repeat("0", length - len(B)) + B

	return A, B
}

func fullAdder(b1, b2 string) string {
	var result string
	carry := false
	for i := (len(b1) - 1); i >= 0; i-- {
		operand1 := toBool(string(b1[i]))
		operand2 := toBool(string(b2[i]))
		var xorResult bool
		if xor(operand1, operand2) {
			xorResult = true
		} else {toBool(string(b2[i]))
			xorResult = false
		}

		if xor(xorResult, carry) {
			result = "1" + result
		} else {
			result = "0" + result
		}

		if (operand1 && operand2) || (xorResult && carry) {
			carry = true
		} else {
			carry = false
		}
	}
	return result
}

func main() {
	num1 := input("Enter first number:  ")
	num2 := input("Enter second number: ")

	binary1, binary2 := padding(toBase2(num1), toBase2(num2))
	fmt.Println(strings.Repeat("-", 32))

	fmt.Println(binary1)
	fmt.Println(binary2)
	fmt.Println(strings.Repeat("-", len(binary1) + 1) + "+")

	result := fullAdder(binary1, binary2)
	fmt.Println(result)
	fmt.Printf("the result is: %v\n", toBase10(result))
}