package main

import (
	"encoding/json"
	"database/sql"
	_ "github.com/mattn/go-sqlite3"
	"github.com/gorilla/mux"
	"net/http"
	"log"
)

var db *sql.DB
var err error

// Comic type struck
type Comic struct {
	ID int				`json:"id"`
	Title string		`json:"title"`
	Author string		`json:"author"`
	Artist string		`json:"artist"`
	Demographic string	`json:"demographic"`
	Genre string		`json:"genre"`
	Rating float64		`json:"rating"`
}

func endPoints() {
	router := mux.NewRouter()

	router.HandleFunc("/search", searchComic).Methods("GET")

	log.Fatal(http.ListenAndServe(":8010", router))
}

func searchComic(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")

	// get the query string and asign it to a variable
	v := r.URL.Query()
	title := v.Get("title")
	author := v.Get("author")
	artist := v.Get("artist")
	mode := v.Get("mode")

	// group the query string together so its easier to process
	parameter := []string{title, author, artist}
	// add wildcard to query string that is not empty
	for i := 0; i < len(parameter); i++ {
		if parameter[i] != "" {
			parameter[i] = "%" + parameter[i] + "%"
		}
	}

	result := make([]Comic, 0)
	// OR in sql query dont need wildcard in empty variable
	if mode == "or" {
		result = queryComics("OR", parameter)
	} else {
		// add wild card to all variable
		for i := 0; i < len(parameter); i++ {
			if parameter[i] == "" {
				parameter[i] = "%" + parameter[i] + "%"
			}
		}
		result = queryComics("AND", parameter)
	}

	json.NewEncoder(w).Encode(result)
}

func queryComics(mode string, params []string ) []Comic {
	query , err := db.Query("SELECT * FROM comics WHERE title LIKE ? " + mode +" author LIKE ? " + mode + "  artist LIKE ?", params[0], params[1], params[2])
	if err != nil {
		panic(err.Error())
	}
	
	result := make([]Comic, 0)
	for query.Next() {
		var comic Comic
		query.Scan(&comic.ID, &comic.Title, &comic.Author, &comic.Artist, &comic.Demographic, &comic.Genre, &comic.Rating)
		result = append(result, comic)
	}
	return result
}

func main() {
	db , err = sql.Open("sqlite3", "./database-4.db")
	endPoints()
}