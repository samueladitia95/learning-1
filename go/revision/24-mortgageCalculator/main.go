package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func inputFloat(promt string) float64 {
	reader := bufio.NewReader(os.Stdin)
	for {
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
		if inputFloat < 0 {
			fmt.Println("error!")
			continue
		}
		return inputFloat
	}
}

// func inputStr(promt string) string {
// 	reader := bufio.NewReader(os.Stdin)
// 	for {
// 		fmt.Printf(promt)
// 		input, err:= reader.ReadString('\n')
// 		if err != nil {
// 			fmt.Println("Error!")
// 			continue
// 		}
// 		return strings.TrimSpace(input)
// 	}
// }

func inputInt(promt string) int {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(promt)
		input, err:= reader.ReadString('\n')
		if err != nil {
			fmt.Println("Error!")
			continue
		}
		input = strings.TrimSpace(input)
		inputUint, err := strconv.ParseUint(input, 10, 64)
		if err != nil {
			fmt.Println("Error!")
			continue
		}
		if inputUint > 20 {
			fmt.Println("20 years max!")
			continue
		}
		return int(inputUint)
	}
}

func userInput() (float64, float64, float64, int) {
	total := inputFloat("Enter total value: ")
	downpayment := inputFloat("Enter downpayment: ")
	var interest float64
	for {
		interest = inputFloat("Enter interest rate: ")
		if interest > 100 {
			fmt.Println("Interest rate to high!")
			continue
		}
		break
	}
	tenors := inputInt("Enter tenors period: ")
	return total, downpayment, interest, tenors
}

func calcMonthlyPayment(balance float64, interest float64, tenors int) float64 {
	h
}

func main() {

}