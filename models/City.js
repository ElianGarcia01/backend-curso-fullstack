import { Schema, model } from "mongoose"

let collections = "cities"

let schema = Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    mainAttraction: { type: String, required: true },
    climate: { type: String, required: true },
    language: { type: String, required: true },
    annualVisitors: { type: String, required: true }
}, {
    timestamps: true
})

let City = model(collections, schema)

export default City