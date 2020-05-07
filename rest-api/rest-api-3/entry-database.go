package main

// import(
// 	"database/sql"
// 	_ "github.com/mattn/go-sqlite3"
// 	"fmt"
// 	"strconv"
// )

// func main() {
// 	database, _ := sql.Open("sqlite3", "./adi-database-2.db")
// 	statement, _ := database.Prepare("CREATE TABLE IF NOT EXISTS post (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)")
// 	statement.Exec()
// 	// statement, _ = database.Prepare("INSERT INTO post (title) VALUES (\"Second Post\")")
// 	// statement.Exec()

// 	rows, _ := database.Query("SELECT * FROM post")
// 	var id int
// 	var title string
// 	for rows.Next() {
// 		rows.Scan(&id, &title)
// 		fmt.Println(strconv.Itoa(id) + ": " + title)
// 	}
// }