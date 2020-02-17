const Recipe = require('../models/Recipe')
const User = require('../models/User')

module.exports = {
    async getBalance(req, res) {
        const recipes = await Recipe.find()
        if(recipes.length > 0) {
            try {
                let balanceValue = 0
                for(i = 0; i <= recipes.length -1; i++) {
                    balanceValue += recipes[i].value
                }
                
                return res.json({ balance: balanceValue })
            } catch (error) {
                return res.json({ message: error.message })
            }
        } else {
            return res.json({ balance: 0 })
        }

        
        
    }
}