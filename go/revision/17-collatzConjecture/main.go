package main

import (
	"fmt"
	"os"
	"bufio"
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
		} else {
			break
		}
	}
	return result
}

func collatz(n int) int {
	var step int
	for {
		switch {
		case n == 1:
			fmt.Println("done")
			return step
		case n % 2 == 0:
			fmt.Println(n)
			n /= 2
			step ++
		default:
			fmt.Println(n)
			n = (n * 3) + 1
			step ++
		}
	}
}

func main() {
	n := inputInt("Input a integer: ")
	fmt.Printf("Total step: %d\n", collatz(n))
	
}