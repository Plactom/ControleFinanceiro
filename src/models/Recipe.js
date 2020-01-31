const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)