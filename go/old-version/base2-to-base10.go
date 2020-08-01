package main

import (
	"fmt"
	"bufio"
	"strings"
	"os"
	// "strconv"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("enter a number: ")
	userNumber, _ := reader.ReadString('\n')
	userNumber= strings.TrimSpace(userNumber)
	
	decimal := 0
	power := 1

	for i := (len(userNumber) - 1); i >= 0; i-- {
		if string(userNumber[i]) == string('1') {
			decimal += power
		}
		power *= 2
	}
	fmt.Println(decimal)
}