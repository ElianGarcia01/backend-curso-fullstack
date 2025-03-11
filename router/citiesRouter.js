import { Router } from "express"
import citiesReadRouter from "../controllers/cities/read.js"

const citiesRouter = Router()

citiesRouter.get("/allCities", citiesReadRouter)

export default citiesRouter