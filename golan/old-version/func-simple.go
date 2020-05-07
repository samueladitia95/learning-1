package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func double(num1, num2 int) int {
	return (2 * (num1 + num2))
}

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _:= reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
} 

func strToInt(number string) int {
	convertedStr, _ := strconv.Atoi(number)
	return convertedStr
}

func main() {
	fmt.Printf("enter first number: ")
	num1Str := input()
	num1 := strToInt(num1Str)
	
	fmt. Printf("enter second number: ")
	num2str := input()
	num2 := strToInt(num2str)

	fmt.Printf("result: ")
	fmt.Println(double(num1, num2))
}