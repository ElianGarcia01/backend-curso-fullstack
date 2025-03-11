import { Router } from "express"
import usersReadController from "../controllers/users/read.js"

const usersRouter = Router()

usersRouter.get("/allUsers", usersReadController)

export default usersRouter