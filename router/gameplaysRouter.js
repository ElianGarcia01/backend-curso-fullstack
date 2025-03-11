import { Router } from "express"
import gameplaysReadRouter from "../controllers/gameplays/read.js"


const gameplaysRouter = Router()

gameplaysRouter.get("/allGameplays",gameplaysReadRouter)


export default gameplaysRouter
