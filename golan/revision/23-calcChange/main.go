package main

import (
	"fmt"
	"bufio"
	"strings"
	"os"
	"strconv"
	"math"
)

func inputFloat(promt string) float64 {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(promt)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("error!")
			continue
		}
		input = strings.TrimSpace(input)
		inputFloat, err := strconv.ParseFloat(input, 64)
		if err != nil {
			fmt.Println("error!")
			continue
		}
		return inputFloat
	}
}

func calcChange(change float64) {
	dollars := math.Floor(change)
	change = math.Ceil((change - math.Floor(change))*100)/100

	quarters := math.Floor(change / 0.25)
	change = math.Ceil((math.Mod(change, 0.25)*100))/100

	dimes := math.Floor(change / 0.10)
	change = math.Ceil((math.Mod(change, 0.10)*100))/100

	nickels := math.Floor(change / 0.05)
	change = math.Ceil((math.Mod(change, 0.05)*100))/100

	pennies := math.Floor(change / 0.01)

	fmt.Printf("Dollars: %v\nQuarters: %v\nDimes: %v\nNickels: %v\nPennies: %v\n", dollars, quarters, dimes, nickels, pennies)
}

func main() {
	var cost float64
	var paid float64
	for {
		cost = inputFloat("Input total cost: ")
		paid = inputFloat("Input money paid: ")
		if cost > paid {
			fmt.Println("not enough money!")
			continue
		}
		break
	}
	calcChange(paid - cost)
	fmt.Printf("total change: $%.2f\n", paid - cost)
}