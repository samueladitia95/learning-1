package main

import (
	"fmt"
)

func swap (a, b, c string) (x, y, z string) {
	y = a
	x = b
	z = c
	return
}

func main() {
	x, y, z := swap("hello", "world", "acak")
	fmt.Println(x, y, z)
}