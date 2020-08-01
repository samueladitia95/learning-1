package main

import (
	"fmt"
	"math/rand"
)

func isDuplicate(slice []int) bool {
	result := false
	for i := 0; i < len(slice); i++ {
		for j := i + 1; j < len(slice); j++ {
			if slice[i] == slice[j] {
				result = true
				break
			}
		}
	}
	return result
}

func generateSlice(length, maxNum int) []int {
	result :=  make([]int, length)
	for i := 0; i < length; i++ {
		result[i] = rand.Intn(maxNum - 1) + 1
	}
	return result
}

func main() {
	slice := generateSlice(10, 1000)
	fmt.Println(slice)
	result := isDuplicate(slice)
	if result {
		fmt.Println("There is duplicate in the slice")
	} else {
		fmt.Println("No duplicate in the slice")
	}
}