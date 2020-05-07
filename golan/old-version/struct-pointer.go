package main

import (
	"fmt"
)
 
type List struct {
	X string
	Y string
}

func main() {
	listA := List{"hello", "world"}
	fmt.Println(listA)
	pointer := &listA
	pointer.X = "hahahahaha"
	fmt.Println(listA)
	fmt.Println(*pointer)
}