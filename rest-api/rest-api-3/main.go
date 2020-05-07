package main

import (
	"github.com/gorilla/mux"
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"log"
	"net/http"
	"encoding/json"
	"io/ioutil"
	"fmt"
)

// Post type struct
type Post struct {
	ID string `json:"id"`
	Title string `json:"title"`
}

// set variable db as a database
var db *sql.DB
var err error

func getPosts(w http.ResponseWriter, r *http.Request) {
	// set response header content type to json
	w.Header().Set("content-type", "application-json")

	var posts []Post
	// query the database and asign it to result
	result, err := db.Query("SELECT id, title FROM post")
	if err != nil {
		panic(err.Error())
	}

	// looping through result
	// result still in database format
	for result.Next() {
		var post Post
		// asign value from result to post.ID and post.Title
		err := result.Scan(&post.ID, &post.Title)
		if err != nil {
			panic(err.Error())
		}
		posts = append(posts, post)
	}

	// encode posts array to send
	json.NewEncoder(w).Encode(posts)
}

func getPost(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")

	// asign http request to become a variable
	// format is map
	// mux.Vars read the http request route
	params := mux.Vars(r)

	// query the database with id parameter taken from params(http request)
	result, err := db.Query("SELECT id, title FROM post WHERE id = ?", params["id"])
	if err != nil {
		panic(err.Error())
	}

	var post Post

	// loop through result
	// .Next() is required to use .Scan(parameter1, ...)
	for result.Next() {
		// asign result to post.ID and post.title
		err := result.Scan(&post.ID, &post.Title)
		if err != nil {
			panic(err.Error())
		}
	}

	//encode post to json format
	json.NewEncoder(w).Encode(post)
}

func createPost(w http.ResponseWriter, r *http.Request) {
	// sql query to create a new entry
	// only entry the title, id is self increment
	// asign the sql query to stmt variable
	stmt, err := db.Prepare("INSERT INTO post (title) VALUES (?)")
	if err != nil {
		panic(err.Error())
	}
	
	// read http request body that contain new entry
	// even if http request contain id, only title will inserted to database
	// body is stil json
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}

	// make temporary variable to store converted json
	keyval := make(map[string]string)
	// convert json file from body variable to map in variable keyval
	json.Unmarshal(body, &keyval)
	// grab title propetry(key) from keyval map
	title := keyval["title"]

	// run sql query that stored in stmt earlier
	// insert title variable to sql query parameter
	_ , err = stmt.Exec(title)
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "New Post has ben created")
}

func updatePost(w http.ResponseWriter, r *http.Request) {
	// insert http request to varible params
	// params is a map
	params := mux.Vars(r)

	// sql query to modify one of the entry
	// SET is to change the entry in the specified coloumn
	// WHERE is the condition
	stmt, err := db.Prepare("UPDATE post SET title = ? WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}

	// read http request body and store it in variable body
	//body variable is still json
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err.Error())
	}

	// make temporary varible to store body variable that will be change to map
	keyval := make(map[string]string)
	// convert body(json) to map data type, store it in keyval
	json.Unmarshal(body, &keyval)
	// grab the title properties(key) and store it in newTitle
	newTitle := keyval["title"]

	// execute the query language
	// first parameter is the title
	// the second parameter is the id where title going to change
	_ , err = stmt.Exec(newTitle, params["id"])
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "Post with ID = %s was updated", params["id"])
}

func deletePost(w http.ResponseWriter, r *http.Request) {
	// store http request to params
	params := mux.Vars(r)

	// sql query to delete entry with id contional
	stmt, err := db.Prepare("DELETE FROM post WHERE id = ?")
	if err != nil {
		panic(err.Error())
	}

	// execute the sql query, id parameter as conditonal
	_ , err = stmt.Exec(params["id"])
	if err != nil {
		panic(err.Error())
	}

	fmt.Fprintf(w, "Post with ID = %s was deleted", params["id"])
}



func main() {
	// connect go file to sql database, asign database operation to db variable
	db, err = sql.Open("sqlite3", "./adi-database-2.db")
	if err != nil {
		panic(err.Error())
	}

	// defer execute when all other statement in function execute first
	// first in last out stack
	defer db.Close()

	router := mux.NewRouter()
	
	router.HandleFunc("/posts", getPosts).Methods("GET")
	router.HandleFunc("/posts/{id}", getPost).Methods("GET")
	router.HandleFunc("/posts", createPost).Methods("POST")
	router.HandleFunc("/posts/{id}", updatePost).Methods("PUT")
	router.HandleFunc("/posts/{id}", deletePost).Methods("DELETE")	

	log.Fatal(http.ListenAndServe(":8000", router))

}