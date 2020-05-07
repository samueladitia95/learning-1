package main

import (
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"strconv"
	"fmt"
)

func main() {
	// create database
	database, _ := sql.Open("sqlite3", "./adi-database.db")

	// create table name user
	// id as primary key and username, email as field
	statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)")

	// to execute above statement
	statement.Exec()

	// insert value to database, id self generate
	statement, _ = database.Prepare("INSERT INTO user (username, email) VALUES (\"harry\", \"harry@home\")")
	statement.Exec()

	// another way to enter a value to database
	statement, _ = database.Prepare("INSERT INTO user (username, email) VALUES (?, ?)")
	statement.Exec("kane", "kane@gmail.com")

	//delete an entry from database by on ID(or any other field)
	statement, _ = database.Prepare("DELETE FROM user WHERE id = 1")
	statement.Exec()

	// delete an entry from database which contain a string
	statement, _ = database.Prepare("DELETE FROM user WHERE username LIKE \"%kane%\"")

	// delete all entry database
	statement, _ = database.Prepare("DELETE FROM user")
	statement.Exec()

	// to query(search) the database
	rows, _ := database.Query("SELECT id, username, email FROM user")
	var idTemp int
	var usernameTemp string
	var emailTemp string
	for rows.Next() {
		rows.Scan(&idTemp, &usernameTemp, &emailTemp)
		fmt.Println(strconv.Itoa(idTemp) + ": " + usernameTemp + " email:" + emailTemp)
	}
}
