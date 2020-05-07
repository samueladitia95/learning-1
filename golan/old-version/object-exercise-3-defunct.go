package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

func strToInt(number string) int {
	convertedInt, _ := strconv.Atoi(number)
	return convertedInt
}

func intToStr(words int) string {
	convertedStr:= strconv.Itoa(words)
	return convertedStr
}

type Candidate struct {
	candidateName string
	vote int
}

func displayCandidate(c1, c2, c3, c4, c5 Candidate) {
	fmt.Printf("The Candidate is %v with total vote of: %v\n", c1.candidateName, c1.vote)
	fmt.Printf("The Candidate is %v with total vote of: %v\n", c2.candidateName, c2.vote)
	fmt.Printf("The Candidate is %v with total vote of: %v\n", c3.candidateName, c3.vote)
	fmt.Printf("The Candidate is %v with total vote of: %v\n", c4.candidateName, c4.vote)
	fmt.Printf("The Candidate is %v with total vote of: %v\n", c5.candidateName, c5.vote)
}

func main() {
	candidate1 := Candidate{"John", 0}
	candidate2 := Candidate{"Harry", 0}
	candidate3 := Candidate{"Kane", 0}
	candidate4 := Candidate{"Bailey", 0}
	candidate5 := Candidate{"Kasey", 0}
	displayCandidate(candidate1, candidate2, candidate3, candidate4, candidate5)

	
	for {
		fmt.Printf("enter the name of the candidate to vote: ")
		userVote := strings.ToLower(input())
		if userVote != "john" && userVote != "harry" && userVote != "kane" && userVote != "bailey" && userVote != "kasey" {
			if userVote == "end" {
				break
			}
			fmt.Println("wrong name, enter again!")
			continue
		}

		switch userVote {
		case "john":
			candidate1.vote += 1
		case "harry":
			candidate2.vote += 1
		case "kane":
			candidate3.vote += 1
		case "bailey":
			candidate4.vote += 1
		case "kasey":
			candidate5.vote += 1
		}
	}

	displayCandidate(candidate1, candidate2, candidate3, candidate4, candidate5)
	totalVote := []int {candidate1.vote, candidate2.vote, candidate3.vote, candidate4.vote, candidate5.vote}


	highestVote := 0
	highestVoteName := 0
	for key , value := range(totalVote) {
		if highestVote < value {
			highestVote = value
			highestVoteName = key
		}
	}

	switch highestVoteName {
	case 0:
		fmt.Printf("John Won with %v votes\n", highestVote)
	case 1:
		fmt.Printf("Harry Won with %v votes\n", highestVote)
	case 2:
		fmt.Printf("Kane Won with %v votes\n", highestVote)
	case 3:
		fmt.Printf("Bailey Won with %v votes\n", highestVote)
	case 4:
		fmt.Printf("Kasey Won with %v votes\n ", highestVote)
	}
}