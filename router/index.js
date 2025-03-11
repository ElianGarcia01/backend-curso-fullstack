import { Router } from "express"
import usersRouter from "./usersRouter.js"
import carsRouter from "./carsRouter.js"
import booksRouter from "./booksRouter.js"
import moviesRouter from "./moviesRouter.js"
import gameplaysRouter from "./gameplaysRouter.js"
import citiesRouter from "./citiesRouter.js"

let routerIndex = Router()
routerIndex.use("/users", usersRouter)
routerIndex.use("/cars", carsRouter)
routerIndex.use("/books", booksRouter)
routerIndex.use("/movies", moviesRouter)
routerIndex.use("/gameplays", gameplaysRouter)
routerIndex.use("/cities", citiesRouter)

export default routerIndex