import { Router } from "express"
import usersReadController from "../controllers/users/read.js"

const routerUsers = Router()

routerUsers.get("/allUsers", usersReadController)

export default routerUsers