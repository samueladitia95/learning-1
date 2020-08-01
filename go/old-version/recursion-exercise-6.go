package main

import (
	"fmt"
)

func toBase2(number int) string {
	var result string
	if number == 1 {
		result = result + "1" 
		return result
	} else if number % 2 == 0 {
		result = result + "0"
		toBase2(number / 2)
		return result
	} else {
		result = result + "1"
		toBase2((number - 1) / 2)
		return result
	}
}

func main() {
	fmt.Println(toBase2(56))
}