package main

import (
	"fmt"
)

func recursiveTable(A , B int) {
	if B == 10 {
		fmt.Printf("%v * %v = %v\n", A, B, A*B)
		return
	} else {
		result := A * B
		fmt.Printf("%v * %v = %v\n", A, B, result)
		recursiveTable(A, B + 1)
		return
	}
}

func main() {
	recursiveTable(3, 1)
}