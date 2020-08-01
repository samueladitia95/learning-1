package main

import (
	"fmt"
)

// User type struct
type User struct {
	ID int
	FirstName string
	LastName string
	Age int
}

func sortStruct(slice []User) {
	for i := 0; i < len(slice); i++ {
		for j := i; j < len(slice); j++ {
			if slice[i].ID > slice[j].ID {
				slice[i], slice[j] = slice[j], slice[i]
			}
		}
	}
}

func main() {
	users := make([]User, 4)
	users[0] = User{10, "Erling", "Haland", 20}
	users[1] = User{78, "Harry", "Kane", 28}
	users[2] = User{22, "Jurgen", "Klopp", 45}
	users[3] = User{2, "Roberto", "Firmino", 26}

	sortStruct(users)
	fmt.Println(users)
}