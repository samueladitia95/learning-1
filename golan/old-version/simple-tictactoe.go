package main

import (
	"fmt"
	"strings"
)

func main () {
	board := [][]string {
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}

	board[0][0] = "X"
	board[0][1] = "O"
	board[2][2] = "X"
	board[2][0] = "O"
 
	for i := 0; i < len(board); i++ {
		fmt.Println(strings.Join(board[i], " "))
	}
} 