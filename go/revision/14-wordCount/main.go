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
		input = strings.TrimSpace(input)
		return input
	}
}

func countWords(str string) int {
	stringSlice := strings.Split(str, " ")
	return len(stringSlice)
}

func main() {
	str := inputStr("Enter any strings of characters: ")
	wordCount := countWords(str)
	fmt.Printf("Word Counts: %d\n", wordCount)
}