import { Router } from "express"
import carsReadControlador from "../controllers/cars/read.js"


const carsRouter = Router()

carsRouter.get("/allCars",carsReadControlador)

export default carsRouter