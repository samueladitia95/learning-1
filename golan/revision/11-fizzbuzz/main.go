package main

import (
	"fmt"
	"os"
	"bufio"
	"strings"
	"strconv"
	"time"
)

func inputInt(display string) int {
	var result int
	for {
		fmt.Printf(display)
		reader := bufio.NewReader(os.Stdin)
		input, err := reader.ReadString('\n')
		if err != nil {
			panic(err.Error())
		}
		input = strings.TrimSpace(input)
		result, err = strconv.Atoi(input)
		if err != nil {
			fmt.Println("Invalid Input, number only")
			continue
		} else {
			break
		}
	}
	return result
}

func fizzBuzz(fizz, buzz, max int) {
	for i := 1; i < max + 1; i++ {
		if i % (fizz * buzz) == 0 {
			fmt.Println("FizzBuzz") 
		} else if i % fizz == 0 {
			fmt.Println("Fizz")
		} else if i % buzz == 0 {
			fmt.Println("Buzz")
		} else {
			fmt.Println(i)
		}
		time.Sleep(100 * time.Millisecond)
	}
}

func fizzBuzzRev1(fizz, buzz, max int) {
	for i := 1; i < max + 1; i++ {
		switch {
		case i % (fizz * buzz) == 0:
			fmt.Println("FizzBuzz")
		case i % fizz == 0:
			fmt.Println("Fizz")
		case i % buzz == 0:
			fmt.Println("Buzz")
		default:
			fmt.Println(i)
		} 
		time.Sleep(100 * time.Millisecond)
	}
}

func main() {
	fizz := inputInt("Fizz number: ")
	buzz := inputInt("Buzz Number: ")
	max := inputInt("Max Number: ")
	fizzBuzzRev1(fizz, buzz, max)
}