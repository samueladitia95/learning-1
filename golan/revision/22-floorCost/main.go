package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
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

func calcTotal(length, width float64) {
	const (
		tileSize = 900.0
		cost = 500.0
	)

	totalTile := (length * width) / tileSize
	totalTile = math.Ceil(totalTile)

	totalCost := totalTile * cost
	// totalCostStr := fmt.Sprintf("%f", totalCost)
	// var count int
	// var total string
	// for i := len(totalCostStr) - 1; i >= 0; i-- {
		// count++
		// if count == 3 {
		// 	total = fmt.Sprintf("%v%v%v", ",",totalCostStr[i], total)
		// 	count = 0
		// } else {
			// total = fmt.Sprintf("%v%v", totalCostStr[i], total)
		// }
	// }
	fmt.Printf("Total tile needed: %v\nTotal cost: %v\n", totalTile, totalCost)
}

func main() {
	length := inputFloat("input the length of the room (in meter): ") * 100
	// length = length * 100
	width := inputFloat("input the width of the room (in meter): ") * 100
	// width = width * 100

	calcTotal(length, width)
}
