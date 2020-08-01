package main
 
import (
	"fmt"
	"math"
)
 
// Find the largest number in the array
func findMax(arr []int) (max, index int) {
	max = math.MinInt32
	index = -1
	for i, v := range arr {
		if v > max {
			max = v
			index = i
		}
	}
	return
}
 
func maxSubArray(arr []int) (maxSum int, subArr []int) {
	 // Air check
	if len(arr) == 0 {
		return
	}
	 // Find the largest subarray by containing positive numbers
	maxSum, begin, end, sum := 0, 0, 0, 0
	for i, v := range arr {
		sum += v
		if sum <= 0 {
			sum = 0
			begin = i + 1
		}
		if sum > maxSum {
			maxSum = sum
			end = i
		}
	}
	 // Returns the largest number if all are non-positive
	if maxSum == 0 {
		max, index := findMax(arr)
		maxSum = max
		begin = index
		end = index
	}
	return maxSum, arr[begin : end+1]
}
 
func main() {
	arr := []int{13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7}
	maxSum, subArr := maxSubArray(arr)
	fmt.Println(maxSum)
	fmt.Println(subArr)
}