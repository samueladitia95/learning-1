package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func inputStr(display string) string {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(display)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Invalid Input")
			continue
		}
		input =  strings.TrimSpace(input)
		return input
	}
}

func reverseStr(str string) string {
	var reversed string
	for _ , char := range(str) {
		reversed = string(char) + reversed
	}
	return strings.ToLower(reversed)
}

func checkPalindrome (str string) bool {
	return str == reverseStr(str)
}

func main() {
	str := inputStr("Enter any strings of character: ")
	check := checkPalindrome(str)
	if check {
		fmt.Println("String is palindrome")
	} else {
		fmt.Println("String is not palindrome")
	}
}