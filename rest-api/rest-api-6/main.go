package main

import (
	"fmt"
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"github.com/gorilla/mux"
	"net/http"
	"encoding/json"
	// "io/ioutil"
	"log"
)

var db *sql.DB
var err error

// FirstReq type struct
type FirstReq struct {
	FromCode string `json:"fromcode"`
	ToCode string `json:"tocode"`
	Provider string `json:"provider"`
}

// ResultType type struct
type ResultType struct {
	Service string `json:"service"`
	Description string `json:"description"`
	Tariff int `json:"tariff"`
	Etd string `json:"etd"`
}

// StatusType type struct
type StatusType struct {
	Code int `json:"code"`
	Description string `json:"description"`
}

// SiCepatType type struct
type SiCepatType struct {
	Results []ResultType `json:"results"`
	Status StatusType	`json:"status"`
}

// Respond type struct
type Respond struct {
	SiCepat SiCepatType `json:"sicepat"`
}

func handFunc() {
	router := mux.NewRouter()

	router.HandleFunc("/", helloWorld).Methods("GET")
	router.HandleFunc("/post", mappingCode).Methods("POST")

	http.ListenAndServe(":8050", router)
}

func mappingCode(w http.ResponseWriter, r *http.Request) {
	var firstReq FirstReq
	json.NewDecoder(r.Body).Decode(&firstReq)

	statementFrom, _ := db.Query("SELECT provider_data FROM location WHERE location_code = ? AND provider_name = ? ", firstReq.FromCode, firstReq.Provider)
	var fromCodeProvider string
	for statementFrom.Next() {
		statementFrom.Scan(&fromCodeProvider)
	}


	statementTo, _ := db.Query("SELECT provider_data FROM location WHERE location_code = ? AND provider_name = ? ", firstReq.ToCode, firstReq.Provider)
	var toCodeProvider string
	for statementTo.Next() {
		statementTo.Scan(&toCodeProvider)
	}

	body := request("http://api.sicepat.com/customer/tariff/?origin=" + fromCodeProvider + "&destination=" + toCodeProvider + "&weight=1", "77372f5ed15134b3b33186d6a5d47333")

	fmt.Println(body)
}

func request(url string, contentType string) Respond {
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        log.Fatal(err)
    }
    req.Header.Set("api-key", contentType)
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        log.Fatal(err)
    }
    defer resp.Body.Close()
	var body Respond
	json.NewDecoder(resp.Body).Decode(&body)
	return body
}

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

func main() {
	db, err = sql.Open("sqlite3", "./location.db")
	if err != nil {
		panic(err.Error())
	}

	handFunc()

}