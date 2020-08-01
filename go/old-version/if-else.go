package main

import (
  "bufio"
  "fmt"
  "os"
  "strconv"
  "strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("formula milk special discount")
	fmt.Printf("number of box: ")
	totalBox, _ := reader.ReadString('\n')
	boxFloat, _ := strconv.ParseFloat(strings.TrimSpace(totalBox), 64)
	fmt.Printf("unit price: ")
	unitPrice, _ := reader.ReadString('\n')
	unitPriceFloat, _ := strconv.ParseFloat(strings.TrimSpace(unitPrice), 64)
	
	var total float64
	if boxFloat <= 3 {
		total = ( unitPriceFloat  * 0.8 * boxFloat)
	} else {
		total = ((unitPriceFloat * 0.8) * 3) + ((boxFloat - 3) * unitPriceFloat)
	}

	fmt.Println(total)
}