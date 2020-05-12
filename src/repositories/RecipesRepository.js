const Recipe = require('../models/Recipe')

module.exports = {
    async addRecipeInDB(recipe) {
        const recipeRecived = recipe
        return await Recipe.create({
            description: recipeRecived.description,
            value: recipeRecived.value
        })
    },

    async getAllRecipes() {
        const allRecipes = await Recipe.find()
        return allRecipes
    }
}