import Book from "../../models/Book.js"

const allBooks = async (req, res, next) => {
    try {
        let all = await Book.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        res.status(500).json({
            response: error
        })
    }
}

export default allBooks