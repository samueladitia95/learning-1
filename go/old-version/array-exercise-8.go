package main

import (
	"fmt"
)

func sliceMultiplier(slice1, slice2 [][]int) [][]int {
	result := [][]int {make([]int, 2), make([]int, 2)}
	for i := 0; i < len(slice1); i++ {
		for j := 0; j < len(slice2[0]); j++ {
			for k := 0; k < len(slice2); k++ {
				result[i][j] += slice1[i][k] * slice2[k][j]
			}
		}
	}
	return result
}

func main() {
	sliceA := [][]int {[]int{1, 2, 3}, []int{4, 5, 6}}
	sliceB := [][]int {[]int{7, 8}, []int{9, 10}, []int{11, 12}}
	sliceC := sliceMultiplier(sliceA, sliceB)
	fmt.Println(sliceC)
}