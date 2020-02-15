const Recipe = require('../models/Recipe')
const UserController = require('../controllers/UsersController')

module.exports = {
    async store(req, res) {
        const { description, value } = req.body
        const balance = UserController.getBalance()
        console.log(balance)

        let recipe = await Recipe.create({
            description,
            value
        })

        // await User.create({
        //     balance
        // })
        return res.json(recipe)
    },

    async index(req, res) {
        const allRecipes= await Recipe.find()

        return res.json(allRecipes)
    },
}