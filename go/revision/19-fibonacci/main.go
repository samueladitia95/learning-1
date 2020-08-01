package main

import( 
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
		} else {
			break
		}
	}
	return result
}

func fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	return fibonacci(n - 1) + fibonacci(n - 2)
}

func main() {
	n := inputInt("Enter a number: ")
	for i := 0; i <= n; i++ {
		fmt.Printf("%v ", fibonacci(i))
	}
	fmt.Printf("\n")
}