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

func strToFloat(words string) float64 {
	convertedFloat, _ := strconv.ParseFloat(words, 64)
	return convertedFloat
}

type Time struct {
	hh, mm, dd int
}

type Parking struct {
	carPlateNumber string
	in, out Time
	fee float64
}

func carDataEntry() Parking {
	fmt.Printf("enter your car registration: ")
	carRegistration := input()
	var timeIn Time
	var timeOut Time

	OUTER1:
	for {
		fmt.Printf("enter the time you park (hh:mm:ss): ")
		carIn := input()
		carInSplit := strings.Split(carIn, ":")
		for _ , value := range(carInSplit) {
			if strToInt(value) < 0 {
				fmt.Println("Time doesn't make sense, enter again!")
				continue OUTER1
			}
		}
		if strToInt(carInSplit[0]) > 23 || strToInt(carInSplit[1]) > 59 || strToInt(carInSplit[2]) > 59 {
			fmt.Println("Time doesn't make sense, enter again!")
			continue
		}
		timeIn = Time{strToInt(carInSplit[0]), strToInt(carInSplit[1]), strToInt(carInSplit[2])}
		break
	}


	OUTER2:
	for {
		fmt.Printf("enter the time you leave (hh:mm:ss): ")
		carOut := input()
		carOutSplit := strings.Split(carOut, ":")
		for _ , value := range(carOutSplit) {
			if strToInt(value) < 0 {
				fmt.Println("Time doesn't make sense, enter again!")
				continue OUTER2
			}
		}
		if strToInt(carOutSplit[0]) > 23 || strToInt(carOutSplit[1]) > 59 || strToInt(carOutSplit[2]) > 59 {
			fmt.Println("Time doesn't make sense, enter again!")
			continue
		} 
		timeOut = Time{strToInt(carOutSplit[0]), strToInt(carOutSplit[1]), strToInt(carOutSplit[2])}
		break
	}

	carData := Parking{carRegistration, timeIn, timeOut, 0}
	return carData
}

func calculateFee(carData Parking, feePerHour float64) {
	timeInSec := (carData.in.hh * 60 * 60) + (carData.in.mm * 60) + (carData.in.dd)
	timeOutSec := (carData.out.hh * 60 * 60) + (carData.out.mm * 60) + (carData.out.dd)
	totalTime := timeOutSec - timeInSec

	if totalTime < 600 {
		fmt.Println("parking is free")
	} else {
		fee := (float64(totalTime) - 600) * (feePerHour/3600)
		fmt.Println("total cost of parking: ", fee)
	}
}

func main() {
	carData := carDataEntry()
	fmt.Printf("parking per hour cost: ")
	feePerHour := strToFloat(input())
	calculateFee(carData, feePerHour)
}