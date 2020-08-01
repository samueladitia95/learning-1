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

func toCelcius(temp float64, unit string) float64 {
	var celciusNum float64
	if unit == string('C') {
		return temp
	} else if unit == string('K') {
		celciusNum = temp - 273.0
	} else if unit == string('F') {
	 	celciusNum = (temp - 32.0) * 5.0 / 9.0
	} else if unit == string('R') {
		celciusNum = temp * 1.25
	} else {
		fmt.Println("FUCK YOU!!")
	}
	return celciusNum
}

func fromCelcius(temp float64, unit string) float64 {
	var finalTemp float64
	if unit == string('K') {
		finalTemp = temp + 273.0
	} else if unit == string('F') {
	 	finalTemp = (temp * 1.8) + 32.0
	} else if unit == string('R') {
		finalTemp = temp * 0.8
	} else if unit == string('C') {
		return temp
	}
	return finalTemp
}

func main() {
	fmt.Printf("please input the the temp: ")
	userInput := input()
	unitOrigin := strings.ToUpper(string(userInput[0]))
	unitGoal := strings.ToUpper(string(userInput[2]))
	unitNum := strToFloat(userInput[4:])

	temp := toCelcius(unitNum, unitOrigin)
	finalTemp := fromCelcius(temp, unitGoal)
	fmt.Println(finalTemp)
}