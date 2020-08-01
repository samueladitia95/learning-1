package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func dataInsert() [][]string {
	sliceList := make([][]string, 2)
	sliceList[0] = make([]string, 0)
	sliceList[1] = make([]string, 0)

	for {
		fmt.Printf("enter a name: ")
		tempName := input()
		if strings.ToLower(tempName) == "end" {
			break
		}
		sliceList[0] = append(sliceList[0], tempName)
		fmt.Printf("enter a alias: ")
		sliceList[1] = append(sliceList[1], input())
		fmt.Println("----------------------------")
	}	

	return sliceList
}

func justifyCenter(sliceList [][]string) {
	stringMax := 0
	for i := 0; i < len(sliceList[0]); i++ {
		if stringMax < len(sliceList[0][i]) {
			stringMax = len(sliceList[0][i])
		}
	}
	for i := range(sliceList[0]) {
		fmt.Printf("%*v : ", stringMax,  sliceList[0][i])
		fmt.Println(sliceList[1][i])
    }
}

func main() {
	sliceList := dataInsert()
	fmt.Println("-------------------------")
	justifyCenter(sliceList)
}