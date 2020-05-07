package main

import (
	"fmt"
)

func sliceAdder2d(slice1, slice2 [][]int) [][]int {
	result := [][]int {make([]int, 3), make([]int, 3)}
	for i := 0; i < len(slice1); i++ {
		for j := 0; j < len(slice1[i]); j++ {
			result[i][j] = slice1[i][j] + slice2[i][j]
		}
	}
	return result
}

func main() {
	sliceA := [][]int {[]int {1, 2, 3}, []int {4, 5, 6}}
	sliceB := [][]int {[]int {10, 20, 30}, []int {40, 50, 60}}
	sliceC := sliceAdder2d(sliceA, sliceB)
	fmt.Println(sliceC)
}