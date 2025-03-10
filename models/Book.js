import { Schema, model } from "mongoose"

let collections = "books"

let schema = Schema({
    title: { type: String, required: true },
    author: { type: String, required: false },
    year: { type:Number, required:true }
},
{
    timestamps: true
})


let Book = model(collections, schema)

export default Book