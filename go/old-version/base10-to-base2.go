package main

import (
	"fmt"
	"bufio"
	"strings"
	"strconv"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Printf("enter a number: ")
	userNumber, _ := reader.ReadString('\n')
	userNumberInt, _ := strconv.Atoi(strings.TrimSpace(userNumber))
	fmt.Println(userNumberInt)
	var binary string
	
	for {
		if userNumberInt == 1 {
			binary ="1" + binary
			break
		}
		if userNumberInt % 2 == 1 {
			binary = "1" + binary
			userNumberInt = (userNumberInt -1) / 2
			continue
		} else if userNumberInt % 2 == 0 {
			binary = "0" + binary
			userNumberInt /= 2
			continue
		}
	}
	fmt.Println(binary)
}