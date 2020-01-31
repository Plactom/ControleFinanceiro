const Router = require('express')
const RecipesController = require('./controllers/RecipesController')

const routes = Router()

routes.post('/addrecipe', RecipesController.store)
routes.get('/recipes', RecipesController.index)
    
module.exports = routes