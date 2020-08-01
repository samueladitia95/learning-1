package main

import (
	"bufio"
	"os"
	"strings"
	"fmt"
	"strconv"
)

// input value from console
func input() string {
	reader := bufio.NewReader(os.Stdin)
	input, err := reader.ReadString('\n')
	if err != nil {
		panic(err.Error())
	}
	// remove any whitespace
	return strings.TrimSpace(input)
}

// from integer to binary in string data type
func toBase2 (integer int) string {
	var result string
	for {
		// i dont know why loop stop if its end in 2
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

func main() {
	var userInput int
	var err error
	OUTER:
	for {
		fmt.Printf("Enter a decimal whole number: ")
		userInput, err = strconv.Atoi(input())
		// error checking if input is a integer or not
		if err != nil {
			// if a error exist, then err is not going to be nil
			fmt.Println("Must enter a valid number")
			continue
		} else {
			// making sure input is more than zero
			if userInput < 0 {
				fmt.Println("Number must be more than zero")
				continue
			} else {
				// the converted result
				fmt.Printf("Converted number: %v\n",toBase2(userInput))
				// for restart the program
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
				// second break, because first break only excape first loop
				break
			}
		}
	}
}