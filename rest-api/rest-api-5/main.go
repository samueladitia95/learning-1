package main

import (
	"github.com/gorilla/mux"
	_ "github.com/mattn/go-sqlite3"
	"net/http"
	"encoding/json"
	"log"
	"database/sql"
	"fmt"
)

// Comic type struct
type Comic struct {
	ID int				`json:"id"`
	Title string		`json:"title"`
	Author string		`json:"author"`
	Artist string		`json:"artist"`
	Demographic string	`json:"demographic"`
	Genre string		`json:"genre"`
	Rating float64		`json:"rating"`
}

var db *sql.DB
var err error

func handleEndpoints() {
	router := mux.NewRouter()

	router.HandleFunc("/search", searchComic).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))
}

func searchComic(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type","application-json")
	v := r.URL.Query()

	title := v.Get("title")
	author := v.Get("author")
	artist := v.Get("artist")
	mode := v.Get("mode")
	
	result := make([]Comic, 0)
	trimResult := make([]Comic, 0)

	if mode == "or" {
		if title != "" {
			result = append(result, queryComic("title", title)...)
		}
		if author != "" {
			result = append(result, queryComic("author", author)...)
		}
		if artist != "" {
			result = append(result, queryComic("artist", artist)...)
		}

		trimResult = trimSlice(result)

	} else {
		title = "%" + title + "%"
		author = "%" + author + "%"
		artist = "%" + artist + "%"
		query, err := db.Query("SELECT * FROM comics WHERE title LIKE ? AND author LIKE ? AND artist LIKE ?", title, author, artist)
		if err != nil {
			panic(err.Error())
		}

		var comic Comic
		result := make([]Comic, 0)
		for query.Next(){
			err := query.Scan(&comic.ID, &comic.Title, &comic.Author, &comic.Artist, 
				&comic.Demographic, &comic.Genre, &comic.Rating)
			if err != nil {
				panic(err.Error())
			}
			result = append(result, comic)
		}
		trimResult = trimSlice(result)
	}
	json.NewEncoder(w).Encode(trimResult)
}

func queryComic(key string, value string) []Comic {
	query, err := db.Query("SELECT * FROM comics WHERE " + key +  " LIKE ?", 
		"%" + value + "%")
	if err != nil {
		panic(err.Error())
	}
	var comic Comic
	result := make([]Comic, 0)
	for query.Next(){
		err := query.Scan(&comic.ID, &comic.Title, &comic.Author, &comic.Artist, 
			&comic.Demographic, &comic.Genre, &comic.Rating)
		if err != nil {
			panic(err.Error())
		}
		result = append(result, comic)
	}
	return result
}

func trimSlice(slice []Comic) []Comic {
	for i := 0; i < len(slice); i++ {
		for j := i + 1; j < len(slice); j++ {
			if slice[i].ID == slice[j].ID {
				slice = append(slice[:j], slice[j + 1:]...)
			}
		}
	}
	return slice
}

func main() {
	db, err = sql.Open("sqlite3", "./database-3.db")
	if err != nil {
		panic(err.Error())
	}
	handleEndpoints()
	fmt.Println("test")
}
