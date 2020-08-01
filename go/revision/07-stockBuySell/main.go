package main

import(
	"fmt"
	"math/rand"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func inputInt(str string) int {
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
		if userInputInt < 0 {
			fmt.Println("Target must more than one")
			continue
		}
		break
	}
	return userInputInt
}

func sliceGenerator(length, maxValue int) []int {
	result := make([]int, length)
	for i := 0; i < length; i++ {
		result[i] = rand.Intn(maxValue) + 1
	}
	return result
}

func highestProfit(slice []int) (int, []int, []int) {
	var result int
	resultDays := make([]int, 2)
	resultValue := make([]int, 2)
	for i := 0; i < len(slice); i++ {
		for j := i; j < len(slice); j++ {
			if slice[j] - slice[i] > result {
				result = slice[j] - slice[i]
				resultDays[0] = i + 1
				resultDays[1] = j + 1
				resultValue[0] = slice[i]
				resultValue[1] = slice[j]
			}
		}
	}
	return result, resultDays, resultValue
}

func main() {
	length := inputInt("How many days")
	maxValue := inputInt("Maximum value each day")
	stockPrice := sliceGenerator(length, maxValue)
	fmt.Println(strings.Repeat("-", 25))
	profit, profitDays, value := highestProfit(stockPrice)
	fmt.Println(stockPrice)
	fmt.Printf("Maximum profit is %v Unit, bougth in day:%v for %v, and sold in day:%v for %v\n", 
		profit, profitDays[0], value[0], profitDays[1], value[1])
}