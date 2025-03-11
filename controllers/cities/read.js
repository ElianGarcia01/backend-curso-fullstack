import City from "../../models/City.js"

const allCities = async (req, res, next) => {
    try {
        let all = await City.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export default allCities