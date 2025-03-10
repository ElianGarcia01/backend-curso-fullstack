import "dotenv/config.js"
import "../../config/database.js"
import Movie from "../Movie.js"

const movies = [
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Drama" },
    { title: "Titanic", director: "James Cameron", year: 1997, genre: "Romance" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", director: "Peter Jackson", year: 2001, genre: "Fantasy" },
    { title: "The Matrix", director: "Lana and Lilly Wachowski", year: 1999, genre: "Science Fiction" },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Science Fiction" },
    { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, genre: "Drama" },
    { title: "The Lion King", director: "Roger Allers", year: 1994, genre: "Animation" },
    { title: "Jurassic Park", director: "Steven Spielberg", year: 1993, genre: "Adventure" },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime" },
    { title: "Gladiator", director: "Ridley Scott", year: 2000, genre: "Action" },
    { title: "The Shining", director: "Stanley Kubrick", year: 1980, genre: "Horror" },
    { title: "The Silence of the Lambs", director: "Jonathan Demme", year: 1991, genre: "Thriller" },
    { title: "Avatar", director: "James Cameron", year: 2009, genre: "Science Fiction" },
    { title: "Star Wars: Episode IV - A New Hope", director: "George Lucas", year: 1977, genre: "Science Fiction" },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action" }
]

Movie.insertMany(movies)