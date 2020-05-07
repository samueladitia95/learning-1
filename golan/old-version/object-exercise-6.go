package main

import (
	"fmt"
	"strings"
	"io/ioutil"
)

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

func main() {
	input := readTextStr("test-file-2.txt")
	inputUpper := strings.ToUpper(input)
	fmt.Println(inputUpper)
	writeTextStr(inputUpper, "test-file-3.txt")
}