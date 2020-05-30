package main

import (
	"fmt"
	"os"
	"bufio"
	"strings"
)

func inputStr(display string) string {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(display)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Print("Input Error, Input again")
			continue
		}
		input = strings.TrimSpace(input)
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

func main() {
	str := inputStr("Enter any string of character: ")
	fmt.Println("Revesed Strings: " + reverseStr(str))
}