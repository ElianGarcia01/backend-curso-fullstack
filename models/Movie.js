import { Schema, model } from "mongoose"

let collections = "movies"

let schema = Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true }
}, {
    timestamps: true
})

let Movie = model(collections, schema)

export default Movie