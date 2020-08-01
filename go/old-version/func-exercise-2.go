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

func strToInt(number string) int {
	convertedInt, _ := strconv.Atoi(number)
	return convertedInt
}

func intToStr(words int) string {
	convertedStr:= strconv.Itoa(words)
	return convertedStr
}

func commonFactor(numerator, denominator int) int {
	highestFactor := 0
	for i := 1; i <= numerator; i++ {
		if (numerator % i == 0) && (denominator % i == 0) {
			highestFactor = i
		}
	}
	return highestFactor
}

func main() {
	fmt.Printf("enter the numerator: ")
	numerator := strToInt(input())
	fmt.Printf("enter the denominator: ")
	denominator := strToInt(input())

	divisor := commonFactor(numerator, denominator)
	fmt.Println(divisor)

	fmt.Println("simplify fraction: " + intToStr(numerator/divisor) + "/" + intToStr(denominator/divisor) )
}