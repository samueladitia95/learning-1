package main

import (
	"fmt"
)

func twoSum(nums []int, target int) []int {
	var total []int
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if (nums[i] + nums[j]) == target {
				total = []int{nums[i], nums[j]}
				return total
			}
		}
	}
	return total
}

func main() {
	fmt.Println(twoSum([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}, 13))
}
