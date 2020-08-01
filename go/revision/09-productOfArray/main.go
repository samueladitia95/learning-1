package main

import (
	"fmt"
	"math/rand"
)

func generateSlice(length, maxNum int) []int {
	result :=  make([]int, length)
	for i := 0; i < length; i++ {
		result[i] = rand.Intn(maxNum - 1) + 1
	}
	return result
}

func productExceptSelf(slice []int) []int {
	result := make([]int, 0)
	for i := 0; i < len(slice); i++ {
		sumOfMultiplication := 1
		for j := 0; j < len(slice); j++ {
			if j == i {
				continue
			} else {
				sumOfMultiplication *= slice[j]
			}
		}
		result = append(result, sumOfMultiplication)
	}
	return result
}

func main() {
	input := generateSlice(10, 5)
	fmt.Println(input)
	result := productExceptSelf(input)
	fmt.Println(result)
}