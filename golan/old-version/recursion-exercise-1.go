package main

import (
	"fmt"
)

func recursiveFunction(number int) {
	fmt.Printf("%v, ", number)
	if number == 1 {
		return
	}
	recursiveFunction(number - 1)
}

func main() {
	recursiveFunction(50)
}