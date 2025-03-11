import Movie from "../../models/Movie.js"

const allMovies = async (req, res, next) => {
    try {
        let all = await Movie.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export default allMovies