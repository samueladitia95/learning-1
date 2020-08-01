package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func yOrN(display string) string {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(display)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Invalid input")
			continue
		}
		input = strings.TrimSpace(input)
		input = strings.ToLower(input)
		if !(input == "y" || input == "n") {
			fmt.Println("Only answer with Y or N")
			continue
		}
		return input
	}
}

func checkPrime(n int) bool {
	result := true
	for i := 2; i < n; i++ {
		if n % i == 0 {
			result = false
		}
	}
	return result
}

func main() {
	for i := 2; ;i++ {
		result := checkPrime(i)
		if result {
			answers := yOrN(fmt.Sprintf("is %v the Prime you want? ", i))
			if answers == "y" {
				fmt.Printf("The Prime you choose is %v\n", i)
				break
			}
		}
	}
}