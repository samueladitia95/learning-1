package main

import (
	"bufio"
	"os"
	"strings"
	"fmt"
)

// standart input function
func input() string {
	reader := bufio.NewReader(os.Stdin)
	input, err := reader.ReadString('\n')
	if err != nil {
		panic(err.Error())
	}
	// return a string with removed whitespace 
	return strings.TrimSpace(input)
}

func toBase10(str string) int {
	var result int
	power := 1
	// looping from right side, from least value binary to most value
	for i := (len(str) - 1); i >= 0; i-- {
		if string(str[i]) == "1" {
			result += power
		}
		// each loop will double the power,
		// no matter if the binary 1 or 0
		power *= 2
	}
	return result
}

func main() {
	OUTER:
	for {
		fmt.Printf("Enter a binary number: ")
		userInput := input()
		// check whether the input is really a binary
		// loop through string index, must be 1 or 0
		for i := 0; i < len(userInput); i++ {
			if string(userInput[i]) != "0" && string(userInput[i]) != "1" {
				fmt.Println("Enter again, not a binary number!")
				continue OUTER
			}
		}

		// convert input to decimal
		result := toBase10(userInput)
		fmt.Printf("Result: %v\n", result)

		// loop for restart the program
		for {
			fmt.Printf("Repeat[Y/N]: ")
			repeat := strings.ToUpper(input())
			// if yes, then loop start at OUTER
			if repeat == "Y" {
				continue OUTER
			} else if repeat == "N" {
				break
			// for when input is wrong
			} else {
				fmt.Println("Wrong input, enter Y(yes) or N(no")
				continue
			}
		}
		break
	}
}