package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"sort"
)

func input() string {
	reader := bufio.NewReader(os.Stdin)
	userInput, _ := reader.ReadString('\n')
	userInputTrim := strings.TrimSpace(userInput)
	return userInputTrim
}

type Candidate struct {
	candidateName string
	vote int
}

func enterCandidate() []Candidate {
	candidateList := make([]Candidate, 5)
	candidateList[0] = Candidate{"john", 0}
	candidateList[1] = Candidate{"harry", 0}
	candidateList[2] = Candidate{"gordon", 0}
	candidateList[3] = Candidate{"kane", 0}
	candidateList[4] = Candidate{"kasey", 0}
	return candidateList
}

func displayCandidate(candidateList []Candidate) {
	for key, _ := range(candidateList) {
		fmt.Printf("candidate name: %v, with total vote: %v\n",
		strings.Title(candidateList[key].candidateName), candidateList[key].vote)
	}
	fmt.Println("----------------------------------------")
}

func userVote(candidateList []Candidate) {
	for {
		fmt.Printf("enter your favorite candidate: ")
		userInput := strings.ToLower(input())

		// loop break
		if userInput == "end" {
			break
		}

		// check the input valid or not. if valid then trueInput become true
		trueInput := false
		for key, _ := range(candidateList) {
			if userInput == candidateList[key].candidateName {
				candidateList[key].vote += 1
				trueInput = true
				break
			}
		}
		if !trueInput {
			fmt.Println("wrong name, enter again!")
			continue
		}
	}
}

func rankCandidate(candidateList []Candidate) {
	voteRank := make([]int, 5)
	for i := 0; i < len(candidateList); i++ {
		voteRank[i] = candidateList[i].vote
	}
	sort.Ints(voteRank)
	counter := 0
	for i := len(voteRank) - 1; i >= 0; i-- {
		for j := i; j >= 0; j-- {
			if voteRank[i] == candidateList[j].vote {
				fmt.Printf("rank: %v, candidate: %v, vote: %v\n", 
				counter + 1,  candidateList[j].candidateName, candidateList[j].vote)
				break
			}
		}
		counter++
	}

	
	// for i := 0; i < len(candidateList); i++ {
	// 	temp := i
	// 	for j := i; j < len(candidateList); j++ {
	// 		if candidateList[j].vote < candidateList[temp].vote {
	// 			candidateList[temp] = candidateList[j]
	// 		}
	// 	}
	// 	candidateList[i], candidateList[temp] = candidateList[temp], candidateList[i]
	// }

	// for i := 0; i < len(candidateList); i++ {
	// 	fmt.Printf("rank: %v, candidate: %v, vote: %v\n", 
	// 	i + 1,  candidateList[i].candidateName, candidateList[i].vote)
	// }
}

func main() {
	candidateList := enterCandidate()
	displayCandidate(candidateList)
	userVote(candidateList)
	displayCandidate(candidateList)
	rankCandidate(candidateList)
}