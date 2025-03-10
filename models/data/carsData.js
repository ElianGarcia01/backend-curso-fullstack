import "dotenv/config.js"
import "../../config/database.js"
import Car from "../Car.js"


const cars = [
    { brand: "Toyota", model: "Corolla", year: 2020, color: "White", type: "Sedan", transmission: "Automatic", price: 20000 },
    { brand: "Ford", model: "Mustang", year: 2019, color: "Red", type: "Sports", transmission: "Manual", price: 35000 },
    { brand: "Honda", model: "Civic", year: 2021, color: "Gray", type: "Sedan", transmission: "Automatic", price: 22000 },
    { brand: "Tesla", model: "Model S", year: 2022, color: "Black", type: "Electric", transmission: "Automatic", price: 80000 },
    { brand: "Chevrolet", model: "Camaro", year: 2018, color: "Yellow", type: "Sports", transmission: "Manual", price: 40000 },
    { brand: "BMW", model: "X5", year: 2020, color: "Blue", type: "SUV", transmission: "Automatic", price: 60000 },
    { brand: "Audi", model: "A4", year: 2021, color: "Silver", type: "Sedan", transmission: "Automatic", price: 45000 },
    { brand: "Mercedes-Benz", model: "C-Class", year: 2019, color: "Black", type: "Sedan", transmission: "Automatic", price: 50000 },
    { brand: "Nissan", model: "Altima", year: 2020, color: "White", type: "Sedan", transmission: "Automatic", price: 25000 },
    { brand: "Volkswagen", model: "Golf", year: 2018, color: "Red", type: "Hatchback", transmission: "Manual", price: 18000 },
    { brand: "Hyundai", model: "Tucson", year: 2021, color: "Gray", type: "SUV", transmission: "Automatic", price: 28000 },
    { brand: "Kia", model: "Sportage", year: 2020, color: "White", type: "SUV", transmission: "Automatic", price: 27000 },
    { brand: "Subaru", model: "Outback", year: 2019, color: "Green", type: "SUV", transmission: "Automatic", price: 32000 },
    { brand: "Mazda", model: "CX-5", year: 2021, color: "Red", type: "SUV", transmission: "Automatic", price: 30000 },
    { brand: "Porsche", model: "911", year: 2020, color: "Black", type: "Sports", transmission: "Manual", price: 100000 }
]

Car.insertMany(cars)

