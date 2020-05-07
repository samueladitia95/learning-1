 package main

 import (
	 "io/ioutil"
	 "fmt"
	 "strings"
	 "strconv"
 )

func strToInt(number string) int {
	convertedInt, _ := strconv.Atoi(number)
	return convertedInt
}

func readTextStr(source string) string {
	input, err := ioutil.ReadFile(source)
	if err != nil {
		panic(err)
	}
	return string(input)
 }

func writeTextStr(output ,target string) {
	err := ioutil.WriteFile(target, []byte(output) , 0664)
	if err != nil {
		panic(err)
	}
 }

type Friends struct {
	no int
	id string
	name string
	age int
 }

func processInput(source string) []Friends{
	input := readTextStr(source)
	inputSplit := strings.Split(input, "\n")
	inputSplitSplit := make([][]string, 2)
	for key, value := range(inputSplit) {
		inputSplitSplit[key] = strings.Split(value, ",")
	}
	
	friendList := make([]Friends, len(inputSplit))
	for i := 0; i < len(inputSplitSplit); i++ {
		noTemp := i + 1
		idTemp := inputSplitSplit[i][0]
		nameTemp := inputSplitSplit[i][1]
		ageTemp := strToInt(inputSplitSplit[i][2])
		friendList[i] = Friends{noTemp, idTemp, nameTemp, ageTemp}
	}

	return friendList
 }

func printInput(source []Friends) {
	 fmt.Println("LIST OF FRIENDS\n")
	 maxString := 0
	 for i := 0; i < len(source); i++ {
		if maxString < len(source[i].name) {
			maxString = len(source[i].name)
		}
	 }
	 fmt.Println(maxString)
	 fmt.Printf("No  ID    Name %*v\n", maxString, "age")
	 fmt.Printf("----------------------------------\n")
	 for i := 0; i < len(source); i++ {
		 fmt.Printf("%v %v   %v %*v\n", source[i].no, source[i].id, source[i].name, 
		 maxString + 3 - len(source[i].name), source[i].age)
	 }
}

func main() {
	friendList := processInput("test-file-1.txt")
	printInput(friendList)
}