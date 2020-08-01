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
			fmt.Println("Invalid input")
			continue
		}
		input = strings.TrimSpace(input)
		return input
	}
}

// Vowels type struct
type Vowels struct {
	A int
	I int
	U int
	E int
	O int
}

func countVowels(str string) (int, Vowels) {
	str = strings.ToLower(str)
	var total int
	var vowels Vowels
	for _ , char := range(str) {
		switch string(char) {
		case "a":
			total ++
			vowels.A ++
		case "i":
			total ++
			vowels.I ++
		case "u":
			total ++
			vowels.U ++
		case "e":
			total ++
			vowels.E ++
		case "o":
			total ++
			vowels.O ++
		}
	}
	return total, vowels
}

func main() {
	str := inputStr("Enter any strings of character: ")
	total , vowels := countVowels(str)
	fmt.Printf("Total vowels: %d, with: \n\tA: %d\n \tI: %d\n \tU: %d\n \tE: %d\n \tO: %d\n", total, vowels.A, vowels.I, vowels.U, vowels.E, vowels.O)
}