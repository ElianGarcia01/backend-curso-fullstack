import { response } from "express"
import User from "../../models/User.js"

const allUsers = async (req, res, next) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export default allUsers