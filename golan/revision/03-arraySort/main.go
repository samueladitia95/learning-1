package main

import (
	"fmt"
)

func sortSlice(slice []int) {
	for i := 0; i < len(slice); i++ {
		for j := i; j < len(slice); j++ {
			if slice[i] > slice[j] {
				slice[i], slice[j] = slice[j], slice[i]
			}
		}
	}
}

func main() {
	slice := []int {54, 76, 91, 67, 100, 2, 45, 54, 100, 3, 91}
	sortSlice(slice)
	fmt.Println(slice)
}