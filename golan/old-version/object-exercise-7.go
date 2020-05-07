package main

import (
	"fmt"
	"io/ioutil"
	"strings"
	"bufio"
	"os"
	"strconv"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func strToInt(number string) int {
	convertedInt, _ := strconv.Atoi(number)
	return convertedInt
}

func intToStr(words int) string {
	convertedStr:= strconv.Itoa(words)
	return convertedStr
}

func writeTextStr(output ,target string) {
	err := ioutil.WriteFile(target, []byte(output) , 0664)
	if err != nil {
		panic(err)
	}
}

type Friends struct {
	id string
	name string
	age int
}

func dataEntry() []Friends {
	friendList := make([]Friends, 0)
	for i := 0; i < 100; i++ {
		// set id
		var idTemp string
		if i < 10 {
			idTemp = "fr00" + intToStr(i)
		} else if i < 100 {
			idTemp = "fr0" + intToStr(i)
		} else {
			idTemp = "fr" + intToStr(i)
		}
		
		// input name 
		fmt.Printf("Name: ")
		nameTemp := input()
		if strings.ToLower(nameTemp) == "end" {
			break
		}
		if len(nameTemp) < 25 {
			nameTemp = nameTemp + strings.Repeat(" ", 25 - len(nameTemp))
		}

		// input age
		fmt.Printf("Age: ")
		ageTemp := strToInt(input())
		fmt.Printf("%v\n",strings.Repeat("-", 25))

		// addtolist
		friendTemp := Friends{idTemp, nameTemp, ageTemp}
		friendList = append(friendList, friendTemp)
	}
	return friendList
}

func main() {
	friendList := dataEntry()
	var friendPrinted string
	for i := 0; i < len(friendList); i++ {
		friendTemp := friendList[i].id + "," + friendList[i].name + 
			"," + intToStr(friendList[i].age) + "\n"
		friendPrinted = friendPrinted + friendTemp
	}
	writeTextStr(friendPrinted, "test-file-4.txt")
}