package main

import (
	"fmt"
)

func recursiveSum(A, B int) int {
	C := 0
	if A == B + 1 {
		return C
	}
	C = A + recursiveSum(A + 1, B)
	return C
}

func main() {
	fmt.Println(recursiveSum(3, 7))
}