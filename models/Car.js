import { Schema, model } from "mongoose"

let collection = "cars"

let schema = Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    type: { type: String, required: true },
    transmission: { type: String, required: true },
    price: { type: String, required: true },
},
    {
        timestamps: true
    })

let Car = model(collection, schema)

export default Car