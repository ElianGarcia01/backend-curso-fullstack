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

const userByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.nameParams
        console.log(nameQuery)
        
        let all = await User.find({ name: nameQuery })
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export { allUsers, userByName }