import "dotenv/config.js"
import "../../config/database.js"
import City from "../City.js"

const cities = [
    { name: "Paris", country: "France", mainAttraction: "Eiffel Tower", climate: "Temperate", language: "French", annualVisitors: 38 },
    { name: "Rome", country: "Italy", mainAttraction: "Colosseum", climate: "Mediterranean", language: "Italian", annualVisitors: 28 },
    { name: "New York", country: "USA", mainAttraction: "Statue of Liberty", climate: "Continental", language: "English", annualVisitors: 65 },
    { name: "Tokyo", country: "Japan", mainAttraction: "Tokyo Tower", climate: "Subtropical", language: "Japanese", annualVisitors: 32 },
    { name: "Barcelona", country: "Spain", mainAttraction: "Sagrada Familia", climate: "Mediterranean", language: "Spanish", annualVisitors: 12 },
    { name: "London", country: "United Kingdom", mainAttraction: "Big Ben", climate: "Oceanic", language: "English", annualVisitors: 30 },
    { name: "Dubai", country: "United Arab Emirates", mainAttraction: "Burj Khalifa", climate: "Desert", language: "Arabic", annualVisitors: 16 },
    { name: "Sydney", country: "Australia", mainAttraction: "Sydney Opera House", climate: "Subtropical", language: "English", annualVisitors: 15 },
    { name: "Berlin", country: "Germany", mainAttraction: "Brandenburg Gate", climate: "Temperate", language: "German", annualVisitors: 14 },
    { name: "Bangkok", country: "Thailand", mainAttraction: "Grand Palace", climate: "Tropical", language: "Thai", annualVisitors: 22 },
    { name: "Cancun", country: "Mexico", mainAttraction: "Caribbean Beaches", climate: "Tropical", language: "Spanish", annualVisitors: 20 },
    { name: "Beijing", country: "China", mainAttraction: "Forbidden City", climate: "Continental", language: "Chinese", annualVisitors: 27 },
    { name: "Amsterdam", country: "Netherlands", mainAttraction: "Canal Belt", climate: "Oceanic", language: "Dutch", annualVisitors: 18 },
    { name: "Rio de Janeiro", country: "Brazil", mainAttraction: "Christ the Redeemer", climate: "Tropical", language: "Portuguese", annualVisitors: 17 },
    { name: "Istanbul", country: "Turkey", mainAttraction: "Hagia Sophia", climate: "Mediterranean", language: "Turkish", annualVisitors: 14 }
]

City.insertMany(cities)