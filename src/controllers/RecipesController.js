const Recipe = require('../models/Recipe')
const UserController = require('../controllers/UsersController')
const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { description, value } = req.body

        let recipe = await Recipe.create({
            description,
            value
        })

        return res.json(recipe)

    },

    async index(req, res) {
        const allRecipes= await Recipe.find()

        return res.json(allRecipes)
    },
}