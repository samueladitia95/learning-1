package main

// import (
// 	"database/sql"
// 	_ "github.com/mattn/go-sqlite3"
// 	"fmt"
// 	"strconv"
// )

// func main() {
// 	db , _ := sql.Open("sqlite3", "./adi-database-3.db")
// 	statement, _ := db.Prepare("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, age INTEGER) ")
// 	statement.Exec()
// 	statement, _ = db.Prepare("INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)")
// 	statement.Exec("Harry", "Kane", 34)

// 	rows, _ := db.Query("SELECT * FROM users")
// 	var id int
// 	var firstname string
// 	var lastname string
// 	var age int
// 	for rows.Next() {
// 		rows.Scan(&id, &firstname, &lastname, &age)
// 		fmt.Println(strconv.Itoa(id) + ": " + firstname + " " + lastname + ", age: " + strconv.Itoa(age))
// 	}
// }
