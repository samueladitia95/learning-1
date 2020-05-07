package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
	"math"
)

func powof(a , b float64) float64 {
	power := a
	for i := 0; i < int(math.Floor(b - 1)) ; i++ {
		a *= power
	}
	return a
}

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("enter a number: ")
	userNumber, _ := reader.ReadString('\n')
	userNumberFloat, _ := strconv.ParseFloat(strings.TrimSpace(userNumber), 64)
	// fmt.Println(userNumberFloat)

	fmt.Printf("enter a power number: ")
	userPower, _ := reader.ReadString('\n')
	userPowerFloat, _ := strconv.ParseFloat(strings.TrimSpace(userPower), 64)

	fmt.Println(powof(userNumberFloat, userPowerFloat))
}