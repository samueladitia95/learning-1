package main

import (
	"fmt"
	"time"
	"bufio"
	"os"
	"strings"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func main() {
	fmt.Printf("enter any strings of letters: ")
	algo := input()
	movement := 4
	printed := ""
	for i := (len(algo) - 1); i >= 0; i-- {
		printed = string(algo[i]) + printed
		fmt.Println(printed)
		time.Sleep(500 * time.Millisecond)
	}

	for i := 0; i < movement; i++ {
		printed = " " + printed
		fmt.Println(printed)
		time.Sleep(500 * time.Millisecond)
	}

	for i := 1; i <= len(algo); i++ {
		printed = " " + printed
		fmt.Println(printed[:(len(printed) - i)])
		time.Sleep(500 * time.Millisecond)
	}
}