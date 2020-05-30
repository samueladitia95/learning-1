package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func inputStr(display string) string {
	reader := bufio.NewReader(os.Stdin)
	for {
		fmt.Printf(display)
		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Println("Invalid Input")
			continue
		}
		input = strings.TrimSpace(input)
		return input
	}
}

func pigLatin(str string) string {
	var result string
	str = strings.ToLower(str)
	vowels := []string {"a", "i", "u", "e", "o"}

	strSlice := strings.Split(str, " ")
	for _ , word := range(strSlice) {
		_ , err := strconv.Atoi(word)
		if err == nil {
			result += word + " "
			continue
		}
		
		isVowel1 := find(vowels, string(word[0]))
		var isVowel2 bool
		if len(word) > 1 {
			isVowel2 = find(vowels, string(word[1]))
		}

		if !isVowel1 && !isVowel2 {
			word = word[2:] + word[0:2] + "ay"
		} else if !isVowel1 {
			word = word[1:] + string(word[0]) + "ay"
		} else {
			word = word + "yay"
		}

		result += word + " "
	}
	result = strings.TrimSpace(result) 
	return result
}

func find(slice []string, val string) bool {
    for _ , item := range(slice) {
        if item == val {
            return true
        }
    }
    return false
}

func main() {
	str := inputStr("Input any strings of characters: ")
	fmt.Println(pigLatin(str))
}