import { Schema, model } from "mongoose"

let collections = "gameplays"

let schema = Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    platform: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true }
},{
    timestamps: true
})

let Gameplay = model(collections, schema)

export default Gameplay