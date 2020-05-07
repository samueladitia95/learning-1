package main

import (
	"fmt"
)

func reverseSlice(slice []int) {
	for i := 0; i < len(slice) / 2; i++ {
		slice[i], slice[(len(slice) - 1) - i] = slice[(len(slice) - 1) - i], slice[i]
	}
}

func main() {
	aSlice := []int {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}
	reverseSlice(aSlice)
	fmt.Println(aSlice)
}