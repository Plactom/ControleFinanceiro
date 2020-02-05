const Router = require('express')
const RecipesController = require('./controllers/RecipesController')

const routes = Router()

routes.post('/addrecipe', RecipesController.store)
routes.get('/recipes', RecipesController.index)

routes.post('/login')

module.exports = routes