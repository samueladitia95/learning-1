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

func compare(n1, n2 int) string {
	if n1 == n2 {
		return "=+="
	} else if n1 > n2 {
		return "+>"
	} else {
		return "<+"
	}
}

func main() {
	var n1, n2 int
	for {
		fmt.Printf("enter first number: ")
		n1 = strToInt(input())
		fmt.Printf("enter second number: ")
		n2 = strToInt(input())
		if n1 >= 0 && n2 >= 0 {
			break
		} else {
			fmt.Println("don't enter a negative number")
		}
	}

	operator := compare(n1, n2)
	fmt.Println(intToStr(n1) + " " + operator + " " + intToStr(n2))
} 