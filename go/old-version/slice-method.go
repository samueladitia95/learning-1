package main

import (
	"fmt"
)

func main() {
	var a []int
	a = append(a, 1, 2, 3)
	fmt.Println(a)

	// b := []int {10, 20, 30, 40, 50, 60}
	// for _ , value := range(b) {
	// 	fmt.Println(value)
	// }

	c := make([]int, 10)
	for index := range(c) {
		c[index] = 1 << uint(index)
	}
	fmt.Println(c)
	for _ , value := range(c) {
		fmt.Println(value)
	}

}