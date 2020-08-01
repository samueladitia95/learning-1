package main

import (
	"fmt"
	"time"
)

func main() {
	algo := "algo"
	fmt.Println(algo)
	time.Sleep(500 * time.Millisecond)
	for i := 0; i < 8; i++ {
		algo = " " + algo
		fmt.Println(algo)
		time.Sleep(500 * time.Millisecond)
	}
}