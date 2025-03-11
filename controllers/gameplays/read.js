import Gameplay from "../../models/Gameplay.js"

const allGameplays = async (req, res, next) => {
    try {
        let all = await Gameplay.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export default allGameplays