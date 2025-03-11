import { Router } from "express"
import moviesReadControlador from "../controllers/movies/read.js"


const moviesRouter = Router()

moviesRouter.get("/allMovies",moviesReadControlador)

export default moviesRouter