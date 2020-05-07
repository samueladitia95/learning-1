package main


import (
	"github.com/gorilla/mux"
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
	"encoding/json"
	// "io/ioutil"
	// "fmt"
	"strconv"
)

var db *sql.DB
var err error

// User type struct
type User struct {
	ID int				`json:"id"`
	FirstName string	`json:"firstname"`
	LastName string		`json:"lastname"`
	Age int				`json:"age"`
}

func handleRequest() {
	router := mux.NewRouter()

	router.HandleFunc("/users", getUsers).Methods("GET")
	router.HandleFunc("/users/{id}", getUser).Methods("GET")
	router.HandleFunc("/users", createUser).Methods("POST")
	router.HandleFunc("/users/{id}", updateUser).Methods("PUT")
	router.HandleFunc("/users/{id}", deleteUser).Methods("Delete")

	log.Fatal(http.ListenAndServe(":8000", router))
}

func getUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")

	var users []User

	result, err := db.Query("SELECT * FROM users")
	if err != nil {
		panic(err.Error())
	}

	for result.Next() {
		var user User
		err := result.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Age)
		if err != nil {
			panic(err.Error())
		}
		users = append(users, user)
	}

	json.NewEncoder(w).Encode(users)
}

func getUser(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")

	params := mux.Vars(r)

	result, err := db.Query("SELECT * FROM users")
	if err != nil {
		panic(err.Error())
	}

	for result.Next() {
		var user User
		result.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Age)
		if strconv.Itoa(user.ID) == params["id"] {
			json.NewEncoder(w).Encode(user)
			return
		}
	}
}

func createUser(w http.ResponseWriter, r *http.Request) {
	var user User
	json.NewDecoder(r.Body).Decode(&user)
	statement, err := db.Prepare("INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)")
	if err != nil {
		panic(err.Error())
	}

	statement.Exec(user.FirstName, user.LastName, user.Age)
}

func updateUser(w http.ResponseWriter, r *http.Request) {
	var user User
	params := mux.Vars(r)
	paramsID, err := strconv.Atoi(params["id"])
	if err != nil {
		panic(err.Error())
	}
	search, err := db.Query("SELECT * FROM users WHERE id = ?", paramsID)
	for search.Next() {
		search.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Age)
	}

	json.NewDecoder(r.Body).Decode(&user)
	result, err := db.Prepare("UPDATE users SET firstname = ?, lastname = ?, age = ? WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}

	result.Exec(user.FirstName, user.LastName, user.Age, user.ID)
	
}

func deleteUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	paramsID, err := strconv.Atoi(params["id"])
	result, err := db.Prepare("DELETE FROM users WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}
	result.Exec(paramsID)
}

func main() {
	db, _ = sql.Open("sqlite3", "./adi-database-3.db")
	handleRequest()
}