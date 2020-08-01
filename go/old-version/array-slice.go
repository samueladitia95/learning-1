package main

import (
	"fmt"
)

func main() {
	var a[2]string
	a[0] = "hello"
	a[1] = "world"
	fmt.Println(a)

	b := [6]int{1, 2, 3, 4, 5, 6}
	fmt.Println(b)
	fmt.Println(len(b))
	fmt.Println(cap(b))
	

	c:= b[0:4]
	fmt.Println(c)

	d := []int{10, 11, 12, 13}
	fmt.Println(d)
	fmt.Println(cap(d))
	d = d[2:]
	fmt.Println(d)
	fmt.Println(cap(d))
	fmt.Println(len(d))

	/* if slice an array from the front, the capacity is also reduced */

	e := []struct{
		x string
		y bool
	}{
		{"john", true},
		{"harry", false},
		{"kane", true},
		{"smith", false},
		{"william", false},
	}
	fmt.Println(e[0].x)

	var f[]string
	fmt.Println(len(f))
	fmt.Println(cap(f))

	g := make([]int, 3, 5)
	fmt.Println(g)
	fmt.Println(len(g))
	fmt.Println(cap(g))
}