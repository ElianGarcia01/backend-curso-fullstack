import "dotenv/config.js"
import "../../config/database.js"
import Book from "../Book.js"

const books = [
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
    { title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Ulysses", author: "James Joyce", year: 1922 },
    { title: "In Search of Lost Time", author: "Marcel Proust", year: 1913 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
    { title: "Les Misérables", author: "Victor Hugo", year: 1862 },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890 },
    { title: "The Metamorphosis", author: "Franz Kafka", year: 1915 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
]

Book.insertMany(books)