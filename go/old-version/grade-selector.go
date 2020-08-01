package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)


func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("enter your score: ")
	userScore, _ := reader.ReadString('\n')
	userScoreFloat, _ := strconv.ParseFloat(strings.TrimSpace(userScore), 64)
	// fmt.Println(userScoreFloat + 100)

	if userScoreFloat >= 80.00 {
		fmt.Println("Anda dapat A!")
	} else if userScoreFloat >= 70.00 {
		fmt.Println("Anda dapat B!") 
	} else if userScoreFloat >= 60.00 {
		fmt.Println("Anda dapat C!")
	} else if userScoreFloat >= 50.00 {
		fmt.Println("Anda dapat D!")
	} else {
		fmt.Println("Anda dapat E!")
	}
}