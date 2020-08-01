package main

import (
	"fmt"
)

func reverseSlice(slice []int) {
	var temp int
	for i := 0; i < len(slice)/2; i++ {
		temp = slice[i]
		slice[i] = slice[(len(slice) - 1) - i]
		slice[(len(slice) - 1) - i] = temp
	}
}

func main() {
	A := []int {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	reverseSlice(A)
	fmt.Println(A)
}