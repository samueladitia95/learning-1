package main

import(
	"fmt"
	"net/http"
	"encoding/json"
	"strconv"
	"math/rand"
	"github.com/gorilla/mux"
	"log"
)

// string to integer function
func toInt(input string) int {
	result, _ := strconv.Atoi(input)
	return result
}

// Movie : struct type
type Movie struct {
	ID int				`json:"id"`
	Title string 		`json:"title"`
	Studio string 		`json:"studio"`
	Director *Director 	`json:"director"`
}

// Director : struct type
type Director struct {
	FirstName string	`json:"firstname"`
	LastName string		`json:"lastname"`
	Age int				`json:"age"`
}

// mock data
func mockData() []Movie {
	movieList := make([]Movie, 0)
	movieList = append(movieList, Movie{1, "The Dark Knight", "Warner Brother", 
		&Director{"Christopher", "Nolan", 40}})
	movieList = append(movieList, Movie{2, "Spirited Away", "Studio Ghibli", 
		&Director{"Hayao", "Miyazaki", 72}})
	movieList = append(movieList, Movie{3, "Wall-e", "Pixar studio", 
		&Director{"Brad", "Bird", 48}})
	return movieList
}

var movies []Movie

// set up router and endpoint
func handleRequest() {
	router := mux.NewRouter()

	// endpoints
	router.HandleFunc("/", helloWorld).Methods("GET")
	router.HandleFunc("/movies", getMovies).Methods("GET")
	router.HandleFunc("/movies/{id}", getMovie).Methods("GET")
	router.HandleFunc("/movies/{id}", deleteMovie).Methods("DELETE")
	router.HandleFunc("/movies", createMovie).Methods("POST")
	router.HandleFunc("/movies/{id}",updateMovie).Methods("PUT")

	log.Fatal(http.ListenAndServe(":8000", router))
}

// test function
func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

// get all movies
func getMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")
	json.NewEncoder(w).Encode(movies)
}

// get individual movie
func getMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")
	params := mux.Vars(r)
	for _ , item := range(movies) {
		if item.ID == toInt(params["id"]) {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	fmt.Fprintf(w, "Movie isn's avaliable")
}

// delete individual movie
func deleteMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application-json")
	params := mux.Vars(r)
	for index, item := range(movies) {
		if item.ID == toInt(params["id"]) {
			movies = append(movies[:index], movies[index + 1:]...)
			fmt.Fprintf(w, "Success, Selected Movie deleted")
			return
		}
	}
}

// add movie to database
func createMovie(w http.ResponseWriter, r *http.Request) {
	// w.Header().Set("content-type", "application-json")
	var movie Movie
	_ = json.NewDecoder(r.Body).Decode(&movie)
	movie.ID = rand.Intn(10000)
	movies = append(movies, movie)
	fmt.Fprintf(w, "Success, Movie added")
}

// update movie information
func updateMovie(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	for index, item := range(movies) {
		if item.ID == toInt(params["id"]) {
			movie := item
			movies = append(movies[:index], movies[index + 1:]...)
			_ = json.NewDecoder(r.Body).Decode(&movie)
			movies = append(movies, movie)
			fmt.Fprintf(w, "Success, Database Updated")
			return
		}
	}
}

// main function
func main() {
	movies = mockData()
	handleRequest()
}