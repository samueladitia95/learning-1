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
			break
		}
	}
	return result
}

func primeFactors(n int) []int {
	var pfs []int

	// Get the number of 2s that divide n
	for n % 2 == 0 {
		pfs = append(pfs, 2)
		n = n / 2
	}

	// n must be odd at this point. so we can skip one element (note i = i + 2)
	for i := 3; i * i <= n; i = i + 2 {
		// while i divides n, append i and divide n
		for n % i == 0 {
			pfs = append(pfs, i)
			n = n / i
		}
	}

	// This condition is to handle the case when n is a prime number greater than 2
	if n > 2 {
		pfs = append(pfs, n)
	}

	return pfs
}

func main() {
	n := inputInt("Input a positive number: ")
	result := primeFactors(n)

	fmt.Printf("%v", result[0])
	for i, v := range(result) {
		if i == 0 {
			continue
		}
		fmt.Printf(" X %v", v)
	}
	fmt.Printf("\n")
}