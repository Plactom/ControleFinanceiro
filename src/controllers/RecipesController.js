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

        let recipeValue = recipe.value
        let user = await User.find()

        if(user.balance == Number) {
            const newValue = user.balance += recipeValue

            console.log(user)
            console.log(recipeValue)
    
            const balanceUpdate = await User.updateOne({ _id: user._id }, {
                $set: {
                    balance: newValue
                }
            })
            return res.json(newValue)
        } else {
            const newValue = recipeValue

            console.log(user)
            console.log(recipeValue)
    
            const balanceUpdate = await User.updateOne({ _id: user._id }, {
                $set: {
                    balance: newValue
                }
            })
            return res.json(newValue)
        }


        
    },

    async index(req, res) {
        const allRecipes= await Recipe.find()

        return res.json(allRecipes)
    },
}