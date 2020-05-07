package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func strToFloat(words string) float64 {
	convertedFloat, _ := strconv.ParseFloat(words, 64)
	return convertedFloat
}

func floatToStr(number float64) string {
	return strconv.FormatFloat(number, 'f', -1, 64)
}

func avarageScore(scoreSlice []float64) float64 {
	var avarage float64
	for _ , value := range(scoreSlice) {
		avarage += value
	}
	avarage = avarage / float64(len(scoreSlice))
	return avarage
}

func intToStr(words int) string {
	convertedStr:= strconv.Itoa(words)
	return convertedStr
}

func scoreChecker(scoreSlice []float64) {
	avarage := avarageScore(scoreSlice)
	allPassed := true
	for i := 0; i < len(scoreSlice); i++ {
		if scoreSlice[i] < avarage {
			fmt.Println("person " + intToStr(i + 1) + " failed. with score of " + floatToStr(scoreSlice[i]))
			allPassed = false
		}
	}
	if allPassed {
		fmt.Println("congrats, all passed")
	}
}

func main() {
	resultSlice := make([]float64, 0, 5)
	fmt.Println("enter 5 score")
	for i := 0; i < 5; i++ {
		resultSlice = append(resultSlice, strToFloat(input()))
	}

	fmt.Println("the avarage result is " + floatToStr(avarageScore(resultSlice)))
	scoreChecker(resultSlice)
}