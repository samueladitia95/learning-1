// exercise not applicable in golang, only in C because of limited binary
// use base 2 half-adder to add really big number

package main

import (
	"fmt"
)

func main() {
	A := 123450000000067890
	B := 98765430
	C := A + B
	fmt.Println(C)
}