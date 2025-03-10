import "dotenv/config.js"
import "../../config/database.js"
import Gameplay from "../Gameplay.js"

const gameplays = [
    { name: "The Legend of Zelda: Breath of the Wild", year: 2017, platform: "Nintendo Switch", genre: "Adventure", rating: 97 },
    { name: "Red Dead Redemption 2", year: 2018, platform: "PlayStation 4", genre: "Action-Adventure", rating: 96 },
    { name: "Cyberpunk 2077", year: 2020, platform: "PC", genre: "RPG", rating: 75 },
    { name: "Super Mario Odyssey", year: 2017, platform: "Nintendo Switch", genre: "Platform", rating: 97 },
    { name: "The Witcher 3: Wild Hunt", year: 2015, platform: "PC", genre: "RPG", rating: 93 },
    { name: "God of War", year: 2018, platform: "PlayStation 4", genre: "Action-Adventure", rating: 94 },
    { name: "Animal Crossing: New Horizons", year: 2020, platform: "Nintendo Switch", genre: "Simulation", rating: 90 },
    { name: "Dark Souls III", year: 2016, platform: "PC", genre: "RPG", rating: 89 },
    { name: "Minecraft", year: 2011, platform: "Multiplatform", genre: "Sandbox", rating: 93 },
    { name: "Fortnite", year: 2017, platform: "Multiplatform", genre: "Battle Royale", rating: 78 },
    { name: "Hades", year: 2020, platform: "PC", genre: "Roguelike", rating: 93 },
    { name: "Portal 2", year: 2011, platform: "PC", genre: "Puzzle", rating: 95 },
    { name: "Elden Ring", year: 2022, platform: "PlayStation 5", genre: "RPG", rating: 96 },
    { name: "Among Us", year: 2018, platform: "Mobile", genre: "Multiplayer", rating: 85 },
    { name: "Stardew Valley", year: 2016, platform: "PC", genre: "Simulation", rating: 89 }
]


Gameplay.insertMany(gameplays)


