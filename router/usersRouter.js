import { Router } from "express"
import {allUsers as CallingAllUsers, userByName } from "../controllers/users/read.js"

const usersRouter = Router()

usersRouter.get("/allUsers", CallingAllUsers)
usersRouter.get("/name/:nameParams",userByName)


export default usersRouter