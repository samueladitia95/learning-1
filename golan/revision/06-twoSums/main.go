package main

import (
	"fmt"
	"math/rand"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func input(str string) int {
	var userInputInt int
	var err error
	for {
		reader := bufio.NewReader(os.Stdin)
		fmt.Printf(str + ": ")
		userInput, err1 := reader.ReadString('\n')
		if err1 != nil {
			panic(err.Error())
		}
		userInput = strings.TrimSpace(userInput)
		userInputInt, err = strconv.Atoi(userInput)
		if err != nil {
			fmt.Println("Invalid input, enter a whole number")
			continue
		}
		if userInputInt < 1 {
			fmt.Println("Target must more than one")
			continue
		}
		break
	}
	return userInputInt
}

func inputStr(str string) string {
	fmt.Printf(str + ": ")
	reader := bufio.NewReader(os.Stdin)
	input, err := reader.ReadString('\n')
	if err != nil {
		panic(err.Error())
	}
	return strings.TrimSpace(input)
}

func generateSlice(length, maxNum int) []int {
	result :=  make([]int, length)
	for i := 0; i < length; i++ {
		result[i] = rand.Intn(maxNum - 1) + 1
	}
	return result
}

func findSlice(slice []int, target int) ([]int, []int) {
	for i := 0; i < len(slice); i++ {
		for j := i; j < len(slice); j++ {
			if slice[i] + slice[j] == target {
				// ensure index solution is not the same
				if i == j {
					continue
				}
				return []int {slice[i], slice[j]}, []int {i, j}
			}
		}
	}
	return []int {0, 0}, []int {0, 0}
}

func main() {
	OUTER:
	for {
		slice := generateSlice(input("Length of the array"), 
			input("Maximum number in each element"))
		fmt.Println(slice)
		target := input("target Number")
		solution, solutionIndex := findSlice(slice, target)
		if solution[0] == 0 && solution[1] == 0 {
			fmt.Println("Solution not avaiable")
		} else {
			fmt.Printf("Number 1: %v, Number 2: %v\n", solution[0], solution[1])
			fmt.Printf("Index 1: %v, Index 2: %v\n", solutionIndex[0], solutionIndex[1])
		}
		
		for {
			repeat := strings.ToUpper(inputStr("Repeat[Y/N]"))
			if repeat == "Y" {
				continue OUTER
			} else if repeat == "N" {
				break
			} else {
				fmt.Println("Wrong input, enter Y(yes) or N(no)")
				continue
			}
		}
		break
	}
}