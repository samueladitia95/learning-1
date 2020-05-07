package main

import (
	"fmt"
	"bufio"
	"strings"
	"os"
	"strconv"
)

func sqrt(num float64) float64 {
	guess := 1.0
	for i:= 1; i <= 10; i++ {
		guess -= ((guess * guess) - num) / (2 * guess) 
	}
	return guess
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("enter a number: ")
	userNumber, _ := reader.ReadString('\n')
	userNumberFloat, _ := strconv.ParseFloat(strings.TrimSpace(userNumber), 64)
	
	fmt.Println(sqrt(userNumberFloat))

}