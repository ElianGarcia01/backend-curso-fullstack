import { Router } from "express"
import booksReadControlador from "../controllers/books/read.js"


const booksRouter = Router()

booksRouter.get("/allBooks",booksReadControlador)

export default booksRouter