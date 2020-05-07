package main

import (
	"fmt"
	"bufio"
	"strings"
	"os"
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

func sorting(n1, n2, n3 int) (int, int, int) {
	order1, order2, order3 := 0, 0, 0
	if n1 >= n2 && n1 >= n3 {
		order1 = n1
		if n2 >= n3 {
			order2, order3 = n2, n3
		} else {
			order2, order3 = n3, n2
		}
	} else if n2 >= n1 && n2 >= n3 {
		order1 = n2
		if n1 >= n3 {
			order2, order3 = n1, n3
		} else {
			order2, order3 = n3, n1
		}
	} else {
		order1 = n3
		if n2 >= n1 {
			order2, order3 = n2, n1
		} else {
			order2, order3 = n1, n2
		}
	}

	return order1, order2, order3
}
func main() {
	fmt.Println("enter 3 number: ")
	n1 := strToInt(input())
	n2 := strToInt(input())
	n3 := strToInt(input())

	result1, result2, result3 := sorting(n1, n2, n3)
	fmt.Println("sorted number: " + intToStr(result1) + " " + intToStr(result2) + " " + intToStr(result3))
}