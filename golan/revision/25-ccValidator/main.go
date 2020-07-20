package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func inputInt(display string) int {
	var result int
	for {
		fmt.Printf(display)
		reader := bufio.NewReader(os.Stdin)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Invalid Input")
			continue
		}
		input = strings.TrimSpace(input)
		result, err = strconv.Atoi(input)
		if err != nil {
			fmt.Println("Invalid Input, number only")
			continue
		}
		if result < 1 {
			fmt.Println("Number must be more than 0")
			continue
		} else {
			return result
		}
	}
}

func main() {
	
}