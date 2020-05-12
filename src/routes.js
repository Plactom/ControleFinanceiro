const Router = require('express')

const RecipesController = require('./controllers/RecipesController')
const AuthController = require('./controllers/AuthController')

const routes = Router()

routes.post('/addrecipe', RecipesController.addRecipe)
routes.get('/recipes', RecipesController.index)
routes.post('/auth/register', AuthController.userRegistration)

module.exports = routes