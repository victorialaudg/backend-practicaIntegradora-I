import mongoose from 'mongoose'
const productCollection = 'products'

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    photo: String
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel