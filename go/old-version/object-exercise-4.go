package main

import (
	"fmt"
	"bufio"
	"os"
	"strings"
	"strconv"
	"sort"
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

func strToFloat(words string) float64 {
	convertedFloat, _ := strconv.ParseFloat(words, 64)
	return convertedFloat
}

type Time struct {
	hh, mm, ss int
}

type Marathon struct {
	name string
	time Time
}

func runnerDataEntry() []Marathon {
	runnerList := make([]Marathon, 0)
	for i:= 0; i < 100; i++{
		var tempRunner Marathon 
		fmt.Printf("enter the name of the runner: ")
		tempRunner.name = strings.ToLower(input())

		if tempRunner.name == "end" {
			break
		}

		var totalTime Time
		OUTER:
		for {
			fmt.Printf("total time to complete marathon: ")
			timeRun := input()
			timeRunSplit := strings.Split(timeRun, ":")
			for _ , value := range(timeRunSplit) {
				if strToInt(value) < 0 {
					fmt.Println("Time doesn't make sense, enter again!")
					continue OUTER
				}
			}
			if strToInt(timeRunSplit[0]) > 23 || strToInt(timeRunSplit[1]) > 59 || strToInt(timeRunSplit[2]) > 59 {
				fmt.Println("Time doesn't make sense, enter again!")
				continue
			}
			totalTime = Time{strToInt(timeRunSplit[0]), strToInt(timeRunSplit[1]), strToInt(timeRunSplit[2])}
			break
		}

		tempRunner.time = totalTime
		runnerList = append(runnerList, tempRunner)
	}
	return runnerList
}

func toSecond(runTime Time) int {
	totalTimeSec := (runTime.hh * 3600) + (runTime.mm * 60) + runTime.ss
	return totalTimeSec
}

func rankRunner(runnerList []Marathon) {
	timeRunSec := make([]int, len(runnerList))
	for i := 0; i < len(runnerList); i++ {
		timeRunSec[i] = toSecond(runnerList[i].time)
	}
	sort.Ints(timeRunSec)
	for i := 0; i < 3; i++ {
		for j := 0; j < len(timeRunSec); j++ {
			if timeRunSec[i] == toSecond(runnerList[j].time) {
				fmt.Printf("Rank: %v, name: %v, total time: %v hours %v minutes %v seconds\n", 
				i + 1, strings.Title(runnerList[j].name), 
				runnerList[j].time.hh, runnerList[j].time.mm, runnerList[j].time.ss)
			} 
		}
	}
}

func main() {
	runnerData := runnerDataEntry()
	rankRunner(runnerData)
}