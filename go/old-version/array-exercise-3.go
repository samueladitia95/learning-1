package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
	"sort"
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

func inputScore() []int {
	scoreList := make([]int, 0)
	for {
		fmt.Printf("exam score? ")
		userInput := strToInt(input())
		if userInput < 0 || userInput > 100 {
			break
		} else {
			scoreList = append(scoreList, userInput)
		}
	}
	return scoreList
}

func sortNumber(scoreList []int) []int {
	tempList := make([]int, 0)
	tempNum := 0
	for i := 0; i < len(scoreList); i++ {
		if tempNum != scoreList[i] {
			tempNum = scoreList[i]
			tempList = append(tempList, tempNum)
		}
	}
	return tempList
}

func countScore(scoreList, numList []int) {
	for _ , i := range(numList) {
		count := 0
		for _ , j := range(scoreList) {
			if i == j {
				count += 1
			}
		}
		fmt.Println("frequency of " + intToStr(i) + " is " + intToStr(count))
	}
}

func main() {
	scoreList := inputScore()
	fmt.Println(scoreList)

	// sort the list. using sort package
	sort.Ints(scoreList)

	// find what score in the list
	numList := sortNumber(scoreList)

	//count each score frequency
	countScore(scoreList, numList)

}